import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "./client";
import { Row, Col } from "reactstrap";
import BlockContent from "@sanity/block-content-to-react";
import { ContentCard, ContentCardSubsection } from "./components/ContentCard";
import { ContactSideBar } from "./components/ContactInformation";
import CallToAction from "./components/CallToAction";
import ScrollSpy from "./components/ScrollSpy";

export default function OnePost() {
	const [postData, setPostData] = useState(null);
	const { slug } = useParams();

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "page" && slug.current == $slug]{
          title,
          slug,
		  scrollspy,
          mainComponents,
          "contacts" :contacts[]->
       }`,
				{ slug }
			)
			.then((data) => {
				console.log("DATA from sanity", data);
				setPostData(data[0]);

			})
			.catch(console.error);
	}, [slug]);

	const serializers = {
		types: {
			block: (props) => {
				console.log("%c Block", "color:green", props);
				return <p>{props.children}</p>;
			},
			CTA: (props) => {
				console.log("%c CTA ", "color:purple", props);

				const { CTAbody, buttonText, buttonLink } = props.node;

				return (
					<CallToAction buttonText={buttonText} buttonLink={buttonLink}>
						<p>{CTAbody}</p>
					</CallToAction>
				);
			},
			subSection: (props) => {
				console.log("%c Subsection Block ", "color:blue", props);
				return (
					<ContentCardSubsection id={props.node._key} icon='front_hand' subHeader={props.node.header}>
						<BlockContent blocks={props.node.blockContent} serializers={serializers} />
					</ContentCardSubsection>
				);
			},
		},
		container: (test) => {
			console.log("CONTAINER", test);
			return <>{test.children}</>;
		},
		marks: {
			strong: (props) => {
				console.log("%c Strong mark found", "color:red", props);
				return <strong style={{ fontWeight: "bold" }}>{props.children}</strong>;
			},
			iconWithText: (props) => {
				console.log("%c Strong found", "color:yellow", props);
				return (
					<>
						<i style={{ verticalAlign: "middle", fontSize: "inherit" }} className=' material-icons text-center'>
							{props.mark.icon}
						</i>
						{props.mark.text}
					</>
				);
			},
		},
	};

	if (!postData) return <div>Loading...</div>;

	return (
		<div>
			<Row className='gx-3'>
				<Col md={3}>{postData.scrollspy && <ScrollSpy></ScrollSpy>} </Col>
				<Col id='fadeInTop' md={6}>
					{postData.mainComponents &&
						postData.mainComponents.map((mainComponentContainer) => {
							console.log(mainComponentContainer);
							return (
								<ContentCard id={mainComponentContainer._key} icon='front_hand' header={mainComponentContainer.header}>
									<BlockContent blocks={mainComponentContainer.blockContent} serializers={serializers} />
								</ContentCard>
							);
						})}
				</Col>
				<Col md={3} id='fadeInRight'>
					{postData.contacts && <ContactSideBar people={postData.contacts}></ContactSideBar>}
				</Col>
			</Row>
		</div>
	);
}
