import React from "react";
import { Row, Col } from "reactstrap";
import { TwoLinkCard } from "../components/LinkCard";

const LandingPage = () => {
	return (
		<>
			<Row className=' d-flex justify-content-center align-items-center d-flex align-items-stretch '>
				<Col className='mb-4 px-4' lg={3} md={6}>
					<TwoLinkCard
						title='Fire Department'
						icon='local_fire_department'
						buttons={[{ link: "https://www.bolingbrook.com/fire", text: "Visit" }]}
					/>
				</Col>
				<Col className='mb-4 px-4' lg={3} md={6}>
					<TwoLinkCard title='Police Department' icon='local_police' buttons={[{ link: "https://www.bolingbrook.com/police", text: "Visit" }]} />
				</Col>
				<Col className='mb-4 px-4' lg={3} md={6}>
					<TwoLinkCard title='Executive Department' icon='gavel' buttons={[{ link: "https://www.bolingbrook.com/executive", text: "Visit" }]} />
				</Col>

				<div id='responsiveBreak'></div>
				<Col className='mb-4  px-4' lg={3} md={6}>
					<TwoLinkCard title='Finance Department' icon='payments' buttons={[{ link: "https://www.bolingbrook.com/finance", text: "Visit" }]} />
				</Col>
				<Col className='mb-4  px-4' lg={3} md={6}>
					<TwoLinkCard
						title='Human Resources'
						icon='perm_contact_calendar'
						buttons={[{ link: "https://www.bolingbrook.com/human_resources", text: "Visit" }]}
					/>
				</Col>
				<Col className='mb-4  px-4' lg={3} md={6}>
					<TwoLinkCard
						title='Information Technology'
						icon='phonelink'
						buttons={[{ link: "https://www.bolingbrook.com/it_dept", text: "Visit" }]}
					/>
				</Col>
				<Col className='mb-4  px-4' lg={3} md={6}>
					<TwoLinkCard
						title='Public Services'
						icon='construction'
						buttons={[{ link: "https://www.bolingbrook.com/public_services", text: "Visit" }]}
					/>
				</Col>
			</Row>
		</>
	);
};

export default LandingPage;
