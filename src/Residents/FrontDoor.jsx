import React from "react";
import { FrontDoorLinkCard } from "../components/LinkCard";
import { ContentCard, FrontDoorCard } from "../components/ContentCard";
import { Row, Col } from "reactstrap";
const FrontDoor = (props) => {
	return (
		<>
			<Row className='gx-5 mt-4'>
				<Col md={1}></Col>
				<Col >
					<Row id='fadeInTop' className='g-3 justify-content-center'>
						
						<Col  md={6} lg={4} className='mb-3'>
							<FrontDoorLinkCard
								title='Service Requests'
								imgLink='https://www.bolingbrook.com/vertical/Sites/%7B55EB27CA-CA9F-40A5-A0EF-1E4EEF52F39E%7D/uploads/Service_Request_Banner_Web.jpg'
								buttonLink=''>
								<p style={{ fontSize: "1rem", lineHeight: "initial" }}>Report Potholes, downed mailboxes, etc.</p>
							</FrontDoorLinkCard>
						</Col>
						<Col md={6} lg={4} className='mb-3'>
							<FrontDoorLinkCard
								title='Online Payments'
								imgLink='https://www.bolingbrook.com/vertical/Sites/%7B55EB27CA-CA9F-40A5-A0EF-1E4EEF52F39E%7D/uploads/payment_Web.jpg'
								buttonLink=''>
								<p style={{ fontSize: "1rem", lineHeight: "initial" }}>Pay a utility bill online here</p>
							</FrontDoorLinkCard>
						</Col>
						<Col md={6} lg={4} className='mb-3'>
							<FrontDoorLinkCard
								title='Online Permitting'
								imgLink='https://www.bolingbrook.com/vertical/Sites/%7B55EB27CA-CA9F-40A5-A0EF-1E4EEF52F39E%7D/uploads/express.png'
								buttonLink=''>
								<p style={{ fontSize: "1rem", lineHeight: "initial" }}>Apply for Express Permits Online</p>
							</FrontDoorLinkCard>
						</Col>
						<Col md={6} lg={4} className='mb-3'>
							<FrontDoorLinkCard
								title='Sign Up for Brook Police News'
								imgLink='https://www.bolingbrook.com/vertical/Sites/%7B55EB27CA-CA9F-40A5-A0EF-1E4EEF52F39E%7D/uploads/Service_Request_Banner_(1)_Web.jpg'
								buttonLink=''>
								<p style={{ fontSize: "1rem", lineHeight: "initial" }}>Get the latest news from the Bolingbrook Police Department</p>
							</FrontDoorLinkCard>
						</Col>
						<Col md={6} lg={4} className='mb-3'>
							<FrontDoorLinkCard
								title='Sign Up For Brook Alerts'
								imgLink='https://www.bolingbrook.com/vertical/Sites/%7B55EB27CA-CA9F-40A5-A0EF-1E4EEF52F39E%7D/uploads/alerts_Web(1).png'
								buttonLink=''>
								<p style={{ fontSize: "1rem", lineHeight: "initial" }}>Get the latest news directly from the Village of Bolingbrook.</p>
							</FrontDoorLinkCard>
						</Col>
						<Col md={6} lg={4} className='mb-3'>
							<FrontDoorLinkCard
								title='Overnight Parking / Vacation Watch'
								imgLink='https://www.bolingbrook.com/vertical/Sites/%7B55EB27CA-CA9F-40A5-A0EF-1E4EEF52F39E%7D/uploads/Parking_Web.jpg'
								buttonLink=''>
								<p style={{ fontSize: "1rem", lineHeight: "initial" }}>
									Register a car for on-street parking or request a vacation watch for a house
								</p>
							</FrontDoorLinkCard>
						</Col>
					</Row>
				</Col>
				<Col md={1}></Col>
			</Row>
			<Row className='g-3 mt-3 justify-content-center'>
				<h1>Events and Calendars</h1>
				<Col md={6} lg={4} className='mb-3'>
					<FrontDoorCard header='School News' icon='announcement' buttonText='Visit'>
						<p style={{ fontSize: "1rem", lineHeight: "initial" }}>Get information about whats happening in VVSD!</p>
					</FrontDoorCard>
				</Col>
				<Col md={6} lg={4} className='mb-3'>
					<FrontDoorCard header='Village Calendar' icon='date_range' buttonText='Visit'>
						<p style={{ fontSize: "1rem", lineHeight: "initial" }}>
							Get information about different meetings hosted by the village and different committees
						</p>
					</FrontDoorCard>
				</Col>
				<Col md={6} lg={4} className='mb-3'>
					<FrontDoorCard header='Community Calendar' icon='upcoming' buttonText='Visit'>
						<p style={{ fontSize: "1rem", lineHeight: "initial" }}>See what events will be hosted around Bolingbrook!</p>
					</FrontDoorCard>
				</Col>
			</Row>
			<Row className='g-3 mt-3 justify-content-center'>
				<h1>Online Payments</h1>
				<Col md={6} lg={4} className='mb-3'>
					<FrontDoorCard
						header='Utility Bill'
						icon='delete'
						buttonText='Pay Now'
						buttonLink='https://selfservice.bolingbrook.com/MSSLive/login.aspx?ReturnUrl=%2fMSSLive%2fcitizens%2fdefault.aspx'>
						<p style={{ fontSize: "1rem", lineHeight: "initial" }}>
							Utility bills are sent out through mail/e-mail on a quarterly basis. Bills are due and payable upon receipt.
						</p>
					</FrontDoorCard>
				</Col>
				<Col md={6} lg={4} className='mb-3'>
					<FrontDoorCard header='Parking Ticket' icon='directions_car' buttonText='Pay Now'>
						<p style={{ fontSize: "1rem", lineHeight: "initial" }}>
							Options available <strong>ONLY FOR PARKING TICKETS</strong>. If you were pulled over by police, you can NOT pay for that ticket here.
						</p>
					</FrontDoorCard>
				</Col>
				<Col md={6} lg={4} className='mb-3'>
					<FrontDoorCard header='Water Bill' icon='water_drop' buttonText='Visit' buttonLink="">
						<p style={{ fontSize: "1rem", lineHeight: "initial" }}>Visit the Illinois American Water online payment portal</p>
					</FrontDoorCard>
				</Col>
			</Row>
		</>
	);
};

export default FrontDoor;
