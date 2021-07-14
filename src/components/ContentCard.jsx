import React from "react";
import { CardBody } from "reactstrap";
const ContentCard = (props) => {
    const { header, id} = props
	return (
		<CardBody id={id} className=' clamped w-100 my-0 py-1'>
			{/* <i className='material-icons icon-lg text-dark'>{icon}</i> */}
			<h1 className="display-6" >{header}</h1>
			{props.children}
		</CardBody>
	);
};

export default ContentCard;
