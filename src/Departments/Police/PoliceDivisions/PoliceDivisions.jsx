import React from "react";
import { Col, Row } from "reactstrap";
import { LinkCard } from "../../../components/LinkCard";
const PoliceDivisions = () => {
	return (
		<Row className=' d-flex justify-content-center align-items-center d-flex align-items-stretch '>
			<Col className='mb-4 px-4' lg={3} md={6}>
				<LinkCard title='Animal Control' icon='local_fire_department' link='https://www.bolingbrook.com/fire' />
			</Col>
			<Col className='mb-4 px-4' lg={3} md={6}>
				<LinkCard title='Crime Prevention' icon='local_police' link='https://www.bolingbrook.com/police' />
			</Col>
			<Col className='mb-4 px-4' lg={3} md={6}>
				<LinkCard title='Executive Department' icon='gavel' link='https://www.bolingbrook.com/executive' />
			</Col>

			<div id='responsiveBreak'></div>
			<Col className='mb-4  px-4' lg={3} md={6}>
				<LinkCard title='Finance Department' icon='payments' link='https://www.bolingbrook.com/finance' />
			</Col>
			<Col className='mb-4  px-4' lg={3} md={6}>
				<LinkCard title='Human Resources' icon='perm_contact_calendar' link='https://www.bolingbrook.com/human_resources' />
			</Col>
			<Col className='mb-4  px-4' lg={3} md={6}>
				<LinkCard title='Information Technology' icon='phonelink' link='https://www.bolingbrook.com/it_dept' />
			</Col>
			<Col className='mb-4  px-4' lg={3} md={6}>
				<LinkCard title='Public Services' icon='construction' link='https://www.bolingbrook.com/public_services' />
			</Col>
		</Row>
	);
};

export default PoliceDivisions;
