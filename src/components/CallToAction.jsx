import React from "react";
import { Card, CardBody } from "reactstrap";
const CallToAction = (props) => {
	let border = " CTA-primary";
	const { buttonText, buttonLink, color } = props;
	if (color) {
		border = " CTA-" + color;
	}

	return (
		<Card className={"border  text-center mb-4 mx-2 clamped " + border}>
			<CardBody className=''>
				{props.children}
				<button href={buttonLink} style={{ width: "fit-content" }} color='primary' className='btn btn-primary stretched-link align-self-center '>
					{buttonText}
				</button>
			</CardBody>
		</Card>
	);
};

export default CallToAction;
