import React, { useRef, createRef, useState, use, useEffect } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import DepartmentCard from "./DepartmentCard";
import fs from "fs";

const LandingPage = () => {
	const page = createRef();
	useEffect(() => {
		setHTML(page.current.innerHTML);
	
		addNewlines(page.current.innerHTML);
	}, [page]);

	const handleToggle = () => {
		console.log(toggled);
		const temp = !toggled;
		setToggled(temp);
	};
	const [HTML, setHTML] = useState();
	const [toggled, setToggled] = useState(true);

	const addNewlines = (str) => {
		var mySubString = str.substring(str.indexOf("<") + 1, str.IndexOf(">"));

		console.log(mySubString);
		var result = "";
		while (str.length > 0) {
			result += str.substring(0, 200) + "\n";
			str = str.substring(200);
		}
		return result;
	};

	const input = toggled ? "none" : "content";
	console.log(input);
	return (
		<>
			<div ref={page}>
				<Container className='bg-dark' fluid={true}>
					<Row className='h-100 d-flex justify-content-center align-items-center d-flex align-items-stretch bg-dark'>
						<Col className='mb-4' md={3}>
							<DepartmentCard title='Fire Department' icon='local_fire_department' link='https://www.bolingbrook.com/fire' />
						</Col>
						<Col className='mb-4' md={3}>
							<DepartmentCard title='Police Department' icon='local_police' link='https://www.bolingbrook.com/police' />
						</Col>
						<Col className='mb-4' md={3}>
							<DepartmentCard title='Executive Department' icon='gavel' link='https://www.bolingbrook.com/executive' />
						</Col>
					</Row>
					<Row className='h-100 d-flex justify-content-center align-items-center d-flex align-items-stretch bg-dark'>
						<Col className='mb-4' md={3}>
							<DepartmentCard title='Finance Department' icon='payments' link='https://www.bolingbrook.com/finance' />
						</Col>
						<Col className='mb-4' md={3}>
							<DepartmentCard title='Human Resources' icon='perm_contact_calendar' link='https://www.bolingbrook.com/human_resources' />
						</Col>
						<Col className='mb-4' md={3}>
							<DepartmentCard title='Information Technology' icon='phonelink' link='https://www.bolingbrook.com/it_dept' />
						</Col>
						<Col className='mb-4' md={3}>
							<DepartmentCard title='Public Services' icon='construction' link='https://www.bolingbrook.com/public_services' />
						</Col>
					</Row>
				</Container>
			</div>
			<Button onClick={() => handleToggle()}></Button>
			{toggled ? <p>{HTML}</p> : <p></p>}
		</>
	);
};

export default LandingPage;
