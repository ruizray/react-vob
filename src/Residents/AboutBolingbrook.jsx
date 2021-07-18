import React from "react";
import { Row, Col } from "reactstrap";
import { villageDirectory } from "../scripts/DepartmentInfo";

import { ContentCard, ContentCardSubsection } from "../components/ContentCard";
import ScrollSpy from "../components/ScrollSpy";
const AboutBolingbrook = () => {
	return (
		<Row className='gx-3'>
			<Col md={3}></Col>
			<Col id='fadeInTop' md={6}>
				<ContentCard icon='front_hand' header='Welcome New Residents'>
					<blockquote className='blockquote'>
						<p>Dear Resident:</p>{" "}
						<p>
							On behalf of the Village of Bolingbrook, I would like to welcome you to Bolingbrook. I am enclosing, for your records, a copy
							of the Village of Bolingbrook Residential Transfer Information and Disclosure Form that was signed when you purchased your
							home. This form gives you information regarding the public services for your new home along with the zoning classification.
							If you have any questions relating to Residential Transfer Information, please feel free to call the Finance Department at
							(630) 226-8430. Someone is available to assist you Monday – Friday from 8:30 a.m. – 5:00 p.m.
						</p>
						<p>
							{" "}
							We’d like to invite you to sign up for “Brook Alerts” by visiting www.bolingbrook.com/alerts. These e-mail and/or text alerts
							allow the Village of Bolingbrook to provide residents with direct emergency and non-emergency information such as severe
							weather emergencies, hazardous materials issues, road/traffic closures or impacts, etc.
						</p>
						<p>
							{" "}
							Also, information and request forms are available on our website (www.bolingbrook.com) and on our Village of Bolingbrook
							Mobile Application allowing you to electronically submit requests for potholes, downed trees, street lights, water main
							breaks, and other code enforcement requests.
						</p>
						<p>
							{" "}
							In addition, I always encourage residents to visit Bolingbrook Town Center (Village Hall) at 375 W. Briarcliff Road. We
							maintain an open door policy. You can contact me directly in the Executive Office by calling (630) 226-8412 or e-mailing
							mayormary@bolingbrook.com.
						</p>{" "}
						<p>Sincerely,</p>
					</blockquote>
					<figcaption className='blockquote-footer'>
						Mary Alexander-Basta, <cite title='Source Title'>Mayor</cite>
					</figcaption>
				</ContentCard>
				<ContentCard icon='front_hand' header='Safest Cities in Illinois'>
					<p className='lead mb-1 text-muted'>The Home Security Advisor named Bolingbrook in annual Illinois’s Safest Cities Report</p>

					<div className='w-100 d-flex justify-content-center py-4'>
						<div>
							<img
								className='w-100'
								src='https://www.thehomesecurityadvisor.com/wp-content/uploads/2019/07/Safest-Cities-in-Illinois.png'
								alt='Bolingbrook, IL'
							/>
						</div>
					</div>
					<p>
						Bolingbrook has been named as one of the Top 50 Safest Cities in Illinois in the 2019 report published by The Home Security
						Advisor. The article and a full listing can be found at https://www.thehomesecurityadvisor.com/safest-cities-illinois/. A leader
						in the home security and personal safety industry, the site proclaims: “In our experience the towns, cities and communities listed
						in our Top 50 share a number of qualities of which their residents should be proud:
					</p>

					<ul>
						<li>Strong Leadership</li>
						<li>Dedicated Law Enforcement</li>
						<li>Active Citizenship</li>
					</ul>
					<p>
						These are the key ingredients that combine to make these communities among the safest and most desirable places to reside and
						raise a family.”{" "}
					</p>
					<p>
						The Home Security Advisor rankings were calculated using the 2016 FBI Uniform Crime Report results with respect to towns and
						cities with Five-thousand residents or higher, who reported their crime data. These figures were weighted in order to accurately
						indicate the seriousness of the criminal activity. Violent crimes were factored by .60 and property crimes by .40. This number
						would be then divided by the population in the community and normalized to reflect weighted criminal offenses per 100,000.
					</p>
				</ContentCard>
				<ContentCard icon='front_hand' header='History of Bolingbrook'>
					<blockquote className='blockquote'>
						<p>
							The modern Village of Bolingbrook got its start in the first half of the 1960s when the first builder laid out the first
							housing tract in the farm fields just north of old U.S. 66 and beside Illinois Route 53.
						</p>{" "}
						<p>
							Those first families, as they moved in, had never heard or seen the name "Bolingbrook". Where they were moving was known as
							"Westbury" they thought, which, as it turned out, was just the first west side unit of what was "Bolingbrook Subdivision", as
							recorded by Dover Construction Company at the county. The young families, for the most part, were lured out to model homes by
							advertisements that featured a handsome and distinguished British butler named Mr. Dover. They come via the Stevenson
							Expressway, as the new and improved Route 66 had been renamed. It was the long umbilical cord that stretched out from the
							city of Chicago to the far west farmlands. The first model homes went up on Rocklyn Court, off Route 53, just north of the
							current Pheasant Hill shopping center.
						</p>
						<p>
							Homes were priced at $10,000 with as little as $200 down. The first homes ready for families to move into were on Avondale
							Court, just west of Route 53 and north of Briarcliff Road. Lesson #1 learned the hard way through teary eyes: everything you
							see in the model home isn't in your finished house, necessarily. In the case of Dover homes that meant no carpeting or even
							floor tile in some area unless you paid extra. And there certainly were no trees or lawns. And not always paved streets.
							Dover Construction Company also designed two other areas to follow Westbury, the two subsequent areas both east of Route 53,
							but still centered around the Dover-built Briarcliff Road. While Westbury had the first homes, the east side's Colonial
							Village became the site of the first churches, parks, fire station and, eventually, Village Hall and jail. The three original
							home tracts - sold from 1961 to 1965 under the names of Westbury, Colonial Village and King's Park were all part of the
							original "Bolingbrook Subdivision." It was these homes, and the families in them that officially formed the Village of
							Bolingbrook in 1965 with incorporation.
						</p>
					</blockquote>
					<figcaption className='blockquote-footer'>
						As reported in <cite title='Source Title'>The Met, 8/23/90</cite>
					</figcaption>
				</ContentCard>
			</Col>
			<Col md={3} id='fadeInRight'>
				<ScrollSpy></ScrollSpy>
			</Col>
		</Row>
	);
};

export default AboutBolingbrook;
