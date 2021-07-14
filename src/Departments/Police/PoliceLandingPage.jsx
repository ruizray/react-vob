import React from "react";
import { Row, Col, Card, CardBody,  CardImg, ListGroup, ListGroupItem } from "reactstrap";
import { ContactCardSideBar } from "../../components/ContactInformation";
import { villageDirectory } from "../../scripts/DepartmentInfo";
import ContentCard from "../../components/ContentCard";
import CallToAction from "../../components/CallToAction";
import QuoteWithPicture from "./../../components/QuoteWithPicture";
const PoliceLandingPage = () => {
	const { AnimalControl, PoliceChief, PoliceAdministration, AfterHours, Investigations, CodeEnforcement, Evidence } = villageDirectory.Police;

	return (
		<>
			<Row className="gx-3">
				<Col>
					<Card className='border mt-4 '>
						<CardBody>
							<a href='https://www.bolingbrook.com/vertical/Sites/%7B55EB27CA-CA9F-40A5-A0EF-1E4EEF52F39E%7D/uploads/Rachel_Web.PNG'>
								<CardImg src='https://www.bolingbrook.com/vertical/Sites/%7B55EB27CA-CA9F-40A5-A0EF-1E4EEF52F39E%7D/uploads/Rachel_Web.PNG'></CardImg>{" "}
							</a>
							<ListGroup flush='true'>
								<ListGroupItem>Ongoing Missing Persons Cases:</ListGroupItem>
								<ListGroupItem>~Rachel Marie Mellon</ListGroupItem>
								<ListGroupItem>~Rachel Marie Mellon</ListGroupItem>
								<ListGroupItem>~Rachel Marie Mellon</ListGroupItem>
							</ListGroup>
						</CardBody>
					</Card>
				</Col>
				<Col id='fadeInTop' md={6}>
					<ContentCard header='Mission Statement' icon='announcement'>
						<p>
							The mission of the Bolingbrook Police Department is to work in partnership with the community to prevent, reduce and deter
							crime. We are committed to the citizens of Bolingbrook and the men and women of our department to provide professional police
							service in an ethical, courteous and impartial manner. In furtherance of this mission, we are committed to the following
							values represented by the law enforcement star we wear: Justice, Temperance, Courage, Prudence, Fortitude, Tolerance and
							Truth.
						</p>
					</ContentCard>
					<QuoteWithPicture personImage={PoliceChief.image} header='Message from the Chief' icon='person'>
						<p>
							Welcome to the Bolingbrook Police Department website. We invite you to explore the various pages and links. It is our hope
							that you find the information here helpful. The members of the Bolingbrook Police Department are a dedicated group of
							professionals who take great pride in their work. We are committed to preventing crime, addressing quality of life concerns
							and impartially enforcing the law. Our success is due to the strong support we receive from our growing community. We
							recognize the value of those relationships and constantly work to strengthen the partnerships with those we serve. Our goal
							remains making sure Bolingbrook stays a great place to live, work and raise a family.
						</p>
						<p>
							If you have any questions regarding our department or if we can be of additional service to you, please feel free to contact
							the police department by email at police@bolingbrook.com or telephone at 630-226-8600.
						</p>
						<footer className='blockquote-footer'>
							Mike Rompa, <cite title='Chief of Police'>Chief of Police</cite>
						</footer>
					</QuoteWithPicture>

					<ContentCard header='Brook Police News' icon='alarm'>
						<iframe
							className='border'
							title='newsbox'
							id='newsBox'
							src='https://www3.thedatabank.com/dpg/698/pm.asp?index=1&Publication=Brook+Police+News'
							width='100%'
							height='300'></iframe>
					</ContentCard>
					<CallToAction buttonText='Sign up for Brook Police News' buttonLink=''>
						<p>Click here to sign up to receive Brook Police News.</p>
					</CallToAction>
				</Col>
				<Col>
					<ContactCardSideBar person={PoliceAdministration} />
					<ContactCardSideBar person={PoliceChief} />
					<ContactCardSideBar person={AnimalControl} />
					<ContactCardSideBar person={AfterHours} />
					<ContactCardSideBar person={Investigations} />
					<ContactCardSideBar person={CodeEnforcement} />
					<ContactCardSideBar person={Evidence} />
				</Col>
			</Row>
		</>
	);
};

export default PoliceLandingPage;
