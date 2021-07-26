import React from "react";
import { Card, CardBody } from "reactstrap";
import PropTypes from "prop-types";
const CallToAction = ({ buttonText, buttonLink, color,children }) => {
	let border = " CTA-primary";

	if (color) {
		border = " CTA-" + color;
	}

	return (
		<Card className={"border w-100 text-center my-4" + border}>
			<CardBody>
				{children}
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
CallToAction.propTypes = {
	buttonText: PropTypes.string,
	buttonLink: PropTypes.string,
	color: PropTypes.string,
};