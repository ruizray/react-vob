import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "./client";
import { Row, Col, Card, CardBody, CardImg, ListGroup, ListGroupItem } from "reactstrap";
import BlockContent from "@sanity/block-content-to-react";
import { ContentCard, ContentCardSubsection } from "./components/ContentCard";
import { ContactCardSideBar, ContactSideBar } from "./components/ContactInformation";
import CallToAction from "./components/CallToAction";
import ScrollSpy from "./components/ScrollSpy";
import LastUpdated from "./components/LastUpdated";

export default function OnePost() {
	const [postData, setPostData] = useState(null);

	const { slug } = useParams();

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "page" && slug.current == $slug]{
          title,
		  leftColumnBlock,
          slug,
		  scrollspy,
          mainComponents,
          "contacts" : contacts[]->,
		  "members": membersList[],
		  _updatedAt
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
			imageCarousel: (props) => {
				console.log("IMAGE CAROUSEL", props.node.images);
				return (
					<>
						<div id='carouselExampleCaptions' class='carousel slide border border-5 text-black' data-mdb-ride='carousel'>
							<div className='carousel-indicators'>
								{props.node.images &&
									props.node.images.map((image, index) => {
										return (
											<button
												type='button'
												data-mdb-target='#carouselExampleCaptions'
												data-mdb-slide-to={index}
												className='active'
												aria-current='true'
												aria-label={"Slide " + (index + 1)}></button>
										);
									})}
							</div>
							<div className='carousel-inner text-primary'>
								{props.node.images &&
									props.node.images.map((image, index) => {
										console.log(image);
										if (index === 0) {
											return (
												<div key={image._key} className='carousel-item active'>
													<img src={image.imageUrl} className='d-block w-100' alt='...' />
													<div className='carousel-caption d-none d-md-block'>
														<h2>{image.caption}</h2>
													</div>
												</div>
											);
										} else
											return (
												<div className='carousel-item'>
													<img src={image.imageUrl} className='d-block w-100' alt='...' />
													<div className='carousel-caption d-none d-md-block'>
														<h2>{image.caption}</h2>
													</div>
												</div>
											);
									})}
							</div>
							<button className='carousel-control-prev' type='button' data-mdb-target='#carouselExampleCaptions' data-mdb-slide='prev'>
								<span className='carousel-control-prev-icon' aria-hidden='true'></span>
								<span className='visually-hidden'>Previous</span>
							</button>
							<button className='carousel-control-next' type='button' data-mdb-target='#carouselExampleCaptions' data-mdb-slide='next'>
								<span className='carousel-control-next-icon' aria-hidden='true'></span>
								<span className='visually-hidden'>Next</span>
							</button>
						</div>
					</>
				);
			},
			codeBlock: (props) => {
				console.log("%c CodeBlock", "color:yellow", props);
				return <div key={props._key} dangerouslySetInnerHTML={{ __html: props.node.code }}></div>;
			},
			block: (props) => {
				console.log("%c Block", "color:green", props.node.markDefs);
				if (props.node.markDefs.length > 0 && props.node.markDefs[0].subheader === true) {
					return (
						<p key={props._key} className='lead mb-1 text-muted'>
							{props.children}
						</p>
					);
				} else {
					return <p key={props._key}> {props.children}</p>;
				}
			},
			CTA: (props) => {
				console.log("%c CTA ", "color:purple", props);
				const { CTAbody, buttonText, buttonLink } = props.node;
				return (
					<CallToAction key={props._key} buttonText={buttonText} buttonLink={buttonLink}>
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
			profile: ({ node }) => {
				console.log("%c CTA ", "color:purple", node);

				return (
					<>
						<Card className='border shadow-none'>
							<CardBody className='px-0 pt-0 '>
								<div className='d-flex flex-column align-items-center text-center '>
									{node.imageLink && <CardImg className='pb-3' src={node.imageLink}></CardImg>}

									<div className='mt-2 text-truncate w-100'>
										{node.header && <h4 className='text-truncate'>{node.header}</h4>}
										{node.subtext && <h4 className='text-muted'>{node.subtext}</h4>}
									</div>
								</div>
							</CardBody>
						</Card>
						<Card className='mt-3 border shadow-none'>
							<ListGroup flush={true}>
								{node.keyValuePairs &&
									node.keyValuePairs.map((keyValue) => {
										return (
											<ListGroupItem
												key={keyValue._key}
												className='d-flex justify-content-between align-items-center flex-wrap'>
												<h6 className='mb-0'>{keyValue.key}</h6>
												<span className='text-muted'>{keyValue.value}</span>
											</ListGroupItem>
										);
									})}
							</ListGroup>
						</Card>
					</>
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
				return (
					<strong key={props._key} style={{ fontWeight: "bold" }}>
						{props.children}
					</strong>
				);
			},
			kbd: (props) => {
				console.log("%c KBD mark found", "color:gray", props);
				return (
					<kbd key={props._key} style={{ fontWeight: "bold" }}>
						{props.children}
					</kbd>
				);
			},
			iconWithText: (props) => {
				console.log("%c Strong found", "color:yellow", props);
				return (
					<>
						<i key={props._key} style={{ verticalAlign: "middle", fontSize: "inherit" }} className=' material-icons text-center'>
							{props.mark.icon}
						</i>
						{props.mark.text}
					</>
				);
			},
		},
	};

	if (!postData)
		return (
			<Row className='gx-3'>
				<Col md={3}></Col>
				<Col id='fadeInTop' md={6}>
					<div
						style={{ width: "6rem", height: "6rem", marginRight: "auto", marginLeft: "auto", display: "block" }}
						className='spinner-border'
						role='status'>
						<span className='visually-hidden'>Loading...</span>
					</div>
				</Col>
				<Col md={3} id='fadeInRight'></Col>
			</Row>
		);

	return (
		<LastUpdated lastUpdated={postData._updatedAt}>
			<Row className='gx-3'>
				<Col md={3}>
					{postData.scrollspy && <ScrollSpy></ScrollSpy>}{" "}
					{postData.leftColumnBlock && (
						<BlockContent key={postData.leftColumnBlock._key} blocks={postData.leftColumnBlock} serializers={serializers} />
					)}{" "}
				</Col>
				<Col id='fadeInTop' md={6}>
					{postData.mainComponents &&
						postData.mainComponents.map((mainComponentContainer) => {
							console.log(mainComponentContainer);

							return (
								<ContentCard
									key={mainComponentContainer._key}
									id={mainComponentContainer._key}
									icon='front_hand'
									header={mainComponentContainer.header}>
									<BlockContent blocks={mainComponentContainer.blockContent} serializers={serializers} />
								</ContentCard>
							);
						})}
				</Col>
				<Col md={3} id='fadeInRight'>
					{postData.contacts && <ContactSideBar people={postData.contacts} members={postData.members}></ContactSideBar>}
				
				</Col>
			</Row>
		</LastUpdated>
	);
}
