import React from "react";
import QuoteWithPicture from "../components/QuoteWithPicture";
import { Container, Row, Col } from "reactstrap";
import ContactInformation from "./../components/ContactInformation";
const ExecutiveDepartment = () => {
	return (
		<>
			<Container fluid={true}></Container>
			<Row>
				<Col ></Col>
				<Col md={12} lg={12} xl={6}>
					<QuoteWithPicture />
					
					
				</Col>
				<Col>
					<ContactInformation title='Mayor' name="Mary Alexander-Basta" phone="630-226-8412" email="mayormary@bolingbrook.com" />
					<ContactInformation title='Mayor' phone={"(555) 555-5555"} />
				</Col>
			</Row>
		</>
	);
};

export default ExecutiveDepartment;
