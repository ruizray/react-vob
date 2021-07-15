import React from "react";
import { FrontDoorCard } from "../components/LinkCard";
import { Row, Col } from "reactstrap";
const FrontDoor = (props) => {
	return (
		<>
			<Row className='gx-3'>
				<Col md={2}></Col>
				<Col id='fadeInTop'>
					<Row className='gx-2 justify-content-center'>
						<Col md={6} lg={4} mb-5>
							<FrontDoorCard
								title='Test'
								imgLink='https://www.bolingbrook.com/vertical/Sites/%7B55EB27CA-CA9F-40A5-A0EF-1E4EEF52F39E%7D/uploads/Service_Request_Banner_Web.jpg'>
								<p>Report Potholes, downed mailboxes, etc.</p>
							</FrontDoorCard>
						</Col>
						<Col md={6} lg={4} mb-5>
							<FrontDoorCard
								title='Test'
								imgLink='https://www.bolingbrook.com/vertical/Sites/%7B55EB27CA-CA9F-40A5-A0EF-1E4EEF52F39E%7D/uploads/Service_Request_Banner_Web.jpg'>
								<p>Pay a utility bill online here</p>
							</FrontDoorCard>
						</Col>
						<Col md={6} lg={4} mb-5>
							<FrontDoorCard title="Test" imgLink='https://www.bolingbrook.com/vertical/Sites/%7B55EB27CA-CA9F-40A5-A0EF-1E4EEF52F39E%7D/uploads/Service_Request_Banner_Web.jpg'>
								<p>Apply for Express Permits Online</p>
							</FrontDoorCard>
						</Col>
					</Row>
				</Col>
			</Row>
		</>
	);
};

export default FrontDoor;
