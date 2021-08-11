import React from "react";
import { Card, CardBody, CardImg, CardTitle } from "reactstrap";

const LinkCard = (props) => {
	return (
		<>
			<Card className='card-raised h-100 w-100 hover-shadow border ripple'>
				<CardBody className='flex-column d-flex h-100 w-100 p-4 text-center '>
					<i className='w-100 material-icons icon-lg bg-light text-center' style={{ fontSize: "8rem" }}>
						{props.icon}
					</i>

					<CardTitle tag={"h4"} className='py-3'>
						{props.title}
					</CardTitle>
					<div className='align-items-end d-flex h-100 '>
						<a href={props.link} color='primary' className='px-6 w-100 stretched-link '>
							Visit
						</a>
					</div>
				</CardBody>
			</Card>
		</>
	);
};

const TwoLinkCard = (props) => {
	console.log(props);

	return (
		<>
			<Card className='card-raised h-100 border'>
				<CardBody className={props.imageLink ? 'flex-column d-flex h-100 w-100 px-0 pt-0 text-center pb-3':'flex-column d-flex h-100 w-100 p-4 text-center pb-3'}>
					{props.icon && (
						<i className='w-100 material-icons icon-lg text-primary text-center' style={{ fontSize: "8rem" }}>
							{props.icon}
						</i>
					)}
					{props.imageLink && <img style={{maxHeight:"160px", objectFit:"cover"}} src={props.imageLink}></img>}
					<CardTitle tag={"h4"} className='py-3 mx-2'>
						{props.title}
					</CardTitle>
					{props.buttons &&
						props.buttons.map((button, index) => (
							<a
								href={button.link || button.url}
								data-mdb-ripple-color='dark'
								key={index}
								className={props.imageLink ? "border border-2 btn btn-outline-light mb-2 mx-3 ripple ripple-surface ripple-surface-dark text-dark" : 'btn btn-outline-light border border-2 text-dark ripple w-100 mb-2 mt-auto'}>
								{button.text || button.linkText}
							</a>
						))}

				
				</CardBody>
			</Card>
		</>
	);
};

const FrontDoorLinkCard = ({ imgLink, title, buttonLink, buttonText, button, icon, children }) => {
	return (
		<>
			<a href={buttonLink} style={{ color: "inherit" }} className=''>
				<Card className='card-raised h-100 border ripple'>
					{imgLink && <CardImg src={imgLink}></CardImg>}

					<CardBody className=' flex-column d-flex h-100 w-100 py-3 px-3'>
						{icon && (
							<i className='material-icons text-primary icon-lg ' style={{ fontSize: "2rem" }}>
								{icon}
							</i>
						)}
						<CardTitle tag={"h5"} className='mb-1'>
							{title}
						</CardTitle>
						<p style={{ fontSize: "14px", lineHeight: "initial", marginBottom: "1px" }} className='text-muted mb-0'>
							{children}
						</p>
						{button && (
							<div href={buttonLink} data-mdb-ripple-color='dark' className='mt-2 text-primary ripple mt-auto '>
								{buttonText}
							</div>
						)}
					</CardBody>
				</Card>
			</a>
		</>
	);
};

export { LinkCard, TwoLinkCard, FrontDoorLinkCard };
