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
						var tempName = temp.name.substr(0, temp.name.indexOf(" "));
						var id = "#" + tempName;
						const level = "tree-child mx-0 level-" + temp.level;
						return (
							<Col lg={size} className={level}>
								<div
									type='button'
									data-mdb-toggle='collapse'
									data-mdb-target={id}
									aria-expanded='true'
									aria-controls='collapseExample'
									className=''>
									<ContactInformation type='2' borderColor={border} person={temp}></ContactInformation>
								</div>
								<div id={tempName} className="collapse show">{handleChildren(temp, border)}</div>
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
				<Col lg={12} className='tree-child w-100'>
					<div
						type='button'
						data-mdb-toggle='collapse'
						data-mdb-target='#tree-root'
						aria-expanded='false'
						aria-controls='collapseExample'
						className='w-50 mx-auto'>
						<ContactInformation type='2' borderColor={"border-primary"} person={organizationChart.Executive[0]} />
					</div>

					<div id='tree-root' className="collapse show">{handleChildren(organizationChart.Executive[0], "border-primary")}</div>
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
