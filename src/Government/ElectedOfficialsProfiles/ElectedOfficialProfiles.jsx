import React from "react";

import { Row, CardImg, Card, CardBody, ListGroup, ListGroupItem, Col } from "reactstrap";
import { villageDirectory } from "../../scripts/DepartmentInfo";

const MayorMaryProfile = (props) => {
	const { Mayor } = villageDirectory.Executive;
	var { backgroundImage } = Mayor.image;
	console.log(backgroundImage.indexOf("("));
	var space1 = backgroundImage.indexOf("(");
	var space2 = backgroundImage.indexOf(")");
	var temp = backgroundImage.substring(space1 + 1, space2);
	console.log(temp);

	return (
		<>
			<Row className='gutters-sm'>
				<div className='col-md-3 mb-3 text-truncate '>
					<Card className='border'>
						<CardBody>
							<div className='d-flex flex-column align-items-center text-center'>
								<CardImg src={temp}></CardImg>

								<div className='mt-2 text-truncate w-100'>
									<h4 className='text-truncate'>{Mayor.name}</h4>
									<h4 className='text-muted'>{Mayor.title}</h4>
								</div>
							</div>
						</CardBody>
					</Card>
					<Card className='mt-3 border '>
						<ListGroup flush={true}>
							{Mayor.phone && (
								<ListGroupItem className='d-flex justify-content-between align-items-center flex-wrap'>
									<h6 className='mb-0'>Office</h6>
									<span className='text-primary'>{Mayor.phone}</span>
								</ListGroupItem>
							)}
							{Mayor.cell && (
								<ListGroupItem className='d-flex justify-content-between align-items-center flex-wrap'>
									<h6 className='mb-0'>Cell</h6>
									<span className='text-primary'>{Mayor.cell}</span>
								</ListGroupItem>
							)}
							{Mayor.email && (
								<ListGroupItem className='d-flex justify-content-between align-items-center flex-wrap'>
									<h6 className='mb-0 '>Email</h6>
									<span className='text-primary text-truncate'>{Mayor.email}</span>
								</ListGroupItem>
							)}
						</ListGroup>
					</Card>
				</div>
				<Col>
					<Card className='border card-raised ripple-primary mb-3'>
						<CardBody className='flex-column d-flex p-4'>
							<ul>
								<li>Bolingbrook Village Trustee</li>
								<li>Serves on the Village ’s Public Safety Committee and the Public Services Committee</li>
								<li>
									Event design and coordination consultant with twenty plus years of experience doing major corporate event planning
									and hotel/club management - studied Hospitality Management at Tennessee State University
								</li>
								<li>Experienced in Village Planning and Development; served as Chair of the Bolingbrook Plan Commission</li>
								<li>Active leader in the School District community; currently serving as the John F. Kennedy PTA President</li>
								<li>Serves as an Executive Board member of the 40-year old Bolingbrook Soccer League</li>
								<li>Founding Vice President of Bolingbrook STEM (Science, Technology, Engineering, & Math ) Association for youth</li>
								<li>Dedicated wife, and mother of two sons</li>
								<li>2018 Female Citizen of the Year</li>
								<li>Active member of Saint Mark of Burr Ridge Church Community</li>
							</ul>
							<p>
								Mary and her husband, Dr. Emad Basta, moved to Bolingbrook in November 2003. They are parents of two sons, Peter (16)
								and Benjamin (14). Bolingbrook was their choice, because of its diversity, its opportunities to serve and for all of the
								amenities that others have also found attractive about the community. While she found her career challenging and
								satisfying, she and her husband also wanted to raise a family here. Since a position in the hospitality industry was not
								a nine to five job, she left the corporate world to start a family. As her children grew, Mary found herself seeking
								more adult interaction, so she looked for ways to get involved, which led her to serving in the PTA. In all of her
								activities, both professional and community service, Mary enjoys problem-solving; finding ways to work smarter, not
								harder; and to take them to the next level of success.
							</p>
						</CardBody>
					</Card>
					<Card className='border card-raised ripple-primary mb-3'>
						<CardBody className='flex-column d-flex p-4'>
							<i className='material-icons icon-lg '>school</i>
							<h2 className='display-6'>Education</h2>
							<p>
								Mary studied Mass Communications at the American University in Cairo, Egypt and Hospitality Management at Tennessee
								State University.
							</p>
						</CardBody>
					</Card>
					<Card className='border card-raised ripple-primary mb-3'>
						<CardBody className='flex-column d-flex p-4'>
							<i className='material-icons icon-lg '>people</i>
							<h2 className='display-6'>Community Experience</h2>
							<p>
								The Basta family are very involved in service to the Bolingbrook community, and can be seen at many community events.
								Mary states that she was strongly influenced toward community involvement by her parents. Both her mother and her uncle
								now live in Bolingbrook, as well. Because of her passion for youth development, Mary currently serves on the Executive
								Board of the Bolingbrook Soccer Club, which recently celebrated its 40th year of service to youth in Bolingbrook in
								2018. <br />
								Mary’s dedication to youth development has led her to support the school community as President of the John F. Kennedy
								PTA, President of the Plainfield Middle Schools Music Boosters, and prior to that as PTA President at Eichelberger
								Elementary School. She continues to serve as a consultant ECN Children ’s Cancer Network in Newport Beach, CA,
								coordinating fundraising events and creating new chapters in other states Additionally, she maintains the organization
								’s legal registration status and works with auditors to ensure accurate financial reporting. Her community service is
								not limited to only youth, Mary previously served as President of the Bloomfield West II Homeowners Association Mary
								served as the Chair of the Bolingbrook Plan Commission, which reviews new residential and commercial development in
								Bolingbrook and makes recommendations to the Village Board.
							</p>
						</CardBody>
					</Card>
					<Card className='border card-raised ripple-primary mb-3'>
						<CardBody className='flex-column d-flex p-4'>
							<i className='material-icons icon-lg '>school</i>
							<h2 className='display-6'>Professional Experience</h2>
							<p>
								Her professional background includes Social and Corporate Event Planning, Hotel and Club Management at locations such as
								the Palmer House Hilton, Four Seasons, and the Chicago Yacht Club where she became the first female General Manager in
								the Club’s 125-year history. She currently works as an independent Hospitality and Event Consultant.
							</p>
						</CardBody>
					</Card>
					<Card className='border card-raised ripple-primary mb-3'>
						<CardBody className='flex-column d-flex p-4'>
							<i className='material-icons icon-lg '>emoji_events</i>
							<h2 className='display-6'>Recognitions</h2>
							<p>
								Mary has received recognition as the recipient of the CAPE (Coordination of Parent and groups for Educational
								Efficiency) in 2013, 2017 and 2019. In honor of her exemplary service to the Bolingbrook community over the years, Mary
								was chosen as the 2018 Bolingbrook Female Citizen of the Year.
							</p>
						</CardBody>
					</Card>
				</Col>
			</Row>
		</>
	);
};

export { MayorMaryProfile };
