import React from "react";
import QuoteWithPicture from "../components/QuoteWithPicture";
import { Container, Row, Col , CardBody} from "reactstrap";
import { villageDirectory } from "../scripts/DepartmentInfo";
import { ContactCardSideBar, ContactInformation } from "../components/ContactInformation";
const ExecutiveDepartment = () => {
	const { Mayor, VillageHall, CoAdministrator1, CoAdministrator2, Clerk, Attorney, FOIA } = villageDirectory.Executive;
	return (
		<>
			
			<Row>
				<Col md={3}>
					
				</Col>
				<Col md={6}>
				
					
					
					<QuoteWithPicture />
					<CardBody className='flex-column d-flex  clamped'>
						<i className='material-icons icon-lg '>announcement</i>
						<h2 className='display-6'>Welcome</h2>
						<p>
							To work in and with our community to provide leadership in the humane treatment of all animals, to address the causes of
							suffering, to encourage people to take responsibility for their animal companions and to provide care for animals who are
							neglected, abused, exploited stray or homeless.
						</p>
					</CardBody>
				</Col>
				<Col md={3} id='fadeIn'>
					<ContactCardSideBar person={Mayor} />
					<ContactCardSideBar person={VillageHall} />
					<ContactCardSideBar person={CoAdministrator1} />
					<ContactCardSideBar person={CoAdministrator2} />
					<ContactCardSideBar person={Clerk} />
					<ContactCardSideBar person={Attorney} />
					<ContactCardSideBar person={FOIA} />
				</Col>
			</Row>
		</>
	);
};

export default ExecutiveDepartment;
