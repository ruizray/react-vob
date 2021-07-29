import React from "react";
import QuoteWithPicture from "../../components/QuoteWithPicture";
import { Row, Col } from "reactstrap";
import { villageDirectory } from "../../scripts/DepartmentInfo";
import { ContactSideBar } from "../../components/ContactInformation";
import { ContentCard } from "../../components/ContentCard";
const ITDepartmentLandingPage = () => {

	return (
		<>
			<Row className='gx-3'>
				<Col md={3}></Col>
				<Col id='fadeInTop' md={6}>
					<ContentCard icon='front_hand' header='Mission Statement'>
						<p>
							The Information Technology Department provides the highest quality technology-based services, in the most cost-effective
							manner, to facilitate the Village of Bolingbrook's mission as it applies to technology. We implement technology based
							solutions to support governmental business functions for all Village of Bolingbrook operating departments, Village officials
							and Village commissions.
						</p>
					</ContentCard>
					<ContentCard icon='front_hand' header='Locations Serviced'>
						<ul className='lead mb-1 text-muted'>
							<li>
								<i style={{ verticalAlign: "middle", fontSize: "inherit" }} className=' material-icons text-center'>
									place
								</i>
								Town Center
							</li>
							<li>
								<i style={{ verticalAlign: "middle", fontSize: "inherit" }} className=' material-icons text-center'>
									place
								</i>
								Public Works Facility (Canterbury)
							</li>
							<li>
								<i style={{ verticalAlign: "middle", fontSize: "inherit" }} className=' material-icons text-center'>
									place
								</i>
								3 Wastewater plants
							</li>
							<li>
								<i style={{ verticalAlign: "middle", fontSize: "inherit" }} className=' material-icons text-center'>
									place
								</i>
								5 Fire Stations
							</li>
							<li>
								<i style={{ verticalAlign: "middle", fontSize: "inherit" }} className=' material-icons text-center'>
									place
								</i>
								Animal Control
							</li>
							<li>
								<i style={{ verticalAlign: "middle", fontSize: "inherit" }} className=' material-icons text-center'>
									place
								</i>
								Police Department
							</li>
							<li>
								<i style={{ verticalAlign: "middle", fontSize: "inherit" }} className=' material-icons text-center'>
									place
								</i>
								Community Center
							</li>
							<li>
								<i style={{ verticalAlign: "middle", fontSize: "inherit" }} className=' material-icons text-center'>
									place
								</i>
								Clow Airport
							</li>
						</ul>
					</ContentCard>
					<ContentCard header="Services Provided">
						<ul>
							<li> LAN/WAN Networking, Security, Firewalls</li>
							<li>Email and Web Access</li>
							<li>Desktop, laptop, smartphones and Server support</li>
							<li>iSeries operating system and equipment support</li>
							<li>Desktop Application support</li>
							<li>Bolingbrook Website Support</li>
							<li>Bolingbrook Mobile Application Support</li>
							<li>Helpdesk</li>
							<li>Project Management</li>
							<li>Wireless Access Points</li>
						</ul>
					</ContentCard>

					<QuoteWithPicture  icon='announcement' header='Message From the Chief Information Officer'>
						<p>
							The IT Department (by working with the other departments of the Village of Bolingbrook, vendors and consultants) develops and
							tests plans for disaster recovery and business resumption. What we do on a daily basis is not only for the Village of
							Bolingbrook Town Center, but also for the good of all Bolingbrook residents. We are here to serve the needs of all. Any
							feedback or questions can be directed to James Farrell when it comes to the technology needs of Bolingbrook. We want to make
							sure that Bolingbrook will always remain a great place to live, work and raise a family!
						</p>
						
						<footer className='blockquote-footer'>
							James Farrell, <cite title='CIO'>CIO</cite>
						</footer>
					</QuoteWithPicture>
				</Col>
				<Col md={3} id='fadeInRight'>
				
				</Col>
			</Row>
		</>
	);
};

export default ITDepartmentLandingPage;
