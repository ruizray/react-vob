import React from "react";
import { Row, Col } from "reactstrap";
import {ContactCardProfile} from "./../components/ContactInformation";

import { villageDirectory } from "./../scripts/DepartmentInfo";
const ElectedOfficials = (props) => {
	const { Mayor, Clerk, TrusteeDoris, TrusteeWatts, TrusteeZarate, TrusteeCarpanzano, TrusteeLawler, TrusteeRupsis } = villageDirectory.Executive;
	return (
		<>
			<Row className=' d-flex justify-content-center align-items-center d-flex align-items-stretch '>
				<Col className="mt-2" lg={3}>
					<ContactCardProfile type={3} person={Mayor}></ContactCardProfile>
				</Col>
				<Col className="mt-2" lg={3}>
					<ContactCardProfile type={3} person={Clerk}></ContactCardProfile>
				</Col>
			</Row>
			<Row className=' d-flex justify-content-center align-items-center d-flex align-items-stretch '>
				<Col className="mt-2" lg={3}>
					<ContactCardProfile type={3} person={TrusteeDoris}></ContactCardProfile>
				</Col>
				<Col className="mt-2" lg={3}>
					<ContactCardProfile type={3} person={TrusteeWatts}></ContactCardProfile>
				</Col>
				<Col className="mt-2" lg={3}>
					<ContactCardProfile type={3} person={TrusteeZarate}></ContactCardProfile>
				</Col>
			</Row>
            <Row className=' d-flex justify-content-center align-items-center d-flex align-items-stretch '>
				<Col className="mt-2" lg={3}>
					<ContactCardProfile type={3} person={TrusteeCarpanzano}></ContactCardProfile>
				</Col>
				<Col className="mt-2" lg={3}>
					<ContactCardProfile type={3} person={TrusteeLawler}></ContactCardProfile>
				</Col>
				<Col className="mt-2" lg={3}>
					<ContactCardProfile type={3} person={TrusteeRupsis}></ContactCardProfile>
				</Col>
			</Row>
		</>
	);
};

export default ElectedOfficials;
