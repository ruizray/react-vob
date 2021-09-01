import React from "react";
import { FrontDoorLinkCard } from "../components/LinkCard";
import { Row, Col } from "reactstrap";
const FrontDoor = (props) => {
	return (
		<>
			<Row className=' mt-4'>
				<Col md={12} lg={9}>
					<Row className='gx-2 justify-content-center'>
						<h1 className='display-6'>Events and Calendars</h1>
						<Col md={12} lg={4} className='mb-3'>
							<FrontDoorLinkCard
								title='School News'
								icon='announcement'
								buttonText='Visit'
								button
								buttonLink='https://www.bolingbrook.com/school_news'>
								Get information about whats happening in VVSD!
							</FrontDoorLinkCard>
						</Col>
						<Col md={6} lg={4} className='mb-3'>
							<FrontDoorLinkCard
								title='Village Calendar'
								icon='date_range'
								buttonText='Visit'
								button
								buttonLink='https://www.bolingbrook.com/calendar'>
								Get information about different meetings hosted by the village and different committees
							</FrontDoorLinkCard>
						</Col>
						<Col md={6} lg={4} className='mb-3'>
							<FrontDoorLinkCard
								title='Community Calendar'
								icon='upcoming'
								buttonText='Visit'
								button
								buttonLink='https://www.bolingbrook.com/village_community'>
								See what events will be hosted around Bolingbrook!
							</FrontDoorLinkCard>
						</Col>
					</Row>
					<Row className='gx-2  mt-1 justify-content-center'>
						<h1 className='display-6'>Online Payments</h1>
						<Col md={6} lg={4} className='mb-3'>
							<FrontDoorLinkCard
								title='Munis Self-Service'
								icon='account_circle'
								button
								buttonText='Pay Now'
								buttonLink='https://bolingbrook-il.dacragov.com/il/bolingbrook/payment'>
							Login into our self service software to pay a bill online.
							</FrontDoorLinkCard>
						</Col>
						<Col md={6} lg={4} className='mb-3'>
							<FrontDoorLinkCard
								title='Parking Ticket'
								icon='directions_car'
								button
								buttonText='Pay Now'
								buttonLink='https://bolingbrook-il.dacragov.com/il/bolingbrook/payment'>
								Options available <strong>ONLY FOR PARKING TICKETS</strong>. If you were pulled over by police, you can NOT pay for that
								ticket here.
							</FrontDoorLinkCard>
						</Col>
						<Col md={6} lg={4} className='mb-3'>
							<FrontDoorLinkCard
								title='Landlord License Payment'
								icon='maps_home_work'
								button
								buttonText='Pay Now'
								buttonLink='https://bolingbrook-il.dacragov.com/il/bolingbrook/payment'>
								Options available <strong>ONLY FOR PARKING TICKETS</strong>. If you were pulled over by police, you can NOT pay for that
								ticket here.
							</FrontDoorLinkCard>
						</Col>
						

						<Col md={6} lg={4} className='mb-3'>
							<FrontDoorLinkCard
								title='Water Bill'
								icon='water_drop'
								button
								buttonText='Pay Now'
								buttonLink='https://amwater.com/ilaw/customer-service-billing/billing-payment-info#10029194-pay-online'>
								Visit the Illinois American Water online payment portal
							</FrontDoorLinkCard>
						</Col>
						<Col md={6} lg={4} className='mb-3'>
							<FrontDoorLinkCard
								title='Utility Bill'
								icon='delete'
								button
								buttonText='Pay Now'
								buttonLink='https://selfservice.bolingbrook.com/MSSLive/login.aspx?ReturnUrl=%2fMSSLive%2fcitizens%2fdefault.aspx'>
								Utility bills are sent out through mail/e-mail on a quarterly basis. Bills are due and payable upon receipt.
							</FrontDoorLinkCard>
						</Col>
						<Col md={6} lg={4} className='mb-3'>
							<FrontDoorLinkCard
								title='Utility Billing FAQ'
								icon='delete'
								button
								buttonText='Pay Now'
								buttonLink='https://www.bolingbrook.com/refusebilling'>
								Frequently Asked Questions about utility billing
							</FrontDoorLinkCard>
						</Col>
					</Row>
					<Row className='gx-2  mt-1 justify-content-center'>
						<h1 className='display-6'>Village Information</h1>
						<Col md={6} lg={4} className='mb-3'>
							<FrontDoorLinkCard
								title='Public Notices'
								icon='post_add'
								button
								buttonText='View'
								buttonLink='https://www.bolingbrook.com/publicnotices'>
								View all public notices from the village.
							</FrontDoorLinkCard>
						</Col>
						<Col md={6} lg={4} className='mb-3'>
							<FrontDoorLinkCard
								title='Village Directory'
								icon='groups'
								button
								buttonText='View'
								buttonLink='https://selfservice.bolingbrook.com/MSSLive/login.aspx?ReturnUrl=%2fMSSLive%2fcitizens%2fdefault.aspx'>
								Get into contact with anyone at the village.
							</FrontDoorLinkCard>
						</Col>
						<Col md={6} lg={4} className='mb-3'>
							<FrontDoorLinkCard
								title='Municipal Code'
								icon='menu_book'
								button
								buttonText='View'
								buttonLink='https://www.bolingbrook.com/villageboardmeetings'>
								View all municipal codes.
							</FrontDoorLinkCard>
						</Col>
						<Col md={6} lg={4} className='mb-3'>
							<FrontDoorLinkCard
								title='Village Board Meetings'
								icon='gavel'
								button
								buttonText='View'
								buttonLink='https://www.bolingbrook.com/agendas_minutes'>
								Missed a Village Board Meeting? Get the most updated information here.
							</FrontDoorLinkCard>
						</Col>
						<Col md={6} lg={4} className='mb-3'>
							<FrontDoorLinkCard
								title='Commissions'
								icon='group_work'
								button
								buttonText='View'
								buttonLink='https://www.bolingbrook.com/commissions'>
								Learn about different village commissions and what they do.
							</FrontDoorLinkCard>
						</Col>
						<Col md={6} lg={4} className='mb-3'>
							<FrontDoorLinkCard
								title='Video Tour'
								icon='videocam'
								button
								buttonText='View'
								buttonLink='https://www.bolingbrook.com/history'>
								Get to know what the village has to offer with this virtual tour!
							</FrontDoorLinkCard>
						</Col>
					</Row>
				</Col>
				<Col id='fadeInRight' className='mt-5' md={12} lg={3}>
					<Row className=' gy-3 justify-content-center w-100'>
						<FrontDoorLinkCard
							title='Service Requests'
							imgLink='https://www.bolingbrook.com/vertical/Sites/%7B55EB27CA-CA9F-40A5-A0EF-1E4EEF52F39E%7D/uploads/Service_Request_Banner_Web.jpg'
							buttonLink='http://www.bolingbrook.com/servicerequests'>
							Report Potholes, downed mailboxes, etc.
						</FrontDoorLinkCard>
						{/* 
						<FrontDoorLinkCard
							title='Online Payments'
							imgLink='https://www.bolingbrook.com/vertical/Sites/%7B55EB27CA-CA9F-40A5-A0EF-1E4EEF52F39E%7D/uploads/payment_Web.jpg'
							buttonLink='http://www.bolingbrook.com/online_payments'>
							Pay a utility bill online here
						</FrontDoorLinkCard> */}

						<FrontDoorLinkCard
							title='Online Permitting'
							imgLink='https://www.bolingbrook.com/vertical/Sites/%7B55EB27CA-CA9F-40A5-A0EF-1E4EEF52F39E%7D/uploads/express.png'
							buttonLink='http://www.bolingbrook.com/onlinepermits'>
							Apply for Express Permits Online
						</FrontDoorLinkCard>

						<FrontDoorLinkCard
							title='Sign Up for Brook Police News'
							imgLink='https://www.bolingbrook.com/vertical/Sites/%7B55EB27CA-CA9F-40A5-A0EF-1E4EEF52F39E%7D/uploads/Service_Request_Banner_(1)_Web.jpg'
							buttonLink='https://www.bolingbrook.com/police_news'>
							Get the latest news from the Bolingbrook Police Department
						</FrontDoorLinkCard>

						<FrontDoorLinkCard
							title='Sign Up For Brook Alerts'
							imgLink='https://www.bolingbrook.com/vertical/Sites/%7B55EB27CA-CA9F-40A5-A0EF-1E4EEF52F39E%7D/uploads/alerts_Web(1).png'
							buttonLink='https://www.bolingbrook.com/alerts'>
							Get the latest news directly from the Village of Bolingbrook.
						</FrontDoorLinkCard>

						<FrontDoorLinkCard
							title='Overnight Parking / Vacation Watch'
							imgLink='https://www.bolingbrook.com/vertical/Sites/%7B55EB27CA-CA9F-40A5-A0EF-1E4EEF52F39E%7D/uploads/Parking_Web.jpg'
							buttonLink='https://www.bolingbrook.com/onstreetparking'>
							Register a car for on-street parking or request a vacation watch for a house
						</FrontDoorLinkCard>
					</Row>
				</Col>
			</Row>
		</>
	);
};

export default FrontDoor;
