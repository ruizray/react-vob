import React from "react";

import { Row, Col } from "reactstrap";
import ContactInformation from "../components/ContactInformation";
import { organizationChart } from "../scripts/DepartmentInfo";

const OrgChart = () => {
	console.log(organizationChart);

	const handleChildren = (child, border) => {
		console.log(border);

		if (child.children) {
			const childrenCount = child.children.length;
			const size = 12 / childrenCount;
			return (
				<Row className='tree-root   text-center mx-0 w-100'>
					{child.children.map((temp) => {
						console.log(temp);
						const level = "tree-child mx-0 level-"+temp.level
						return (
							<Col lg={size} className={level}>
								<ContactInformation type='2' borderColor={border} person={temp}></ContactInformation>
								{handleChildren(temp, border)}
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
			<Row className='tree-root  w-100'>
				<Col lg={12} className='tree-child '>
					<div className='w-50 mx-auto'>
						<ContactInformation type='2' borderColor={"border-primary"} person={organizationChart.Executive[0]} />
					</div>

					{handleChildren(organizationChart.Executive[0], "border-primary")}
				</Col>
			</Row>
			<Row className='tree-root  w-100'>
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
					{handleChildren(organizationChart.Fire[0], "border-danger")}
				</Col>
			</Row>
		</>
	);
};

export default OrgChart;
