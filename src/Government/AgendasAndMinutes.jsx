import React from "react";
import { Row, Col } from "reactstrap";
import { TwoLinkCard } from "../components/LinkCard";

const AgendasAndMinutes = () => {
	return (
		<>
			<Row className=' d-flex justify-content-center align-items-center d-flex align-items-stretch '>
				<Col className='mb-4 px-4' lg={3} md={6}>
					<TwoLinkCard title='Village Board' icon='gavel' link='https://www.bolingbrook.com/fire' />
				</Col>
				<Col className='mb-4 px-4' lg={3} md={6}>
					<TwoLinkCard title='Finance Committee' icon='payments' link='https://www.bolingbrook.com/police' />
				</Col>
				<Col className='mb-4 px-4' lg={3} md={6}>
					<TwoLinkCard title='Zoning Committee' icon='house_siding' link='https://www.bolingbrook.com/executive' />
				</Col>

				<div id='responsiveBreak'></div>
				<Col className='mb-4  px-4' lg={3} md={6}>
					<TwoLinkCard title='Public Safety' icon='support' link='https://www.bolingbrook.com/finance' />
				</Col>
				<Col className='mb-4  px-4' lg={3} md={6}>
					<TwoLinkCard title='Public Services' icon='construction' link='https://www.bolingbrook.com/human_resources' />
				</Col>
				<Col className='mb-4  px-4' lg={3} md={6}>
					<TwoLinkCard title='Planning' icon='square_foot' link='https://www.bolingbrook.com/it_dept' />
				</Col>
				<Col className='mb-4  px-4' lg={3} md={6}>
					<TwoLinkCard title='Fire and Police Board' icon='health_and_safety' link='https://www.bolingbrook.com/public_services' />
				</Col>
			</Row>
		</>
	);
};

export default AgendasAndMinutes;
