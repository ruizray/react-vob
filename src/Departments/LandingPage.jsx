import React, { useRef, createRef, useState, use, useEffect } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import DepartmentCard from "./DepartmentCard";
import fs from "fs";

const LandingPage = () => {
	const header = `
	<head>
	<meta charset="utf-8" />
	<link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
	<link href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.6.0/mdb.min.css" rel="stylesheet" />
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.6.0/mdb.min.js"></script>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="theme-color" content="#000000" />
	<meta name="description" content="Web site created using create-react-app" />
	<link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
	<link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
	<title>React App</title>
	</head>`;
	const page = createRef();
	useEffect(() => {
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
		let stack = [];
		let tabs = 1;
		var total = "";
		const regex2 = /(<.*?>)|([^<]*)/gm;
		const array = str.split(regex2);

		var filtered = array.filter((el) => {
			if (el !== undefined && el !== "") {
				return true;
			}
			return false;
		});

		filtered.forEach((str, index) => {
			str = str.trim();

			if (str[1] === "/") {
				
				tabs--;
				const temp = "\t".repeat(tabs) + str + "\n";
				total = total + temp;
			} else {
				let tag1 = str.indexOf("<") + 1;
				let tag2 = str.indexOf(" ");
				if (tag1 < 0 || tag2 < 0) {
					const temp = "\t".repeat(tabs) + str + "\n";
					total = total + temp;
				} else {
					const temp = "\t".repeat(tabs) + str + "\n";
					tabs++;
					total = total + temp;
				}
			}
		});

		console.log(total);
		setHTML(total);
	};

	const input = toggled ? "none" : "content";
	console.log(input);
	return (
		<>
			<div ref={page}>
				<Container className='bg-dark' fluid={true}>
					<Row className=' d-flex justify-content-center align-items-center d-flex align-items-stretch bg-dark'>
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
					<Row className=' d-flex justify-content-center align-items-center d-flex align-items-stretch bg-dark'>
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
			<Button className='m-3' onClick={() => handleToggle()}>
				Generate HTML
			</Button>
			{toggled ? (
				<p style={{ whiteSpace: "break-spaces" }}>
					{header}
					{`\n<div id="root">\n`}
					{HTML}
					{`</div>`}
				</p>
			) : (
				<p></p>
			)}
		</>
	);
};

export default LandingPage;
