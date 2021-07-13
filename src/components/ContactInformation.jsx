import React from "react";
import { Card, CardTitle, CardBody, CardSubtitle, ListGroup, ListGroupItem, UncontrolledCollapse } from "reactstrap";
import { NavLink } from "react-router-dom";

const ContactInformation = (props) => {
	const { title, name, email, phone, image, profileLink, profilePath, address, fax } = props.person;
	console.log(profileLink);
	const { type, childrenCount, borderColor } = props;

	if (type === "2") {
		return (
			<>
				<Card className={borderColor ? borderColor + " border hover-shadow" : " border hover-shadow"}>
					{props.person && (
						<>
							{childrenCount && <span className='badge bg-primary rounded-pill float-end align-self-end'>{childrenCount}</span>}

							<CardBody className='p-1 my-2 h-100 '>
								{title && (
									<CardTitle className='text-truncate' tag={"h6"}>
										{title}
									</CardTitle>
								)}
								{name && <CardSubtitle tag='h6'>{name}</CardSubtitle>}

								{phone && (
									<h6 className='mb-2 text-muted'>
										<i style={{ verticalAlign: "middle", fontSize: "inherit" }} className=' material-icons  text-center'>
											phone
										</i>
										{phone}
									</h6>
								)}

								{email && (
									<h6 className='mb-2 text-muted text-truncate'>
										<i style={{ verticalAlign: "middle", fontSize: "inherit" }} className=' material-icons  text-center'>
											mail
										</i>
										{email}
									</h6>
								)}
								{props.children}
							</CardBody>
						</>
					)}
				</Card>
			</>
		);
	} else if (type === 3) {
		const { backgroundPositionY, backgroundImage, backgroundSize, backgroundPositionX } = image;
		console.log(props.person);
		const person = props.person;
		return (
			<Card className='text-center border w-100 mt-3 pt-3 hover-zoom hover-shadow  h-100'>
				<CardBody>
					<div className='mb-3 member-thumb mx-auto'>
						<div
							className='avatar'
							style={{
								backgroundSize,
								backgroundPositionY,
								backgroundPositionX,
								backgroundImage,
							}}
						/>
					</div>
					<div>
						<h3>{name}</h3>
						<h3 className='text-muted'>{title}</h3>
					</div>
					{phone && (
						<h5 className='mb-2 text-muted'>
							<i style={{ verticalAlign: "middle", fontSize: "inherit" }} className=' material-icons  text-center'>
								phone
							</i>
							{phone}
						</h5>
					)}

					{email && (
						<h5 className='mb-2 text-muted text-truncate'>
							<i style={{ verticalAlign: "middle", fontSize: "inherit" }} className=' material-icons  text-center'>
								mail
							</i>
							{email}
						</h5>
					)}
					<NavLink className='stretched-link' to={profilePath}>
						<button type='button' className='btn btn-primary mt-3 btn-rounded waves-effect w-md waves-light'>
							View Profile
						</button>
					</NavLink>
				</CardBody>
			</Card>
		);
	}
};

const ContactCardSideBar = (props) => {
	const { title, name, email, phone, fax, id } = props.person;
	return (
		<>
			<Card role="button" id={id} className='my-3 w-100 border hover-shadow '>
				<CardBody className='h-100 w-100'>
					<ListGroup flush={true} className='ps-0 list-group-flush '>
						<div   className="list-group-flush ">
							<ListGroupItem className='ps-0'>
								<CardTitle tag={"h5"} className='mb-0'>
									{title}
								</CardTitle>
							</ListGroupItem>

							{name && (
								<ListGroupItem className='text-muted ps-0'>
									<i style={{ verticalAlign: "middle", fontSize: "inherit" }} className=' material-icons text-center'>
										person
									</i>
									{name}
								</ListGroupItem>
							)}
						</div>
						<UncontrolledCollapse  toggler={id}  style={{borderLeft:"none", borderRight:"none"}}>
							{phone && (
								<ListGroupItem className='text-muted ps-0'>
									<i style={{ verticalAlign: "middle", fontSize: "inherit" }} className=' material-icons text-center'>
										phone
									</i>
									{phone}
								</ListGroupItem>
							)}

							{email && (
								<ListGroupItem className=' text-muted ps-0 '>
									<i style={{ verticalAlign: "middle", fontSize: "inherit" }} className=' material-icons  text-center'>
										mail
									</i>
									{email}
								</ListGroupItem>
							)}
							{fax && (
								<ListGroupItem className=' text-muted ps-0 '>
									<i style={{ verticalAlign: "middle", fontSize: "inherit" }} className=' material-icons  text-center'>
										local_printshop
									</i>
									{fax}
								</ListGroupItem>
							)}
						</UncontrolledCollapse>
					</ListGroup>
				</CardBody>
			</Card>
		</>
	);
};

export { ContactCardSideBar, ContactInformation };
