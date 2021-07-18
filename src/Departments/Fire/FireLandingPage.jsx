import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import { ContentCard } from "../../components/ContentCard";
import { villageDirectory } from "../../scripts/DepartmentInfo";
import { ContactSideBar } from "../../components/ContactInformation";
import CallToAction from "./../../components/CallToAction";
const FireLandingPage = (props) => {
	const {
		FireAdministration,
		FireChief,
		FireMarshal,
		FireAdminAid,
		FireSecretary,
		BattalionChief1,
		BattalionChief2,
		BattalionChief3,
		BattalionChief4,
		BattalionChief5,
	} = villageDirectory.Fire;
	const people = {
		FireAdministration,
		FireChief,
		FireMarshal,
		FireAdminAid,
		FireSecretary,
		BattalionChief1,
		BattalionChief2,
		BattalionChief3,
		BattalionChief4,
		BattalionChief5,
	};


	return (
		<>
			<Row className='gx-3'>
				<Col md={3}></Col>
				<Col id='fadeInTop' md={6}>
					<ContentCard id='MissionStatement' icon='front_hand' header='Mission Statement'>
						<p>
							With pride and innovation, we will strive in an efficient and cost effective manner to safely provide Advanced Medical
							treatment, preserve life and property, and maintain the environment for our community through planning, prevention,
							education, and training. Collectively and individually we commit ourselves to make Bolingbrook a better and safer place to
							grow!
						</p>
					</ContentCard>
					<ContentCard id='FireStations' header='Fire Stations'>
						<div id='carouselExampleCaptions' class='carousel slide border border-5 text-black' data-mdb-ride='carousel'>
							<div className='carousel-indicators'>
								<button
									type='button'
									data-mdb-target='#carouselExampleCaptions'
									data-mdb-slide-to='0'
									className='active'
									aria-current='true'
									aria-label='Slide 1'></button>
								<button type='button' data-mdb-target='#carouselExampleCaptions' data-mdb-slide-to='1' aria-label='Slide 2'></button>
								<button type='button' data-mdb-target='#carouselExampleCaptions' data-mdb-slide-to='2' aria-label='Slide 3'></button>
								<button type='button' data-mdb-target='#carouselExampleCaptions' data-mdb-slide-to='3' aria-label='Slide 4'></button>
								<button type='button' data-mdb-target='#carouselExampleCaptions' data-mdb-slide-to='4' aria-label='Slide 5'></button>
							</div>
							<div className='carousel-inner text-primary'>
								<div className='carousel-item active'>
									<img
										src='https://www.bolingbrook.com/vertical/Sites/%7B55EB27CA-CA9F-40A5-A0EF-1E4EEF52F39E%7D/uploads/Station1.JPG'
										className='d-block w-100'
										alt='...'
									/>
									<div className='carousel-caption d-none d-md-block'>
										<h5>Station One</h5>
										<p>460 E. Briarcliff Road</p>
									</div>
								</div>
								<div className='carousel-item '>
									<img
										src='https://www.bolingbrook.com/vertical/Sites/%7B55EB27CA-CA9F-40A5-A0EF-1E4EEF52F39E%7D/uploads/Station2.JPG'
										className='d-block w-100'
										alt='...'
									/>
									<div className='carousel-caption d-none d-md-block'>
										<h3>Station Two</h3>
										<p>375 Lily Cache Lane</p>
									</div>
								</div>
								<div className='carousel-item'>
									<img
										src='https://www.bolingbrook.com/vertical/Sites/%7B55EB27CA-CA9F-40A5-A0EF-1E4EEF52F39E%7D/uploads/Station3.JPG'
										className='d-block w-100'
										alt='...'
									/>
									<div className='carousel-caption d-none d-md-block'>
										<h5>Station Three</h5>
										<p>376 E. Boughton Road</p>
									</div>
								</div>
								<div className='carousel-item'>
									<img
										src='https://www.bolingbrook.com/vertical/Sites/%7B55EB27CA-CA9F-40A5-A0EF-1E4EEF52F39E%7D/uploads/Station4.JPG'
										className='d-block w-100'
										alt='...'
									/>
									<div className='carousel-caption d-none d-md-block'>
										<h5>Station 4</h5>
										<p>1111 W. Boughton Road</p>
									</div>
								</div>
								<div className='carousel-item'>
									<img
										src='https://www.bolingbrook.com/vertical/Sites/%7B55EB27CA-CA9F-40A5-A0EF-1E4EEF52F39E%7D/uploads/Station5.JPG'
										className='d-block w-100'
										alt='...'
									/>
									<div className='carousel-caption d-none d-md-block'>
										<h5>Station 5</h5>
										<p>1900 Rodeo Drive</p>
									</div>
								</div>
							</div>
							<button className='carousel-control-prev' type='button' data-mdb-target='#carouselExampleCaptions' data-mdb-slide='prev'>
								<span className='carousel-control-prev-icon' aria-hidden='true'></span>
								<span className='visually-hidden'>Previous</span>
							</button>
							<button className='carousel-control-next' type='button' data-mdb-target='#carouselExampleCaptions' data-mdb-slide='next'>
								<span className='carousel-control-next-icon' aria-hidden='true'></span>
								<span className='visually-hidden'>Next</span>
							</button>
						</div>
					</ContentCard>
				</Col>

				<Col md={3} id='fadeInRight'>
					<ContactSideBar people={people}></ContactSideBar>
				</Col>
			</Row>
		</>
	);
};

export default FireLandingPage;
