import React from "react";
import { Card, CardBody, CardImg, CardTitle, Row, Col } from "reactstrap";

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
	console.log(props.buttons);

	return (
		<>
			<Card className='card-raised h-100 border'>
				<CardBody className=' flex-column d-flex h-100 w-100 p-4 text-center pb-3'>
					<i className='w-100 material-icons icon-lg  text-center' style={{ fontSize: "8rem" }}>
						{props.icon}
					</i>
					<CardTitle tag={"h4"} className='py-3'>
						{props.title}
					</CardTitle>
					{props.buttons &&
						props.buttons.map((button) => (
							<a href={button.link} data-mdb-ripple-color='dark' className='btn btn-outline-light border border-2 text-dark ripple w-100 mb-2 mt-auto' >
								{button.text}
							</a>
						))}
					
					{/* <div className='align-items-end d-flex h-100 w-100'>
						<a href={props.link} data-mdb-ripple-color='dark' className='btn btn-outline-light border border-2 text-dark ripple w-100'>
							Current
						</a>
						<Row className=' gx-2 gy-2 align-items-end w-100'>
							<Col lg={12}>
								
							</Col>
							<Col lg={12}>
							
							</Col>
						</Row>
					</div> */}
				</CardBody>
			</Card>
		</>
	);
};

const FrontDoorLinkCard = (props) => {
	const { imgLink, title, buttonLink } = props;
	return (
		<>
			<Card className='card-raised h-100 border'>
				<CardImg src={imgLink}></CardImg>
				<CardBody className=' flex-column d-flex h-100 w-100 p-3'>
					<CardTitle tag={"h4"} className='mb-2'>
						{title}
					</CardTitle>
					{props.children}
					<div className='align-items-end d-flex h-100 w-100'>
						<a href={buttonLink} data-mdb-ripple-color='dark' className='btn btn-outline-light border border-2 text-dark ripple'>
							Visit
						</a>
					</div>
				</CardBody>
			</Card>
		</>
	);
};

export { LinkCard, TwoLinkCard, FrontDoorLinkCard };
