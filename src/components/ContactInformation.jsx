import React from "react";
import QuoteWithPicture from "../components/QuoteWithPicture";
import { Card, CardTitle, CardBody, CardSubtitle, CardImg, Container, Row, Col } from "reactstrap";

const ContactInformation = (props) => {
	
	const { title, name, email, phone } = props.person;
	console.log(props.borderColor)
	if (props.type === "2") {
		return (
			<>
				<Card  className=  {props.borderColor ? props.borderColor +   " mx-2 border w-100 " :  '  mx-2 border w-100'}>
					{props.person && <CardBody className='h-100 w-100'>
						{title && <CardTitle tag={"h6"}>{title}</CardTitle>}
						{name && (
							<CardSubtitle tag='h6' className='mb-2'>
								{name}
							</CardSubtitle>
						)}

						{/* {phone && <h6 className='mb-2 text-muted'>
							<i style={{ verticalAlign: "middle", fontSize: "inherit" }} className=' material-icons  text-center'>
								phone
							</i>
							{phone}
						</h6>}

						{email && <h6 className='mb-2 text-muted text-truncate'>
							<i style={{ verticalAlign: "middle", fontSize: "inherit" }} className=' material-icons  text-center'>
								mail
							</i>
							{email}
						</h6>} */}
						{props.children}
					</CardBody>}
				</Card>
			</>
		);
	} else {
		return (
			<>
				<Card className='my-3 w-100'>
					<CardBody className='h-100 w-100'>
						<CardTitle tag={"h2"}>{title}</CardTitle>
						<CardSubtitle tag='h5' className='mb-2'>
							{name}
						</CardSubtitle>

						<h5 className='mb-2 text-muted'>
							<i style={{ verticalAlign: "middle" }} className=' material-icons  text-center'>
								phone
							</i>
							{phone}
						</h5>

						<h5 className='mb-2 text-muted text-truncate'>
							<i style={{ verticalAlign: "middle" }} className=' material-icons  text-center'>
								mail
							</i>
							{email}
						</h5>
					</CardBody>
				</Card>
			</>
		);
	}
};

export default ContactInformation;
