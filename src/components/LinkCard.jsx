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
	return (
		<>
			<Card className='card-raised h-100 border'>
				<CardBody className=' flex-column d-flex h-100 w-100 p-4 text-center'>
					<i className='w-100 material-icons icon-lg bg-light text-center' style={{ fontSize: "8rem" }}>
						{props.icon}
					</i>

					<CardTitle tag={"h4"} className='py-3'>
						{props.title}
					</CardTitle>
					<div className='align-items-end d-flex h-100 w-100'>
						<Row className=' gx-2 gy-2 align-items-end w-100'>
							<Col lg={12}>
								<a
									href={props.link}
									data-mdb-ripple-color='dark'
									className='btn btn-outline-light border border-2 text-dark ripple w-100'>
									Current
								</a>
							</Col>
							<Col lg={12}>
								<a
									href={props.link}
									data-mdb-ripple-color='dark'
									className='btn btn-outline-light border border-2 text-dark ripple w-100'>
									Archive
								</a>
							</Col>
						</Row>
					</div>
				</CardBody>
			</Card>
		</>
	);
};

const FrontDoorCard = (props) => {
	const { imgLink, title } = props;
	return (
		<>
			<Card className='card-raised h-100 border'>
				<CardImg src={imgLink}></CardImg>
				<CardBody className=' flex-column d-flex h-100 w-100 p-3'>
					<CardTitle tag={"h4"} className='mb-1'>
						{title}
					</CardTitle>{props.children}
					<div className='align-items-end d-flex h-100 w-100'>
						<a href={props.link} data-mdb-ripple-color='dark' className='btn btn-outline-light border border-2 text-dark ripple'>
							Visit
						</a>
					</div>
					
				</CardBody>
			</Card>
		</>
	);
};

export { LinkCard, TwoLinkCard, FrontDoorCard };
