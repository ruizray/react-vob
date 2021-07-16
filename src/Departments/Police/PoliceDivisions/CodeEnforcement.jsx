import React from "react";
import { Row, Col } from "reactstrap";
import { ContentCardSubsection } from "../../../components/ContentCard";
import { ContactCardSideBar } from "../../../components/ContactInformation";
import { villageDirectory } from "../../../scripts/DepartmentInfo";
import CallToAction from "../../../components/CallToAction";
import { ContentCard } from "../../../components/ContentCard";
const CodeEnforcement = () => {
	const { CodeEnforcement, CodeEnforcementSupervisor } = villageDirectory.Police;
	return (
		<>
			<Row>
				<Col></Col>
				<Col id='fadeInTop' md={6}>
					<ContentCard header='Welcome' icon='announcement'>
						<p>
							Code Enforcement is a division of the Bolingbrook Police Department. Code Enforcement officers work in conjunction with the
							police officers to better assist citizens in maintaining property values and the quality of life in Bolingbrook. The
							department enforces property maintenance codes and facilitates the Good Neighbor Rent/Lease Program for the village.
						</p>
					</ContentCard>

					<ContentCard header='Good Neighbor Program' icon='airport_shuttle'>
						<CallToAction buttonText='Good Neighbor Rent/Lease Program'>
							<p>To learn more about the Good Neighbor Rent/Lease Program click below.</p>
						</CallToAction>
					</ContentCard>
					<ContentCard header='Examples of Violations' icon='airport_shuttle'>
						<ContentCardSubsection subHeader='Accessory structures in ill repair'>
							<ul>
								<li> Shed</li>
								<li> Detached garages</li>
								<li> Fences</li>
								<li> Decks, Stairs, and Porches</li>
							</ul>
						</ContentCardSubsection>
						<ContentCardSubsection subHeader='Accumulation of debris'></ContentCardSubsection>
						<ContentCardSubsection subHeader='Cars Parking on the grass'>
							<ul>
								<li>It is illegal to park ANY vehicle on an unpaved surface.</li>
							</ul>
						</ContentCardSubsection>
						<ContentCardSubsection subHeader='Car Sales in shopping centers'>
							<ul>
								<li>It is illegal to place a car For Sale in a commercial lot</li>
							</ul>
						</ContentCardSubsection>
						<ContentCardSubsection subHeader='Commercial Vehicles'>
							<ul>
								<li>
									It is illegal to park or store commercial vehicles in a residential or commercial area that is not designed for
									such use.
								</li>
							</ul>
						</ContentCardSubsection>
						<ContentCardSubsection subHeader="Home/Building Exterior surface in ill repair">
							<div class='row'>
								<div class='col-md-6'>
									<ul>
										<li> Rotten wood</li>
										<li> Eaves/Fascia/soffit</li>
										<li> Roof</li>
										<li> Peeling paint</li>
										<li> Gutters</li>
										<li> Siding</li>
										<li> Shutters</li>
									</ul>
								</div>
								<div class='col-md-6'>
									<ul>
										<li> Fancy trim work</li>
										<li> Front door</li>
										<li> Side doors</li>
										<li> Garage door</li>
										<li> Windows</li>
										<li>Window screens</li>
										<li> Storm door (screen/glass)</li>
									</ul>
								</div>
							</div>
						</ContentCardSubsection>
					</ContentCard>
				</Col>
				<Col id='fadeInRight'>
					<ContactCardSideBar person={CodeEnforcement} />
					<ContactCardSideBar person={CodeEnforcementSupervisor} />
				</Col>
			</Row>
		</>
	);
};

export default CodeEnforcement;
