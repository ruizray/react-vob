import React from "react";
import { Card, CardBody } from "reactstrap";
const CallToAction = (props) => {
	let border = " CTA-primary";
	const { buttonText, buttonLink, color } = props;
	if (color) {
		border = " CTA-" + color;
	}

	return (
		<Card className={"border w-100 text-center my-4" + border}>
			<CardBody>
				{props.children}
				<a href={buttonLink} className= "stretched-link">
				<button  style={{ width: "fit-content" }} color='primary' className='btn btn-primary align-self-center '>
					{buttonText}
				</button>
				</a>
			</CardBody>
		</Card>
	);
};

export default CallToAction;
