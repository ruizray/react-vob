import React from "react";
import { Card, CardTitle, CardBody, CardSubtitle } from "reactstrap";
import { NavLink, useLocation } from "react-router-dom";

const ContactInformation = (props) => {
	const { title, name, email, phone, image, profileLink, profilePath } = props.person;
	console.log(profileLink);
	const { type, childrenCount, borderColor } = props;
	let location = useLocation();
	if (type === "2") {
		return (
			<>
				<Card className={borderColor ? borderColor + " border hover-shadow" : "   border hover-shadow"}>
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
	} else if (type === 1) {
		return (
			<>
				<Card className='my-3 w-100 border '>
					<CardBody className='h-100 w-100'>
						<CardTitle tag={"h2"}>{title}</CardTitle>
						<CardSubtitle tag='h5' className='mb-2'>
							{name}
						</CardSubtitle>

						<h5 className='mb-2 text-muted'>
							<i style={{ verticalAlign: "middle" }} className=' material-icons  text-center'>
								phone
							</i>
							{phone}
						</h5>

						{email && (
							<h5 className='mb-2 text-muted text-truncate'>
								<i style={{ verticalAlign: "middle", fontSize: "inherit" }} className=' material-icons  text-center'>
									mail
								</i>
								{email}
							</h5>
						)}
					</CardBody>
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

export default ContactInformation;
