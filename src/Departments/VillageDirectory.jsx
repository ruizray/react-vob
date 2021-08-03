import React from "react";
import { Row, Col } from "reactstrap";
import { ContactCardSideBar } from "../components/ContactInformation";
import { villageDirectory } from "../scripts/DepartmentInfo";

const VillageDirectory = (props) => {
	const { Mayor, CoAdministrator1, CoAdministrator2, Clerk, Attorney, FOIA } = villageDirectory.Executive;
	const Executive = [Mayor, CoAdministrator1, CoAdministrator2, Clerk, Attorney, FOIA];

	const { PoliceAdministration, PoliceChief, AfterHours, AnimalControl, CodeEnforcement, Evidence, PoliceRecords, Investigations } = villageDirectory.Police;
	const Police = [PoliceAdministration, PoliceChief, AfterHours, AnimalControl, CodeEnforcement, Evidence, PoliceRecords, Investigations];

	const { FireAdministration, FireChief, FireMarshal } = villageDirectory.Fire;
	const Fire = [FireAdministration, FireChief, FireMarshal];

	const { PublicServicesAdministration, DirectorOfPublicWorks, BuildingComissioner, PlanningAndZoningAdministrator, VillageEngineer } =
		villageDirectory.PublicServices;
	const publicServices = [PublicServicesAdministration, DirectorOfPublicWorks, BuildingComissioner, PlanningAndZoningAdministrator, VillageEngineer];

    const {Director, Administration} = villageDirectory.Finance
    const Finance = [Director, Administration]
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
								{Executive && Executive.map((employee) => <TableRow employee={employee}></TableRow>)}
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
								{Police && Police.map((employee) => <TableRow employee={employee}></TableRow>)}
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
								{Fire && Fire.map((employee) => <TableRow employee={employee}></TableRow>)}
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
								{publicServices && publicServices.map((employee) => <TableRow employee={employee}></TableRow>)}
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
								{Finance && Finance.map((employee) => <TableRow employee={employee}></TableRow>)}
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
			{employee.phone && <td style={{ whiteSpace: "nowrap" }}>{employee.phone}</td>}
			{employee.email ? <td style={{ whiteSpace: "nowrap" }}>{employee.email}</td> : <td style={{ whiteSpace: "nowrap" }}> </td>}
		
		</tr>
	);
};
