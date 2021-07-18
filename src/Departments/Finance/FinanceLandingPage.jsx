import React from "react";
import { Col, Row } from "reactstrap";
import { ContentCard } from "../../components/ContentCard";
import { villageDirectory } from "../../scripts/DepartmentInfo";
import { ContactSideBar } from "../../components/ContactInformation";
import CallToAction from "./../../components/CallToAction";
const FinanceLandingPage = (props) => {
	const { Mayor, VillageHall, CoAdministrator1, CoAdministrator2, Clerk, Attorney, FOIA } = villageDirectory.Executive;
	const people = { Mayor, VillageHall, CoAdministrator1, CoAdministrator2, Clerk, Attorney, FOIA };
	return (
		<>
			<Row className='gx-3'>
				<Col md={3}></Col>
				<Col id='fadeInTop' md={6}>
					<ContentCard icon='front_hand' header='Welcome'>
						<p>
							The Finance Department consists of 12 full time and 2 part time staff members. The Finance Department is located in Town
							Center's main lobby (entrance is by the center island with the flags) and is responsible for:
						</p>
						<ul>
							<li>All Financial Services</li>
							<li>Payroll</li>
							<li>Mail Processing</li>
							<li>Real Estate Transfer Tax Stamps</li>
							<li>Public Notary Services</li>
							<li>Garage Sale Permits</li>
							<li>Voter Registration</li>
						</ul>
					</ContentCard>
					<ContentCard header='IMRF' icon='IMRF'>
						<p>
							In 2019, the Illinois General Assembly passed Public Act 101-0504. The law requires IMRF to post certain employer cost and
							participation information on its website. IMRF will update these reports annually.
						</p>
						<CallToAction buttonText='IMRF Website' buttonLink=''>
							<p>To visit the IMRF website and get more information, click below.</p>
						</CallToAction>
						<CallToAction buttonText='Public Act 101-0504' buttonLink=''>
							<p>To read the act in its entirety, click below.</p>
						</CallToAction>
					</ContentCard>
				</Col>
				<Col md={3} id='fadeInRight'>
					<ContactSideBar people={people}></ContactSideBar>
				</Col>
			</Row>
		</>
	);
};

export default FinanceLandingPage;
