import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Row, Col } from "reactstrap";
import { TwoLinkCard } from "./components/LinkCard";

import sanityClient from "./client";
const LandingPage = () => {
	const [postData, setPostData] = useState(null);
	const { slug } = useParams();

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "landingPage" && slug.current == $slug]{
         ...
       }`,
				{ slug }
			)
			.then((data) => {
				console.log("DATA from sanity", data);
				setPostData(data[0]);
			})
			.catch(console.error);
	}, [slug]);
	if (!postData) return <div>Loading...</div>;
	return (
		<>
			<Row className=' d-flex justify-content-center align-items-center d-flex align-items-stretch '>
				{postData.linkCards &&
					postData.linkCards.map((linkCard, index) => {
						console.log("INDEX:", index);
						return (
							<Col key={linkCard._key} className='mb-4 px-4' lg={3} md={6}>
								<TwoLinkCard title={linkCard.text} icon={linkCard.icon} buttons={linkCard.links} />
							</Col>
						);
					})}

				
			</Row>
		</>
	);
};

export default LandingPage;
