import React from "react";
import { CardBody, Card, CardTitle } from "reactstrap";
const ContentCard = (props) => {
	const { header, id } = props;

	return (
		<section id={id} className='sectionMain'>
			<CardBody className=' clamped w-100 my-0 py-1'>
				{/* <i className='material-icons icon-lg text-dark'>{icon}</i> */}
				<h1 className='display-6'>{header}</h1>
				{props.children}
			</CardBody>
		</section>
	);
};

const ContentCardSubsection = (props) => {
	const { subHeader, id } = props;

	return (
		<section id={id} className='subsection'>
			<h4 style={{ fontWeight: "500", color: "#014b82", marginBottom: "0.25rem" }}>{subHeader}</h4>
			{props.children}
		</section>
	);
};

const ContentCardImage = ({ src, caption, alt, imageStyle }) => {
	
	return (
		<figure class='figure w-100' style={ { textAlign: "center" }}>
			<img src={src} class={"figure-img img-fluid shadow-3 mb-3 " + imageStyle} alt={alt} />
			{caption && (<figcaption class='figure-caption'>{"Pictured: " + caption}</figcaption>)}
		</figure>
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
export { ContentCard, ContentCardSubsection, FrontDoorCard, ContentCardImage };
