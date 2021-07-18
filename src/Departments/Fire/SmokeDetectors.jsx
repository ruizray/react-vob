import React from "react";
import { ContentCard, ContentCardSubsection } from "../../components/ContentCard";
import { Col, Row } from "reactstrap";
import CallToAction from "./../../components/CallToAction";
import ScrollSpy from "../../components/ScrollSpy";
const SmokeDetectors = (props) => {
	return (
		<>
			<Row className='gx-3'>
				<Col>
					<ScrollSpy></ScrollSpy>
				</Col>
				<Col id='fadeInTop' md={6}>
					<ContentCard id='SmokeDetectors' header='Smoke Detectors' icon='Information'>
						<p>
							The Bolingbrook Fire Department (BFD) offers free smoke alarm installation to qualified residents. Please use the guidelines
							below to determine whether you qualify for this program, and contact Fire Administration at 630-226-8540 with any questions.
						</p>
						<ul>
							<li>
								Participants in this program must be homeowners in the Village of Bolingbrook. If you rent your home and it does not
								have adequate smoke detectors, please contact the Bolingbrook Code Enforcement at (630)226-8760.
							</li>
							<li>
								BFD will provide and install smoke detectors to elderly or disabled residents and to those who are financially unable to
								purchase smoke alarms.
							</li>
						</ul>
						<ContentCardSubsection id='Disposal' subHeader='How do I dispose of an old Smoke Detector?'>
							<p>
								Once the battery is removed, Smoke Detectors can be placed in the regular trash. Residents can take their used batteries
								to Batteries Plus Bulbs at:
							</p>
							<p className='lead mb-1 text-muted'>
								<i style={{ verticalAlign: "middle", fontSize: "inherit" }} className=' material-icons text-center'>
									place
								</i>
								1231 W Boughton Rd
							</p>
							<p className='lead text-muted'>
								<i style={{ verticalAlign: "middle", fontSize: "inherit" }} className=' material-icons text-center'>
									phone
								</i>
								(630) 945-4925‎
							</p>
						</ContentCardSubsection>
						<ContentCardSubsection id='Install' subHeader='Where should smoke alarms be installed?'>
							<ul>
								<li>Install a smoke alarm in (or immediately outside) each bedroom in the home.</li>
								<li>Install an additional smoke alarm in each major living space.</li>
								<li>Avoid installing smoke alarms in the kitchen or in bathrooms.</li>
							</ul>
						</ContentCardSubsection>
						<ContentCardSubsection id='HardOfHearing' subHeader='Smoke Alarms for People who are Deaf or Hard of Hearing'>
							<p>
								Smoke alarms save lives. However, people who are deaf or hard of hearing may not be able to depend on the traditional
								smoke alarm to alert them to a fire. There are a couple different accessories on the market that can be purchased for
								people who are deaf or hard of hearing. A member of the Fire Prevention Bureau is also available if you would like them
								to come out and inspect your home and go over smoke alarm options. You can contact the Fire Prevention Bureau at
								630/226-8540.
							</p>
						</ContentCardSubsection>
						<CallToAction buttonText='Alarms for Deaf or Hard of Hearing' buttonLink=''>
							<p>Click here for more information on alarms for the deaf or hard of hearing.</p>
						</CallToAction>
						<CallToAction buttonText='Public Act 101-0504' buttonLink=''>
							<p>To read the act in its entirety, click below.</p>
						</CallToAction>
					</ContentCard>
					<ContentCard id='CarbonMonoxide' header='Carbon Monoxide Detectors' icon='Information'>
						<p>
							Effective January 1, 2007, every dwelling unit will be required to have at least one approved carbon monoxide alarm in an
							operating condition within 15 feet of every room used for sleeping purposes. Alarms can be battery powered, plug-in with
							battery back-up or wired into the AC power line with a secondary battery back-up. The alarm can be combined with smoke
							detecting devices if the combined unit complies with specific standards and the alarm differentiates the hazard.
						</p>

						<ContentCardSubsection id='Law' subHeader='The Law'>
							<p>
								The Illinois General Assembly has passed and the Govenor has signed the Carbon Monoxide Alarm Detector Act (Public Act
								094-0741). This new law, effective January 1, 2007, requires homeowners and landlords to install carbon monoxide
								detectors in all buildings containing bedrooms and sleeping facilities. The Primary Features of the Law are:
							</p>
							<ul>
								<li>
									Every "dwelling unit" must be equipped with at least one operable carbon monoxide alarm within 15 feet of every
									room used for sleeping purposes.
								</li>
								<li>
									The alarm may be combined with smoke detecting devices provided the unit complies with respective standards and the
									alarm differentiates the hazard.
								</li>
								<li>
									A "dwelling unit" means a room or suite of rooms used for human habitation, and includes single family residences,
									multiple family residences and mixed use buildings.
								</li>
								<li>
									If a structure contains more than one "dwelling unit," an alarm must be installed within 15 feet of every sleeping
									room in each "dwelling unit."
								</li>
								<li>
									The owner must supply and install all required alarms. A landlord must ensure that the alarms are operable on the
									date of initiation of a lease. The tenant is responsible for testing and maintaining the alarm after the lease
									commences.
								</li>
								<li>
									A landlord is required to furnish one tenant per dwelling unit with written information regarding alarm testing and
									maintenance.
								</li>
								<li>
									Willful failure to install and maintain in operating condition any alarm is a Class B criminal misdemeanor. The Act
									does exempt certain residential units from the requirement. Those residential units in a building that (1) does not
									rely on combustion of fossil fuel for heat, ventilation or hot water and (2) is not connected to a garage.
								</li>
							</ul>
						</ContentCardSubsection>
					</ContentCard>
				</Col>
				<Col id='fadeInRight'></Col>
			</Row>
		</>
	);
};

export default SmokeDetectors;
