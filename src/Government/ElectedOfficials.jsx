import React from "react";
import { Row, Col } from "reactstrap";
import ContactInformation from "./../components/ContactInformation";

import { villageDirectory } from "./../scripts/DepartmentInfo";
const ElectedOfficials = (props) => {
	const { Mayor, Clerk, TrusteeDoris, TrusteeWatts, TrusteeZarate, TrusteeCarpanzano, TrusteeLawler, TrusteeRupsis } = villageDirectory.Executive;
	return (
		<>
			<Row className=' d-flex justify-content-center align-items-center d-flex align-items-stretch '>
				<Col className="mt-2" lg={3}>
					<ContactInformation type={3} person={Mayor}></ContactInformation>
				</Col>
				<Col className="mt-2" lg={3}>
					<ContactInformation type={3} person={Clerk}></ContactInformation>
				</Col>
			</Row>
			<Row className=' d-flex justify-content-center align-items-center d-flex align-items-stretch '>
				<Col className="mt-2" lg={3}>
					<ContactInformation type={3} person={TrusteeDoris}></ContactInformation>
				</Col>
				<Col className="mt-2" lg={3}>
					<ContactInformation type={3} person={TrusteeWatts}></ContactInformation>
				</Col>
				<Col className="mt-2" lg={3}>
					<ContactInformation type={3} person={TrusteeZarate}></ContactInformation>
				</Col>
			</Row>
            <Row className=' d-flex justify-content-center align-items-center d-flex align-items-stretch '>
				<Col className="mt-2" lg={3}>
					<ContactInformation type={3} person={TrusteeCarpanzano}></ContactInformation>
				</Col>
				<Col className="mt-2" lg={3}>
					<ContactInformation type={3} person={TrusteeLawler}></ContactInformation>
				</Col>
				<Col className="mt-2" lg={3}>
					<ContactInformation type={3} person={TrusteeRupsis}></ContactInformation>
				</Col>
			</Row>
		</>
	);
};

export default ElectedOfficials;
