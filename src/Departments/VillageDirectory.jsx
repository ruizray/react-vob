import React, { useEffect, useState } from "react";
import sanityClient from "./../client";
const VillageDirectory = (props) => {
	const [employees, setEmployees] = useState(null);
	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "employee" && department!= "Commission" ]| order(order asc){
					"name" : firstName + " "+ lastName,
					department,
					phone,
					title,
					email,
					id,
					_rev
				  }`
			)
			.then((data) => {
				console.log(data);
				var sorted = {};
				data.forEach((element) => {
					if (sorted[element.department]) {
						sorted[element.department].employees.push(element);
					} else {
						sorted[element.department] = {};
						sorted[element.department].employees = [];
						sorted[element.department].id = element._rev;
						sorted[element.department].employees.push(element);
					}
				});
				console.log(sorted);
				setEmployees(sorted);
			})
			.catch(console.error);
	}, []);

	return (
		<>
			<ul className='nav nav-tabs nav-fill mb-3' id='ex1' role='tablist'>
				<li className='nav-item' role='presentation'>
					<a
						className='nav-link active'
						id='ex1-tab-1'
						data-mdb-toggle='tab'
						href='#ex1-tabs-1'
						role='tab'
						aria-controls='ex1-tabs-1'
						aria-selected='true'>
						Executive
					</a>
				</li>
				<li className='nav-item' role='presentation'>
					<a
						className='nav-link'
						id='ex1-tab-2'
						data-mdb-toggle='tab'
						href='#ex1-tabs-2'
						role='tab'
						aria-controls='ex1-tabs-2'
						aria-selected='false'>
						Police
					</a>
				</li>
				<li className='nav-item' role='presentation'>
					<a
						className='nav-link'
						id='ex1-tab-3'
						data-mdb-toggle='tab'
						href='#ex1-tabs-3'
						role='tab'
						aria-controls='ex1-tabs-3'
						aria-selected='false'>
						Fire
					</a>
				</li>
				<li className='nav-item' role='presentation'>
					<a
						className='nav-link'
						id='ex1-tab-4'
						data-mdb-toggle='tab'
						href='#ex1-tabs-4'
						role='tab'
						aria-controls='ex1-tabs-4'
						aria-selected='false'>
						Public Services
					</a>
				</li>
				<li className='nav-item' role='presentation'>
					<a
						className='nav-link'
						id='ex1-tab-5'
						data-mdb-toggle='tab'
						href='#ex1-tabs-5'
						role='tab'
						aria-controls='ex1-tabs-5'
						aria-selected='false'>
						Finance
					</a>
				</li>
				<li className='nav-item' role='presentation'>
					<a
						className='nav-link'
						id='ex1-tab-6'
						data-mdb-toggle='tab'
						href='#ex1-tabs-6'
						role='tab'
						aria-controls='ex1-tabs-6'
						aria-selected='false'>
						Human Resources
					</a>
				</li>
				<li className='nav-item' role='presentation'>
					<a
						className='nav-link'
						id='ex1-tab-7'
						data-mdb-toggle='tab'
						href='#ex1-tabs-7'
						role='tab'
						aria-controls='ex1-tabs-7'
						aria-selected='false'>
						IT Department
					</a>
				</li>
				<li className='nav-item' role='presentation'>
					<a
						className='nav-link'
						id='ex1-tab-8'
						data-mdb-toggle='tab'
						href='#ex1-tabs-8'
						role='tab'
						aria-controls='ex1-tabs-8'
						aria-selected='false'>
						Utilities
					</a>
				</li>
				<li className='nav-item' role='presentation'>
					<a
						className='nav-link'
						id='ex1-tab-9'
						data-mdb-toggle='tab'
						href='#ex1-tabs-9'
						role='tab'
						aria-controls='ex1-tabs-9'
						aria-selected='false'>
						Other
					</a>
				</li>
			</ul>

			<div className='tab-content' id='ex1-content'>
				<div className='tab-pane fade show active' id='ex1-tabs-1' role='tabpanel' aria-labelledby='ex1-tab-1'>
					<div className='table-responsive'>
						<table className='table table-striped'>
							<thead>
								<tr style={{ fontWeight: "700" }}>
									<th scope='col'>Title</th>
									<th scope='col'>Contact</th>
									<th scope='col'>Phone</th>
									<th scope='col'>Email</th>
								</tr>
							</thead>
							<tbody style={{ verticalAlign: "middle" }}>
								{employees &&
									employees["Executive"].employees.map((employee) => (
										<TableRow key={employee.id.current} employee={employee}></TableRow>
									))}
							</tbody>
						</table>
					</div>
				</div>
				<div className='tab-pane fade' id='ex1-tabs-2' role='tabpanel' aria-labelledby='ex1-tab-2'>
					<div className='table-responsive '>
						<table className='table table-striped'>
							<thead>
								<tr style={{ fontWeight: "700" }}>
									<th scope='col'>Title</th>
									<th scope='col'>Contact</th>
									<th scope='col'>Phone</th>
									<th scope='col'>Email</th>
								</tr>
							</thead>
							<tbody style={{ verticalAlign: "middle" }}>
								{employees &&
									employees["Police"].employees.map((employee) => (
										<TableRow key={employee.id.current} employee={employee}></TableRow>
									))}
							</tbody>
						</table>
					</div>
				</div>
				<div className='tab-pane fade' id='ex1-tabs-3' role='tabpanel' aria-labelledby='ex1-tab-3'>
					<div className='table-responsive'>
						<table className='table table-striped'>
							<thead>
								<tr style={{ fontWeight: "700" }}>
									<th scope='col'>Title</th>
									<th scope='col'>Contact</th>
									<th scope='col'>Phone</th>
									<th scope='col'>Email</th>
								</tr>
							</thead>
							<tbody style={{ verticalAlign: "middle" }}>
								{employees &&
									employees["Fire"].employees.map((employee) => <TableRow key={employee.id.current} employee={employee}></TableRow>)}
							</tbody>
						</table>
					</div>
				</div>
				<div className='tab-pane fade' id='ex1-tabs-4' role='tabpanel' aria-labelledby='ex1-tab-4'>
					<div className='table-responsive'>
						<table className='table table-striped'>
							<thead>
								<tr style={{ fontWeight: "700" }}>
									<th scope='col'>Title</th>
									<th scope='col'>Contact</th>
									<th scope='col'>Phone</th>
									<th scope='col'>Email</th>
								</tr>
							</thead>
							<tbody style={{ verticalAlign: "middle" }}>
								{employees &&
									employees["Public Services"].employees.map((employee) => (
										<TableRow key={employee.id.current} employee={employee}></TableRow>
									))}
							</tbody>
						</table>
					</div>
				</div>
				<div className='tab-pane fade' id='ex1-tabs-5' role='tabpanel' aria-labelledby='ex1-tab-5'>
					<div className='table-responsive'>
						<table className='table table-striped'>
							<thead>
								<tr style={{ fontWeight: "700" }}>
									<th scope='col'>Title</th>
									<th scope='col'>Contact</th>
									<th scope='col'>Phone</th>
									<th scope='col'>Email</th>
								</tr>
							</thead>
							<tbody style={{ verticalAlign: "middle" }}>
								{employees &&
									employees["Finance"].employees.map((employee) => (
										<TableRow key={employee.id.current} employee={employee}></TableRow>
									))}
							</tbody>
						</table>
					</div>
				</div>
				<div className='tab-pane fade' id='ex1-tabs-6' role='tabpanel' aria-labelledby='ex1-tab-6'>
					Data Not Imported
				</div>
				<div className='tab-pane fade' id='ex1-tabs-7' role='tabpanel' aria-labelledby='ex1-tab-7'>
					Data Not Imported
				</div>
			</div>
		</>
	);
};

export default VillageDirectory;

const TableRow = ({ employee }) => {
	return (
		<tr>
			{employee.title && <th scope='row'>{employee.title}</th>}
			{employee.name && <td className='text-truncate'>{employee.name}</td>}
			{employee.phone ? <td style={{ whiteSpace: "nowrap" }}>{employee.phone}</td> : <td style={{ whiteSpace: "nowrap" }}> </td>}
			{employee.email ? <td style={{ whiteSpace: "nowrap" }}>{employee.email}</td> : <td style={{ whiteSpace: "nowrap" }}> </td>}
		</tr>
	);
};
