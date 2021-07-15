import React from "react";
import { Row, Col } from "reactstrap";
import { villageDirectory } from "../../scripts/DepartmentInfo";
import { ContactCardSideBar } from "../../components/ContactInformation";
import CallToAction from "../../components/CallToAction";
import {ContentCard} from "../../components/ContentCard";
const ArtsCouncil = () => {
	const { ArtsCouncil, Chair, ViceChair, Members } = villageDirectory.Commissions.ArtsCouncil;
	console.log(Members);
	return (
		<Row className='gx-3'>
			<Col md={3}></Col>
			<Col id='fadeInTop' md={6}>
				<ContentCard icon='front_hand' header='Welcome'>
					<p>
						The Arts Council was created to develop and implement projects enhancing local artistic and cultural aesthetics that showcase the
						diversity of residents.
					</p>
				</ContentCard>

				<ContentCard icon='front_hand' header='Public Meetings'>
					<p className='lead mb-1 text-muted'>
						<i style={{ verticalAlign: "middle", fontSize: "inherit" }} className=' material-icons text-center'>
							place
						</i>
						Village Hall Conference Room
					</p>
					<p className='lead text-muted'>
						<i style={{ verticalAlign: "middle", fontSize: "inherit" }} className=' material-icons text-center'>
							schedule
						</i>
						Held on the 1st & 3rd Tuesday of each month Starting at 7:15PM
					</p>
				</ContentCard>
				<ContentCard icon='front_hand' header='Activities'>
					<CallToAction
						buttonText='
                    Visit'
						buttonLink='https://www.bolingbrookartscouncil.org/'>
						<p>Click here for more information</p>
					</CallToAction>
				</ContentCard>
			</Col>
			<Col md={3} id='fadeInRight'>
				<ContactCardSideBar person={ArtsCouncil}></ContactCardSideBar>
				<ContactCardSideBar person={Chair}></ContactCardSideBar>
				<ContactCardSideBar person={ViceChair}></ContactCardSideBar>
				<ContactCardSideBar Members={Members}></ContactCardSideBar>
			</Col>
		</Row>
	);
};

export default ArtsCouncil;
