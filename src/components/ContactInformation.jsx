import React from "react";
import { Card, CardTitle, CardBody, CardSubtitle, ListGroup, ListGroupItem, UncontrolledCollapse } from "reactstrap";
import { NavLink } from "react-router-dom";

const ContactCardProfile = (props) => {
	var { title, name, email, phone, codeBlock, id } = props.person;
	if (props.person.firstName) {
		name = props.person.firstName + " " + props.person.lastName;
	}

	return (
		<Card className='text-center border w-100 mt-3 pt-3 hover-zoom hover-shadow  h-100'>
			<CardBody>
				{codeBlock && <div dangerouslySetInnerHTML={{ __html: codeBlock.code }}></div>}
				<div>
					<h3>{name}</h3>
					<h3 className='text-muted'>{title}</h3>
				</div>
				{phone && (
					<h5 className='mb-2 text-muted'>
						<i style={{ verticalAlign: "middle", fontSize: "inherit" }} className=' material-icons text-center'>
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
				<NavLink className='stretched-link' to={id ? "/profile/" + id.current : "/"}>
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
							{title && <CardTitle tag={"h6"}>{title}</CardTitle>}
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

const MembersContactCard = ({ members }) => {
	const [...membersList] = members;
	return (
		<>
			<Card className='w-100 border my-1 hover-shadow'>
				<CardBody className='h-100 w-100 py-1'>
					<ListGroup className='ps-0 list-group-flush '>
						<div className='list-group-flush'>
							<ListGroupItem className='px-0'>
								<CardTitle tag={"h5"} className='mb-0 d-flex'>
									<span>Members</span>
									<span role='button' id={"MembersToggle"} className='m-auto float-right material-icons border rounded-pill caret'>
										expand_more
									</span>
								</CardTitle>
							</ListGroupItem>
						</div>
						<UncontrolledCollapse toggler={"MembersToggle"} style={{ borderLeft: "none", borderRight: "none" }}>
							{membersList.map((member) => {
								return (
									<ListGroupItem key={member._key} className='text-muted ps-0'>
										<i style={{ verticalAlign: "middle", fontSize: "inherit" }} className=' material-icons text-center'>
											person
										</i>
										{member.memberName}
									</ListGroupItem>
								);
							})}
						</UncontrolledCollapse>
					</ListGroup>
				</CardBody>
			</Card>
		</>
	);
};
const ContactCardSideBar = ({ person, noShadow, shown }) => {
	var { title, name, email, phone, fax, id, firstName, lastName } = person;

	if (firstName) {
		name = firstName + " " + lastName;
		id = person.id.current;
	}
	var test = [ email, phone, fax];

	var filtered = test.filter((x) => x !== undefined);

	if (filtered.length <= 1) {
		console.log(filtered, name);
		shown = true;
	}
	return (
		<>
			<Card className={noShadow ? "w-100 border my-1" : "w-100 border my-1 hover-shadow"}>
				<CardBody className='h-100 w-100 py-0'>
					<ListGroup flush={true} className='ps-0 py-0'>
						<div className='list-group-flush'>
							<ListGroupItem className='px-0'>
								<CardTitle tag={"h5"} className='mb-0 d-flex'>
									<span>{title}</span>
									{!shown && (
										<span
											role='button'
											data-mdb-toggle='collapse'
											href={"#" + id}
											aria-expanded='false'
											aria-controls={id}
											className='ms-auto my-auto float-right material-icons border rounded-pill caret'>
											expand_more
										</span>
									)}
								</CardTitle>
							</ListGroupItem>

							{name && name !== title && (
								<ListGroupItem className='text-muted ps-0 py-1'>
									<i style={{ verticalAlign: "middle", fontSize: "inherit" }} className=' material-icons text-center'>
										person
									</i>
									{name}
								</ListGroupItem>
							)}
						</div>
						<div className={shown ? "collapse show" : "collapse"} id={id} style={{ borderLeft: "none", borderRight: "none" }}>
							{phone && (
								<ListGroupItem className='text-muted ps-0 py-1'>
									<i style={{ verticalAlign: "middle", fontSize: "inherit" }} className=' material-icons text-center'>
										phone
									</i>
									{phone}
								</ListGroupItem>
							)}

							{email && (
								<ListGroupItem className=' text-muted ps-0 py-1'>
									<i style={{ verticalAlign: "middle", fontSize: "inherit" }} className=' material-icons  text-center'>
										mail
									</i>
									{email}
								</ListGroupItem>
							)}
							{fax && (
								<ListGroupItem className=' text-muted ps-0 py-1'>
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
};

const ContactSideBar = ({ people, members }) => {
	return (
		<>
			<h2 style={{ textAlign: "center" }}>Contact Information</h2>
			{people &&
				people.map((person) => {
					return <ContactCardSideBar key={person.id.current} person={person}></ContactCardSideBar>;
				})}
			{members && members.length > 0 && <ContactCardSideBar key={members._key} members={members}></ContactCardSideBar>}
		</>
	);
};

export { ContactCardSideBar, ContactCardProfile, ContactCardTree, ContactSideBar };
