import React from "react";
import { Row, Col } from "reactstrap";
import { ContentCard, ContentCardSubsection } from "../../../components/ContentCard";
import ScrollSpy from "../../../components/ScrollSpy";
import CallToAction from "./../../../components/CallToAction";
const FirePreventionBureau = (props) => {
	return (
		<>
			<Row className='gx-3'>
				<Col>
					<ScrollSpy></ScrollSpy>
				</Col>
				<Col id='fadeInTop' md={6}>
					<ContentCard id='About' header='About' icon='Information'>
						<p>
							Bolingbrook Fire Department has a full-time Fire Prevention Bureau which consists of the Fire Marshal and 3 shift Fire
							Inspectors. Their responsibilities include:
						</p>
						<ul>
							<li> Plan review for new construction</li>
							<li>Inspection for initial occupancy of new businesses</li>
							<li>Fire prevention surveys of all schools, businesses, and places of public assembly</li>
							<li>Inspection of new fire alarm and suppression systems</li>
							<li>Annual inspection of fire pumps on businesses for which they are required.</li>
							<li>Investigation of all fires.</li>
						</ul>
					</ContentCard>
					<ContentCard id='CarbonMonoxideDetectorLaw' header='Carbon Monoxide Detector Law' icon='Information'>
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
							<CallToAction
								buttonText='Carbon Monoxide Alarm Detector Act'
								buttonLink='http://www.ilga.gov/legislation/ilcs/ilcs3.asp?ActID=2786&ChapterID=39'>
								<p>For the entire act please click below</p>
							</CallToAction>
						</ContentCardSubsection>
					</ContentCard>
					<ContentCard id='FireCodes' header='Fire Codes' icon='Information'>
						<p>The codes listed below are what the Bolingbrook Fire Department enforces:</p>
						<ul>
							<li>2018 International Fire Code</li>
							<li>2019 National Fire Alarm Code</li>
							<li>2019 Standard for the installation of Sprinkler Systems</li>
							<li>2018 International Building Code</li>
							<li>Chapter 25 and 26 of the Village of Bolingbrook Municipal Code</li>
							<li>Illinois Accessibility Code</li>
						</ul>
					</ContentCard>
					<ContentCard id='KnoxBox' header='Rapid Entry System - Knox Box' icon='Information'>
						<p>
							Select either a 3200 or 4400 series box. You can then either search by zip code (60440 or 60490) or by Fire Department Name
							(Bolingbrook).
						</p>
						<CallToAction buttonText='Order a Knox Box' buttonLink='https://www.knoxbox.com/'>
							<p>To order your key box, click below.</p>
						</CallToAction>
					</ContentCard>
					<ContentCard id='SmokeAlarmAssistance' header='Smoke Alarm Assistance' icon='Information'>
						<p>
							The Bolingbrook Fire Department (BFD) offers free smoke alarm installation to qualified residents. Please use the guidelines
							below to determine whether you qualify for this program, and contact Fire Administration at 630-226-8540 with any questions.
						</p>
						<ul>
							<li>
								2Participants in this program must be homeowners in the Village of Bolingbrook. If you rent your home and it does not
								have adequate smoke detectors, please contact the Bolingbrook Code Enforcement at (630)226-8760.
							</li>
							<li>
								BFD will provide and install smoke detectors to elderly or disabled residents and to those who are financially unable to
								purchase smoke alarms.
							</li>
						</ul>
						<ContentCardSubsection subheader='Where should smoke alarms be installed?'>
							<ul>
								<li> Install a smoke alarm in (or immediately outside) each bedroom in the home.</li>
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
						<CallToAction
							buttonText='Alarms for Deaf or Hard of Hearing'
							buttonLink='https://bolingbrookil.govoffice3.com/vertical/Sites/%7B55EB27CA-CA9F-40A5-A0EF-1E4EEF52F39E%7D/uploads/SmokeAlarmInfoDeaf(1).pdf'>
							<p>Click here for more information on alarms for the deaf or hard of hearing.</p>
						</CallToAction>
					</ContentCard>
					<ContentCard id='WirelessAlarm' header='Wireless Alarm Monitoring' icon='Information'>
						<p>
							The Village of Bolingbrook implemented the wireless fire alarm monitoring for commercial and multifamily occupancies in 2008.
							This system is replacing an existing monitoring system that is over 25 years old with newer, less expensive and a more
							reliable system. This is a cost effective, reliable fire alarm protection system that will transmit fire alarms through a
							wireless mesh network. Any power loss by the radios are reported automatically to the Wescom Dispatch Center, which is
							operated by 911 dispatchers, 24 hours a day. There is no third party processing the alarm.
						</p>
						<ContentCardSubsection subheader='How Wireless Alarm Monitoring affects you'>
							<ul>
								<li>Eliminates the need for expensive dedicated phone lines</li>
								<li>Reduces the number of false alarms from phone line ground faults</li>
								<li>Ensures a higher degree of reliability during storm conditions</li>
								<li>Over nine (9) years of proven reliability</li>
								<li>All equipment is U.L. Listed; National Fire Protection Association (NFPA) compliant</li>
							</ul>
							<p>
								The total monthly monitoring cost is $86 per month. Since the system has been implemented, there has been no rate
								increase in monthly monitoring fees.
							</p>
						</ContentCardSubsection>

						<CallToAction
							buttonText='Wireless Compliance Statement'
							buttonLink='https://bolingbrookil.govoffice3.com/vertical/Sites/%7B55EB27CA-CA9F-40A5-A0EF-1E4EEF52F39E%7D/uploads/WirelessComplianceStatement(1).pdf'>
							<p>
								For new businesses that are in need of a wireless transceiver, please print the Wireless Compliance Statement and fax it
								to Fire Administration at 630-226-8549.
							</p>
						</CallToAction>
					</ContentCard>
				</Col>
				<Col id='fadeInRight'></Col>
			</Row>
		</>
	);
};

export default FirePreventionBureau;
