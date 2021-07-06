import React from "react";
import { Card, CardBody, Button, CardTitle } from "reactstrap";

const DepartmentCard = (props) => {
	return (
		<>
		<Card className='card-raised h-100 w-100 ripple'>
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

export default DepartmentCard;
