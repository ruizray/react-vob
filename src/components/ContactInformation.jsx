import React from "react";
import QuoteWithPicture from "../components/QuoteWithPicture";
import { Card, CardTitle, CardBody, CardSubtitle, CardImg, Container, Row, Col } from "reactstrap";

const ContactInformation = (props) => {
	return (
		<>
			<Card className='my-3 w-100'>
				<CardBody className='h-100 w-100'>
					<CardTitle tag={"h2"}>{props.title}</CardTitle>
					<CardSubtitle tag='h5' className='mb-2'>
						{props.name}
					</CardSubtitle>

					<h5 className='mb-2 text-muted'>
						<i style={{ verticalAlign: "middle" }} className=' material-icons  text-center'>
							phone
						</i>
						{props.phone}
					</h5>

					<h5 className='mb-2 text-muted text-truncate'>
						<i style={{ verticalAlign: "middle" }} className=' material-icons  text-center'>
							mail
						</i>
						{props.email}
					</h5>
				</CardBody>
			</Card>
		</>
	);
};

export default ContactInformation;
