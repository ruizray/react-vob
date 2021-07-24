import React from "react";
import { Card, CardTitle, CardBody, CardSubtitle, ListGroup, ListGroupItem, UncontrolledCollapse } from "reactstrap";
import { NavLink } from "react-router-dom";

const ContactCardProfile = (props) => {
	const { title, name, email, phone, image, profilePath } = props.person;
	const { backgroundPositionY, backgroundImage, backgroundSize, backgroundPositionX } = image;

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
};

const ContactCardTree = (props) => {
	const { title, name, email, phone } = props.person;
	const { childrenCount, borderColor } = props;
	return (
		<>
			<Card className={borderColor ? borderColor + " border hover-shadow" : " border hover-shadow"}>
				{props.person && (
					<>
						{childrenCount && (
							<span className='badge bg-primary rounded-pill float-end align-self-end position-absolute'>{childrenCount}</span>
						)}

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
};

const ContactCardSideBar = (props) => {
	if (props.Members) {
		const [...Members] = props.Members;
		return (
			<>
				<Card className='w-100 border my-1 hover-shadow'>
					<CardBody className='h-100 w-100 py-1'>
						<ListGroup className='ps-0 list-group-flush '>
							<div className='list-group-flush'>
								<ListGroupItem className='px-0'>
									<CardTitle tag={"h5"} className='mb-0 d-flex'>
										<span className='text-truncate'>Members</span>
										<span
											role='button'
											id={"MembersToggle"}
											className='ms-auto float-right material-icons border rounded-pill caret'>
											expand_more
										</span>
									</CardTitle>
								</ListGroupItem>
							</div>
							<UncontrolledCollapse toggler={"MembersToggle"} style={{ borderLeft: "none", borderRight: "none" }}>
								{Members.map((member) => {
									return (
										<ListGroupItem key={member} className='text-muted ps-0'>
											<i style={{ verticalAlign: "middle", fontSize: "inherit" }} className=' material-icons text-center'>
												person
											</i>
											{member}
										</ListGroupItem>
									);
								})}
							</UncontrolledCollapse>
						</ListGroup>
					</CardBody>
				</Card>
			</>
		);
	} else {
		const { title, name, email, phone, fax, id } = props.person;
<<<<<<< Updated upstream
=======
		
		const idSlug = id
		console.log(props, title, email, id)
>>>>>>> Stashed changes
		return (
			<>
				<Card className='w-100 border my-1 hover-shadow'>
					<CardBody className='h-100 w-100 py-1'>
						<ListGroup flush={true} className='ps-0 list-group-flush '>
							<div className='list-group-flush'>
								<ListGroupItem className='px-0'>
									<CardTitle tag={"h5"} className='mb-0 d-flex'>
										<span className='text-truncate'>{title}</span>
										<span
											role='button'
											data-mdb-toggle='collapse'
											href={"#" + id}
											aria-expanded='false'
											aria-controls={id}
											className='ms-auto float-right material-icons border rounded-pill caret'>
											expand_more
										</span>
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
							<div className='collapse' id={id} style={{ borderLeft: "none", borderRight: "none" }}>
								{phone && (
									<ListGroupItem className='text-muted ps-0'>
										<i style={{ verticalAlign: "middle", fontSize: "inherit" }} className=' material-icons text-center'>
											phone
										</i>
										{phone}
									</ListGroupItem>
								)}

								{email && (
									<ListGroupItem className=' text-muted ps-0 text-truncate'>
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
							</div>
						</ListGroup>
					</CardBody>
				</Card>
			</>
		);
	}
};

const ContactSideBar = ({ people }) => {
	console.log(Object.keys(people));
	return (
		<>
			{Object.keys(people).map((person) => {
				console.log(person)
				return <ContactCardSideBar person={people[person]} key={people[person].id} />;
			})}
		</>
	);
};

export { ContactCardSideBar, ContactCardProfile, ContactCardTree, ContactSideBar };
