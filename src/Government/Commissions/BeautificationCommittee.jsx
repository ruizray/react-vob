import React, { useEffect, useState } from "react";
import { Row, Col } from "reactstrap";
import { villageDirectory } from "../../scripts/DepartmentInfo";
import { ContactCardSideBar } from "../../components/ContactInformation";
import CallToAction from "../../components/CallToAction";
import { ContentCard, ContentCardSubsection } from "../../components/ContentCard";
import ScrollSpy from "../../components/ScrollSpy";
const BeautificationCommittee = () => {
	const { Chair, ViceChair, Members } = villageDirectory.Commissions.Beautification;



	return (
		<Row className='x-3'>
			<Col md={3}></Col>
			<Col id='fadeInTop' md={6}>
				<ContentCard icon='front_hand' header='Welcome'>
					<p>
						The Beautification Commission was created to develop strategies to preserve and protect the heritage and integrity of existing
						neighborhoods. To do this, Commissioners focus on curb appeal to maintain and enhance the visual integrity of local neighborhoods.
						Achieving this goal requires participation among residents, businesses, elected and appointed officials. Commissioners work on
						encouraging re-investment in established neighborhoods. Commission members believe it “Takes the efforts of a Village” to build
						pride - from the inside. Therefore, the focus remains on devising strategies that instill neighborhood pride and encourage
						aesthetic investment. Commissioners use positive reinforcement such as awards for decorating property year round as well as during
						the holidays, as the catalysts to spur neighborhood improvement.
					</p>
				</ContentCard>

				<ContentCard icon='front_hand' header='Public Meetings'>
					<p className='lead mb-1 text-muted'>
						<i style={{ verticalAlign: "middle", fontSize: "inherit" }} className=' material-icons text-center'>
							place
						</i>
						Lower Level Conference Room
					</p>
					<p className='lead text-muted'>
						<i style={{ verticalAlign: "middle", fontSize: "inherit" }} className=' material-icons text-center'>
							schedule
						</i>
						1st & 3rd Wednesday of each month Starting at 7:30PM
					</p>
				</ContentCard>
				<ContentCard icon='front_hand' header='Arbor Day Contests'>
					<p>
						Arbor Day will be celebrated on Saturday, April 24th and winners will be asked to participate in the tree planting at the BRAC on
						Lindsay Lane, near the pond.
					</p>
					<ContentCardSubsection subHeader='Arbor Day Coloring Page Contest' >
						<p className='lead mb-1 text-muted'>(Judging Categories 3-4 Yrs. and 5-6 Yrs)</p>
					</ContentCardSubsection>
					<ContentCardSubsection subHeader='Arbor Day Poster Contest' >
						<p className='lead mb-1 text-muted'>Judging Categories 7-10 Yrs. and 11-14</p>
					</ContentCardSubsection>
				</ContentCard>
			</Col>
			<Col md={3} id='fadeInRight'>
				<ContactCardSideBar person={Chair}></ContactCardSideBar>
				<ContactCardSideBar person={ViceChair}></ContactCardSideBar>
				<ContactCardSideBar Members={Members}></ContactCardSideBar>
				<ScrollSpy/>
			</Col>
		</Row>
	);
};

export default BeautificationCommittee;
