import React from "react";
import { Row, Col } from "reactstrap";
import { villageDirectory } from "../../scripts/DepartmentInfo";
import { ContactCardSideBar } from "../../components/ContactInformation";
import CallToAction from "../../components/CallToAction";
import {ContentCard} from "../../components/ContentCard";
const HumanResources = () => {
	const { HumanResources } = villageDirectory.Executive;
	return (
		<Row className='gx-3'>
			<Col md={3}></Col>
			<Col id='fadeInTop' md={6}>
				<ContentCard icon='front_hand' header='Welcome'>
					<p>
						Thank you for your interest in pursuing a career with us. We are honored that you are interested in being a part of an exceptional
						team. The Village of Bolingbrook is an Equal Opportunity Employer.
					</p>
					<CallToAction buttonText='Online Application' buttonLink='https://www.bolingbrook.com/apply' color='danger'>
						<p>
							Paper applications and resumes will no longer be accepted. Applications for any position at the village MUST be completed
							online using the link below.*
						</p>
					</CallToAction>
					<p>
						If you are applying for the position of Firefighter/Paramedic, you must come into the Finance Department to pick up an application
						and pay the application fee. Online applications will not be accepted. For more information about the testing process, click here.
						If you have any further questions, please contact the Fire Department by phone at 630-226-8540 or by email at fire@bolingbrook.com
					</p>
					<p>
						All applications will be accepted until all positions are filled. Please note that due to the demand of applications that we
						receive, a member of our team will reach out to you if they decide to move forward during the process.
					</p>
				</ContentCard>

				
			</Col>
			<Col md={3} id='fadeInRight'>
				<ContactCardSideBar person={HumanResources} />
			</Col>
		</Row>
	);
};

export default HumanResources;
