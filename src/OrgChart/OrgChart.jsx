import React from "react";

import { Row, Col } from "reactstrap";
import ContactInformation from "../components/ContactInformation";
import { organizationChart } from "../scripts/DepartmentInfo";

const OrgChart = () => {
	console.log(organizationChart);

	const handleChildren = (child, border) => {
		console.log(border);

		if (child.children) {
			var childrenCount = child.children.length;
			const size = 12 / childrenCount;
			return (
				<Row className='tree-root   text-center mx-0 w-100'>
					{child.children.map((temp) => {
						if(temp.children){
							var childrenCount2 = temp.children.length
							console.log(temp, temp.children.length);
						}else{
							
						}
						
						var tempName = temp.id;
						var id = "#" + tempName;
						const level = "tree-child mx-0 level-" + temp.level;
						return (
							<Col lg={size} className={level}>
								<div
									type='button'
									data-mdb-toggle='collapse'
									data-mdb-target={id}
									aria-expanded='true'
									aria-controls={tempName}
									className=''>
									<ContactInformation type='2' borderColor={border} person={temp} childrenCount={childrenCount2}></ContactInformation>
									
								</div>
								<div id={tempName} className='collapse show'>
									{handleChildren(temp, border)}
								</div>
							</Col>
						);
					})}
				</Row>
			);
		} else {
			return <></>;
		}
	};
	console.log(organizationChart);
	return (
		<>
		<div className="treestart ">
			{handleChildren(organizationChart[0], "border-primary")}
		</div>
			
		<div className="treestart ">
			{handleChildren(organizationChart[1], "border-danger")}
			</div>
		</>
	);
};

export default OrgChart;
