import React from "react";
import { Row, Col } from "reactstrap";
import { ContactCardTree } from "../components/ContactInformation";
import { organizationChart, villageDirectory } from "../scripts/DepartmentInfo";

const OrgChart = () => {
	const handleChildren = (child, border) => {
		if (child.children) {
			var childrenCount = child.children.length;
			const size = 12 / childrenCount;
			return (
				<Row className='tree-root text-center mx-0 w-100'>
					{child.children.map((temp) => {
						if (temp.children) {
							var childrenCount2 = temp.children.length;
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
									<ContactCardTree type='2' borderColor={border} person={temp} childrenCount={childrenCount2}></ContactCardTree>
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
			<div className='treestart '>{handleChildren(organizationChart[0], "border-primary")}</div>

			<div className='treestart '>{handleChildren(organizationChart[1], "border-danger")}</div>
			<ol className='organizational-chart'>
				<li>
					<div>
						<ContactCardTree type='2' borderColor={"primary"} person={villageDirectory.Executive.Mayor} childrenCount={2}></ContactCardTree>
					</div>

					<ol>
						<li>
							<div>
								<ContactCardTree
									type='2'
									borderColor={"primary"}
									person={villageDirectory.Executive.Clerk}
									childrenCount={2}></ContactCardTree>
							</div>
							<ol>
								<li>
									<div>
										<ContactCardTree
											type='2'
											borderColor={"primary"}
											person={villageDirectory.Executive.DeputyClerk}
											childrenCount={2}></ContactCardTree>
									</div>
									<ol>
										<li>
											<div>
												<ContactCardTree
													type='2'
													borderColor={"primary"}
													person={villageDirectory.Executive.AsstDeputyClerk}
													childrenCount={2}></ContactCardTree>
											</div>
										</li>
									</ol>
								</li>
							</ol>
						</li>
						<li>
							<div>
								<ContactCardTree
									type='2'
									borderColor={"primary"}
									person={villageDirectory.Executive.CoAdministrator1}
									childrenCount={2}></ContactCardTree>
							</div>
							<ol>
								<li>
									<div>
										<h3>Tertiary</h3>
									</div>
								</li>
								<li>
									<div>
										<h3>Tertiary</h3>
									</div>
								</li>
							</ol>
						</li>
						<li>
							<div>
								<ContactCardTree
									type='2'
									borderColor={"primary"}
									person={villageDirectory.Executive.CoAdministrator2}
									childrenCount={2}></ContactCardTree>
							</div>
							
						</li>
						<li>
							<div>
								<ContactCardTree
									type='2'
									borderColor={"primary"}
									person={villageDirectory.Executive.FOIA}
									childrenCount={2}></ContactCardTree>
							</div>
							<ol>
								<li>
									<div>
										<ContactCardTree
											type='2'
											borderColor={"primary"}
											person={villageDirectory.Executive.AsstFOIA}
											childrenCount={2}></ContactCardTree>
									</div>
								</li>
							</ol>
						</li>
					</ol>
				</li>
			</ol>
		</>
	);
};

export default OrgChart;
