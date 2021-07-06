import React from "react";

import { Row, Col } from "reactstrap";
import ContactInformation from "../components/ContactInformation";
import { villageDirectory, organizationChart } from "../scripts/DepartmentInfo";
import TreeRoot from "./../components/TreeRoot";
const OrgChart = () => {
	console.log(villageDirectory, organizationChart);
	const { Mayor, CoAdministrator1, CoAdministrator2, Clerk, FOIA, DeputyClerk, AsstDeputyClerk } = villageDirectory.Executive;

	const handleChildren = (child, border) => {
		console.log(border);
		if (child.children) {
			return (
				<Row className='tree-root d-flex justify-content-center align-items-center d-flex align-items-stretch level-3 '>
					{child.children.map((temp) => {
						console.log(temp);
						return (
							<Col lg={temp.width} className='tree-child mx-2'>
								<ContactInformation type='2' borderColor={border} person={temp}></ContactInformation>
								{handleChildren(temp,border)}
							</Col>
						);
					})}
				</Row>
			);
		} else {
			return <></>;
		}
	};

	

	return (
		<>
			<Row className='tree-root d-flex justify-content-center align-items-center d-flex align-items-stretch'>
				<Col className='tree-child '>
					<div className='w-50 mx-auto'>
						<ContactInformation type='2' person={organizationChart.Executive[0]} />
					</div>
					{/* <Row className='intermediate'>
						<Col className='tree-root'>
							<div className='w-50 mx-auto'>
								<ContactInformation type='2' person={organizationChart.Executive[0]} />
							</div>
						</Col>
						<Col className='tree-root'>
							<div className='w-50 mx-auto'>
								<ContactInformation type='2' person={organizationChart.Executive[0]} />
							</div>
						</Col>
					</Row> */}
					{handleChildren(organizationChart.Executive[0] , "border-primary")}
				</Col>
			</Row>
            <Row className='tree-root d-flex justify-content-center align-items-center d-flex align-items-stretch'>
				<Col className='tree-child '>
					<div className='w-50 mx-auto'>
						<ContactInformation type='2' person={organizationChart.Fire[0]} />
					</div>
					{/* <Row className='intermediate'>
						<Col className='tree-root'>
							<div className='w-50 mx-auto'>
								<ContactInformation type='2' person={organizationChart.Executive[0]} />
							</div>
						</Col>
						<Col className='tree-root'>
							<div className='w-50 mx-auto'>
								<ContactInformation type='2' person={organizationChart.Executive[0]} />
							</div>
						</Col>
					</Row> */}
					{handleChildren(organizationChart.Fire[0] , "border-danger")}
				</Col>
			</Row>
			
		</>
	);
};

export default OrgChart;
