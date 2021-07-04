import React from "react";
import QuoteWithPicture from "../components/QuoteWithPicture";
import { Card, CardTitle, CardBody, CardSubtitle, CardImg, Container, Row, Col } from "reactstrap";

const ContactInformation = (props) => {
	return (
		<>
			<Card className='pl-0 ml-0'>
				<CardBody className='h-100 w-100'>
					<CardTitle tag={"h3"}>{props.title}</CardTitle>
					<Row className='mb-2 text-muted'>
						<Col  md={3}>
							<h5> Phone:</h5>
						</Col>
						<Col md={9}>
							<h5>{props.phone}</h5>
						</Col>
					</Row>
				</CardBody>
			</Card>
		</>
	);
};

export default ContactInformation;
