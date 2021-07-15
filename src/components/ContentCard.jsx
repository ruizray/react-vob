import React from "react";
import { CardBody } from "reactstrap";
const ContentCard = (props) => {
	const { header, id } = props;
	const str = header.replace(/\s/g, "");
	return (
		<section id={str} className="sectionMain">
			<CardBody id={id} className=' clamped w-100 my-0 py-1'>
				{/* <i className='material-icons icon-lg text-dark'>{icon}</i> */}
				<h1 className='display-6'>{header}</h1>
				{props.children}
			</CardBody>
		</section>
	);
};

const ContentCardSubsection = (props) => {
	const { subHeader, id } = props;
	
	const str = subHeader.replace(/\s/g, "");
	return (
		<section id={str} className="subsection">
			<h3 style={{ fontWeight: "500", color: "#014b82", marginBottom: "0.25rem" }}>{subHeader}</h3>
			{props.children}
		</section>
	);
};
export { ContentCard, ContentCardSubsection };
