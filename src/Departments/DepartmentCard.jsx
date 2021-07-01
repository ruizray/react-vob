import React from "react";
import { Card, CardBody, Button, CardTitle } from "reactstrap";

const DepartmentCard = (props) => {
	return (
		<Card className='card-raised h-100'>
			<i className='w-100 material-icons icon-lg bg-light text-center' style={{ fontSize: "8rem" }}>
				{props.icon}
			</i>
			<CardBody className='flex-column d-flex h-100 p-4'>
				<CardTitle tag={"h5"}>{props.title}</CardTitle>
				<div className='align-items-end d-flex h-100'>
					<Button href={props.link} color='primary' className='px-6 w-100' data-mdb-ripple-color='dark'>
						Visit
					</Button>
				</div>
			</CardBody>
		</Card>
	);
};

export default DepartmentCard;
