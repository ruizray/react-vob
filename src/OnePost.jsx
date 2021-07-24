import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "./client";
import { Row, Col } from "reactstrap";
import BlockContent from "@sanity/block-content-to-react";
import { ContentCard, ContentCardSubsection } from "./components/ContentCard";
import { ContactSideBar } from "./components/ContactInformation";

export default function OnePost() {
	const [postData, setPostData] = useState(null);
	const { slug } = useParams();

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "page" && slug.current == $slug && defined(contacts)]{
          title,
          slug,
          mainComponents,
          "contacts" :contacts[]->
       }`,
				{ slug }
			)
			.then((data) => {
				console.log(data);
				setPostData(data[0]);
				console.log("CONTACTS", postData.contacts);
			})
			.catch(console.error);
	}, [slug]);

	const serializers = {
		types: {
			block: (props) => {
				console.log(props.node);
				return (
					<p>
						{props.node.children[0].text}
					</p>
				);
			},
		},
	};

	if (!postData) return <div>Loading...</div>;

	return (
		<div>
			<Row className='gx-3'>
				<Col md={3}></Col>
				<Col id='fadeInTop' md={6}>
				 {postData &&
						postData.mainComponents.map((mainComponentContainer) => {
							return (
								<ContentCard icon='front_hand' header={mainComponentContainer.header}>
									{mainComponentContainer.mainComponent &&
										mainComponentContainer.mainComponent.map((component) => {
											if (component._type === "mainSectionParagraph") {
												console.log(component);
												return <BlockContent blocks={component.blockContent} serializers={serializers} />;
											} else {
												return <p>Nope</p>;
											}
										})}
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
const parseBody = (body) => {
	console.log(body);

	return (
		body &&
		body.map((block) => {
			return block.children.map((test) => {
				return <p>{test}</p>;
			});
		})
	);
};
