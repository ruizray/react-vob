import React from "react";
import { Row, Col } from "reactstrap";
import { ContentCard} from "../../../components/ContentCard";
import ScrollSpy from "../../../components/ScrollSpy";
const FireTraining = (props) => {
	return (
		<>
			<Row className='gx-3'>
				<Col>
					<ScrollSpy></ScrollSpy>
				</Col>
				<Col id='fadeInTop' md={6}>
					<ContentCard id='About' header='About' icon='Information'>
						<p>
							The Bolingbrook Fire Department Training Division develops, implements and maintains programs that support the safe and
							effective operations for our personnel. The Training Division oversees the suppression, safety and officer development
							programs and works in conjunction with out MABAS (Mutual Aid Box Alarm) Division 16 fire departments. The Training Division
							is comprised of one Battalion Chief full time and three front-line Lieutenants who focus on training as an ancillary
							assignment.
						</p>
						<p>
							The Training Battalion Chief develops a monthly schedule and training packet for the department. Our goal is to reinforce
							existing skills, introduce new equipment, maintain state mandated training objectives and utilize computer simulations to
							prepare our personnel for emergencies they will be confronted with. The majority of our training is completed at the station
							level being instructed by the Lieutenants and Upgrade Company Officers. Specialized topics including technical rescue,
							hazardous materials and water rescue are conducted with our MABAS 16 departments.
						</p>
						<p>
							Members of the Bolingbrook Fire Department become certified at the state level by meeting criteria developed by the Illinois
							Officer of the State Fire Marshal. The Training Division is committed to meeting or exceeding those fire service industry
							standards. The department is fortunate to count among its employees several such certified and qualified instructors. New
							recruits to the Bolingbrook Fire Department complete a 4 week orientation program and are assigned a Lieutenant for their
							probationary period of 1 year. They complete a 4 month and a 10 month skills evaluation as well as start preparing themselves
							for driving of fire apparatus. Each new member is required to be a state certified Advanced Firefighter within 5 years of
							employment.
						</p>
						<p>For additional information please contact Battalion Chief Troy Kirch at 630-226-8531.</p>
					</ContentCard>
					<ContentCard id='InterestWebsites' header='Websites of interest' icon='Information'>
						<ul>
							<li>
								<a href='http://www.sfm.illinois.gov/'>Office of the State Fire Marshal</a>
							</li>
							<li>

								<a href="http://www.fsi.illinois.edu/"> Illinois Fire Service Institute</a>
							</li>
							<li>
								<a href='http://www.usfa.fema.gov/'>United States Fire Administration</a>
							</li>
							<li>
								<a href='http://www.ill-fireinstructors.org/'>Illinois Society Fire Service Instructors</a>
							</li>
							<li>
								<a href='http://www.everyonegoeshome.com/'>Everyone Goes Home</a>
							</li>
						</ul>
					</ContentCard>
				</Col>
				<Col id='fadeInRight'></Col>
			</Row>
		</>
	);
};

export default FireTraining;
