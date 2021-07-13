import React from "react";
import { CardBody } from "reactstrap";
const ContentCard = (props) => {
    const {icon, header, id} = props
	return (
		<CardBody id={id} className=' clamped w-100'>
			<i className='material-icons icon-lg text-dark'>{icon}</i>
			<h1 className="display-6" >{header}</h1>
			{props.children}
		</CardBody>
	);
};

export default ContentCard;
