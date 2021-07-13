import React from "react";
import { Card, CardBody } from "reactstrap";
const CallToAction = (props) => {
	const { buttonText, buttonLink } = props;
	return (
		<Card className='border ripple text-center CTA clamped '>
			<CardBody className='p-4'>
				{props.children}
				<button href={buttonLink} style={{ width: "fit-content" }} color='primary' className='btn btn-primary stretched-link align-self-center '>
					{buttonText}
				</button>
			</CardBody>
		</Card>
	);
};

export default CallToAction;
