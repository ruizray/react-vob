import React from "react";
import { Row, Col } from "reactstrap";
import { TwoLinkCard } from "../components/LinkCard";

const AgendasAndMinutes = () => {
	return (
		<>
			<Row className=' d-flex justify-content-center align-items-center d-flex align-items-stretch '>
				<Col className='mb-4 px-4' lg={3} md={6}>
					<TwoLinkCard
						title='Village Board'
						icon='gavel'
						buttons={[
							{ link: "test", text: "Test Link" },
							{ link: "test2", text: "link2" },
						]}
					/>
				</Col>
				<Col className='mb-4 px-4' lg={3} md={6}>
					<TwoLinkCard
						title='Finance Committee'
						icon='payments'
						buttons={[
							{ link: "test", text: "Test Link" },
							{ link: "test2", text: "link2" },
						]}
					/>
				</Col>
				<Col className='mb-4 px-4' lg={3} md={6}>
					<TwoLinkCard
						title='Zoning Committee'
						icon='house_siding'
						buttons={[
							{ link: "test", text: "Test Link" },
							{ link: "test2", text: "link2" },
						]}
					/>
				</Col>

				<div id='responsiveBreak'></div>
				<Col className='mb-4  px-4' lg={3} md={6}>
					<TwoLinkCard
						title='Public Safety'
						icon='support'
						buttons={[
							{ link: "test", text: "Test Link" },
							{ link: "test2", text: "link2" },
						]}
					/>
				</Col>
				<Col className='mb-4  px-4' lg={3} md={6}>
					<TwoLinkCard
						title='Public Services'
						icon='construction'
						buttons={[
							{ link: "test", text: "Test Link" },
							{ link: "test2", text: "link2" },
						]}
					/>
				</Col>
				<Col className='mb-4  px-4' lg={3} md={6}>
					<TwoLinkCard
						title='Planning'
						icon='square_foot'
						buttons={[
							{ link: "test", text: "Test Link" },
							{ link: "test2", text: "link2" },
						]}
					/>
				</Col>
				<Col className='mb-4  px-4' lg={3} md={6}>
					<TwoLinkCard
						title='Fire and Police Board'
						icon='health_and_safety'
						buttons={[
							{ link: "test", text: "Test Link" },
							{ link: "test2", text: "link2" },
						]}
					/>
				</Col>
			</Row>
		</>
	);
};

export default AgendasAndMinutes;
