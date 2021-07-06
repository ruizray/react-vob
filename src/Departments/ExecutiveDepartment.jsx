import React from "react";
import QuoteWithPicture from "../components/QuoteWithPicture";
import { Container, Row, Col } from "reactstrap";
import ContactInformation from "./../components/ContactInformation";
import { villageDirectory } from "../scripts/DepartmentInfo";
const ExecutiveDepartment = () => {
	const { Mayor, CoAdministrator1, CoAdministrator2, Clerk } = villageDirectory.Executive;
	return (
		<>
			<Container fluid={true}></Container>
			<Row>
				<Col ></Col>
				<Col md={12} lg={12} xl={6}>
					<QuoteWithPicture />
					
					
				</Col>
				<Col>
					<ContactInformation person={Mayor} />
					<ContactInformation person={Mayor}  />
				</Col>
			</Row>
		</>
	);
};

export default ExecutiveDepartment;
