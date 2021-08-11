import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Row, Col } from "reactstrap";
import { TwoLinkCard } from "./components/LinkCard";
import { ContactCardProfile } from "./components/ContactInformation";
import sanityClient from "./client";
import BlockContent from "@sanity/block-content-to-react";
import Masonry from "react-masonry-css";

const LandingPage = () => {
	const [postData, setPostData] = useState(null);
	const { slug } = useParams();

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "landingPage" && slug.current==$slug]{
					...,
						description[]{
							...,
							contactCards[]->{
							...
					  	}
						
					  }
					  
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

			contactCardsContainer: (props) => {
				console.log("Contact Cards Container", props);
				return (
					<Row className=' d-flex justify-content-center align-items-center d-flex align-items-stretch '>
						{props.node.contactCards &&
							props.node.contactCards.map((contactCard) => {
								console.log(contactCard);
								return (
									<Col className='mt-2' lg={3}>
										<ContactCardProfile type={3} person={contactCard}></ContactCardProfile>
									</Col>
								);
							})}
					</Row>
				);
			},
			linkCardsContainer: (props) => {
				console.log("Link Cards", props);
				return (
					<Row className=' d-flex justify-content-center align-items-center d-flex align-items-stretch '>
						{props.node.linkCards &&
							props.node.linkCards.map((linkCard, index) => {
								console.log("INDEX:", index);
								return (
									<Col key={linkCard._key} className='mb-4 px-4' lg={3} md={6}>
										<TwoLinkCard
											title={linkCard.text}
											icon={linkCard.icon}
											buttons={linkCard.links}
											imageLink={linkCard.cardImage}
											imageAlt={linkCard.cardImageAltText}
										/>
									</Col>
								);
							})}
					</Row>
				);
			},
			linkGroupContainer: (props) => {
				console.log(props);
				const breakpointColumnsObj = {
					default: 3,
					1024: 2,
					768: 1,
				
				  };
				return (
					<>
						<Masonry breakpointCols={breakpointColumnsObj} className='my-masonry-grid' columnClassName='my-masonry-grid_column'>
						{props.node.linkGroups &&
								props.node.linkGroups.map((linkgroup, index) => {
									return (
								
											<div className='card border'>
												<h4 className='card-header px-3 py-2 mb-0 text-center '>{linkgroup.groupName}</h4>
												<ul className='list-group list-group-flush text-center text-primary'>
													{linkgroup &&
														linkgroup.link.map((button, index) => {
															return (
																<a
																	key={button._key}
																	href={button.linkUrl}
																	className='list-group-item list-group-item-action text-primary'
																	aria-current='true'>
																	{button.linkText}
																</a>
															);
														})}
												</ul>
								
										</div>
									);
								})}
						</Masonry>
						<div className='row g-4'>
							
						</div>
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
		},
	};

	if (!postData) return <div>Loading...</div>;

	return <>{postData.description && <BlockContent key={postData.description._key} blocks={postData.description} serializers={serializers} />}</>;
};

export default LandingPage;
