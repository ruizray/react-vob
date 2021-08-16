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
			codeBlock: ({ _key, node }) => {
				const { code } = node;
				console.log("%c CodeBlock", "color:yellow", node);
				return <div key={_key} dangerouslySetInnerHTML={{ __html: code }}></div>;
			},
			block: ({ node, _key, children }) => {
				const { markDefs } = node;
				console.log("%c Block", "color:green", markDefs);
				if (markDefs.length > 0 && markDefs[0].subheader === true) {
					return (
						<p key={_key} className='lead mb-1 text-muted'>
							{children}
						</p>
					);
				} else {
					return <p key={_key}> {children}</p>;
				}
			},

			contactCardsContainer: ({ node }) => {
				const { contactCards } = node;
				return (
					<Row className=' d-flex justify-content-center align-items-center d-flex align-items-stretch '>
						{contactCards &&
							contactCards.map((contactCard) => {
								return (
									<Col className='mt-2' lg={3}>
										<ContactCardProfile type={3} person={contactCard}></ContactCardProfile>
									</Col>
								);
							})}
					</Row>
				);
			},
			linkCardsContainer: ({ node }) => {
				const { linkCards } = node;
				return (
					<Row className=' d-flex justify-content-center align-items-center d-flex align-items-stretch '>
						{linkCards &&
							linkCards.map((linkCard, index) => {
								const { text, icon, links, cardImage, cardImageAltText } = linkCard;

								return (
									<Col key={linkCard._key} className='mb-4 px-4' lg={3} md={6}>
										<TwoLinkCard title={text} icon={icon} buttons={links} imageLink={cardImage} imageAlt={cardImageAltText} />
									</Col>
								);
							})}
					</Row>
				);
			},
			linkGroupContainer: ({ node }) => {
				console.log(node);
				const { linkGroups } = node;
				const breakpointColumnsObj = {
					default: 3,
					1024: 2,
					768: 1,
				};
				return (
					<>
						<Masonry breakpointCols={breakpointColumnsObj} className='my-masonry-grid' columnClassName='my-masonry-grid_column'>
							{linkGroups &&
								linkGroups.map((linkgroup, index) => {
									const { groupName, link } = linkgroup;
									return (
										<div className='card border'>
											<h4 className='card-header px-3 py-2 mb-0 text-center '>{groupName}</h4>
											<ul className='list-group list-group-flush text-center text-primary'>
												{linkgroup &&
													link.map((button, index) => {
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
						<div className='row g-4'></div>
					</>
				);
			},
		},
		container: (test) => {
			console.log("CONTAINER", test);
			return <>{test.children}</>;
		},
		marks: {
			strong: ({children, _key}) => {
				console.log("%c Strong mark found", "color:red", children);
				return (
					<strong key={_key} style={{ fontWeight: "bold" }}>
						{children}
					</strong>
				);
			},
			kbd: ({children, _key}) => {
				console.log("%c KBD mark found", "color:gray", children);
				return (
					<kbd key={_key} style={{ fontWeight: "bold" }}>
						{children}
					</kbd>
				);
			},
		},
	};

	if (!postData) return <div>Loading...</div>;

	return <>{postData.description && <BlockContent key={postData.description._key} blocks={postData.description} serializers={serializers} />}</>;
};

export default LandingPage;
