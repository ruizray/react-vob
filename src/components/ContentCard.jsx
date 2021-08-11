import React from "react";
import { CardBody, Card, CardTitle } from "reactstrap";
import PropTypes from "prop-types";
const ContentCard = ({ header, id, children }) => {
	return (
		<section id={id} key={id} className='sectionMain'>
			<CardBody className=' clamped w-100 my-0 py-1'>
				{/* <i className='material-icons icon-lg text-dark'>{icon}</i> */}
				<h2>{header}</h2>
				{children}
			</CardBody>
		</section>
	);
};

const ContentCardSubsection = ({ subHeader, id, children }) => {
	return (
		<section id={id} className='subsection'>
			<h4 style={{ fontWeight: "500", marginBottom: "0.25rem" , color:"navy"}} >
				{subHeader}
			</h4>
			{children}
		</section>
	);
};

const ContentCardImage = ({ src, caption, alt, imageStyle }) => {
	return (
		<figure class='figure w-100' style={{ textAlign: "center" }}>
			<img src={src} class={"figure-img img-fluid shadow-3 mb-3 " + imageStyle} alt={alt} />
			{caption && <figcaption class='figure-caption'>{"Pictured: " + caption}</figcaption>}
		</figure>
	);
};

const FrontDoorCard = ({ header, icon, buttonText, buttonLink, children }) => {
	// const str = header.replace(/\s/g, "");
	return (
		<Card className='card-raised ripple h-100 border'>
			<CardBody className='flex-column d-flex h-100 w-100 py-3 px-2'>
				<i className='material-icons icon-lg' style={{ fontSize: "1rem" }}>
					{icon}
				</i>
				<CardTitle tag={"h4"} className='mb-2'>
					{header}
				</CardTitle>
				{children}
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
ContentCard.propTypes = {
	header: PropTypes.string,
	id: PropTypes.string,
};
ContentCardSubsection.propTypes = {
	subHeader: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
};
ContentCardImage.propTypes = {
	src: PropTypes.string,
	caption: PropTypes.string,
	alt: PropTypes.string,
	imageStyle: PropTypes.string,
};
FrontDoorCard.propTypes = {
	header: PropTypes.string,
	icon: PropTypes.string,
	buttonText: PropTypes.string,
	buttonLink: PropTypes.string,
};
