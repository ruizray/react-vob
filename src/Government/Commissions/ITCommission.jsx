import React from "react";
import { Row, Col } from "reactstrap";
import { villageDirectory } from "../../scripts/DepartmentInfo";
import { ContactCardSideBar } from "../../components/ContactInformation";
import CallToAction from "../../components/CallToAction";
import {ContentCard} from "../../components/ContentCard";
const ITCommission = () => {
	const { Chair, ViceChair, Liason, Members } = villageDirectory.Commissions.IT;
	console.log(Members);
	return (
		<Row className='gx-3'>
			<Col md={3}></Col>
			<Col id='fadeInTop' md={6}>
				<ContentCard icon='front_hand' header='Welcome'>
					<p>
						The Information Technology Commission supports the dissemination of relevant and timely information on the policies and services
						civic and community events of the Village of Bolingbrook. We facilitate the effective use and application of technology in our
						community through programs and services provided to village government, residents and organizations within the boundaries of the
						Village of Bolingbrook.
					</p>
				</ContentCard>

				<ContentCard icon='front_hand' header='Public Meetings'>
					<p className='lead mb-1 text-muted'>
						<i style={{ verticalAlign: "middle", fontSize: "inherit" }} className=' material-icons text-center'>
							place
						</i>
						Village Board Room
					</p>
					<p className='lead text-muted'>
						<i style={{ verticalAlign: "middle", fontSize: "inherit" }} className=' material-icons text-center'>
							schedule
						</i>
						1st, 3rd and 5th Thursday of every month Starting at 7:00PM
					</p>
					<CallToAction buttonText="Register">
						<p>Registration is required to attend. Please go to the library's website to register:</p>
					</CallToAction>
				</ContentCard>

				
			</Col>
			<Col md={3} id='fadeInRight'>
				<ContactCardSideBar person={Chair}></ContactCardSideBar>
				<ContactCardSideBar person={ViceChair}></ContactCardSideBar>
				<ContactCardSideBar person={Liason}></ContactCardSideBar>
				<ContactCardSideBar Members={Members}></ContactCardSideBar>
			</Col>
		</Row>
	);
};

export default ITCommission;
