import React from "react";
import { Card, CardBody } from "reactstrap";
const CallToAction = (props) => {
	return (
		<Card className='border  card-raised ripple-primary mb-3 m-auto text-center justify-content-center CTA'>
			<CardBody className='flex-column d-flex p-4'>
				<p>
					If a resident would like to trap the animal themselves, they must first obtain a permit from the Illinois Department of Natural
					Resources.
				</p>
				<button href='#' style={{ width: "fit-content" }} color='primary' className='btn btn-primary stretched-link align-self-center '>
					Nusicance Wildlife Control Permit
				</button>
			</CardBody>
		</Card>
	);
};

export default CallToAction;
