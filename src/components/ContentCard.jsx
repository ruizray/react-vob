import React from "react";
import { CardBody, Card, CardTitle, CardImg } from "reactstrap";
const ContentCard = (props) => {
	const { header, id } = props;
	const str = header.replace(/\s/g, "");
	return (
		<section id={str} className='sectionMain'>
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
		<section id={str} className='subsection'>
			<h4 style={{ fontWeight: "500", color: "#014b82", marginBottom: "0.25rem" }}>{subHeader}</h4>
			{props.children}
		</section>
	);
};

const FrontDoorCard = (props) => {
	const { header, icon, buttonText, buttonLink } = props;
	const str = header.replace(/\s/g, "");
	return (
		<Card className='card-raised ripple h-100 border'>
			<CardBody className=' flex-column d-flex h-100 w-100 p-3'>
				<i className='material-icons icon-lg ' style={{ fontSize: "3rem" }}>
					{icon}
				</i>
				<CardTitle tag={"h4"} className='mb-2'>
					{header}
				</CardTitle>
				{props.children}
				<div className='align-items-end d-flex h-100 w-100'>
					<a href={buttonLink} data-mdb-ripple-color='dark' className='btn btn-outline-light border border-2 text-dark stretched-link'>
						{buttonText}
					</a>
				</div>
			</CardBody>
		</Card>
	);
};
export { ContentCard, ContentCardSubsection, FrontDoorCard };
