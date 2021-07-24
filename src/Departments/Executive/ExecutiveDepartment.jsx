import React from "react";
import QuoteWithPicture from "../../components/QuoteWithPicture";
import { Row, Col } from "reactstrap";
import { villageDirectory } from "../../scripts/DepartmentInfo";
import { ContactSideBar } from "../../components/ContactInformation";
import {ContentCard} from "../../components/ContentCard";
const ExecutiveDepartment = () => {
	const { Mayor, VillageHall, CoAdministrator1, CoAdministrator2, Clerk, Attorney, FOIA } = villageDirectory.Executive;
	const people = { Mayor, VillageHall, CoAdministrator1, CoAdministrator2, Clerk, Attorney, FOIA }
	return (
		<>
			<Row className='gx-3'>
				<Col md={3}></Col>
				<Col id='fadeInTop' md={6}>
					<ContentCard icon='front_hand' header='Welcome'>
						<p>
							The Executive Department consists of the Office of the Mayor, Village Co-Administrators, Board of Trustees, Village Clerk,
							and staff.
						</p>
					</ContentCard>

					<QuoteWithPicture personImage={Mayor.image} icon='announcement' header='Message from the Mayor'>
						<p>
							Welcome to the Bolingbrook Executive Department website. As a resident of Bolingbrook since 2003 and Mayor since August 1,
							2020, I am honored and thrilled to be serving as the Mayor of the Village of Bolingbrook. I believe strongly in our motto, “A
							Place to Grow”{" "}
						</p>
						<p>
							Not only have I personally experienced this with my family in Bolingbrook, I have seen this motto be demonstrated by our
							residents, businesses, and community. The Executive Department exists to handle the day to day operations of the village, and
							my goal is to ensure that our staff follows that motto. The department continues to move forward by constantly collaborating
							with all other village departments, reviewing where we’ve been and where we’re going, and communicating with our residents. I
							believe in an open door policy. I want to have open lines of communication and welcome anyone who would like to meet with me
							to either call, email, or come in to the village office.
						</p>
						<footer className='blockquote-footer'>
							Mary Alexander-Basta, <cite title='Mayor'>Mayor</cite>
						</footer>
					</QuoteWithPicture>
				</Col>
				<Col md={3} id='fadeInRight'>
					<ContactSideBar people={people}></ContactSideBar>
				
				</Col>
			</Row>
		</>
	);
};

export default ExecutiveDepartment;
