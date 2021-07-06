import React from "react";
import { useEffect } from "react";
import { Container, Row, Col, Card, CardBody, Button, CardTitle } from "reactstrap";
const OrgChart = () => {
	return (
		<>
			<Row>
				<div class='tree'>
					<ul>
						<li>
							<a href='#'>Parent</a>
							<ul>
								<li>
									<a href='#'>Child</a>
									<ul>
										<li>
											<a href='#'>Grand Child</a>
										</li>
									</ul>
								</li>
								<li>
									<a href='#'>Child</a>
									<ul>
										<li>
											<a href='#'>Grand Child</a>
										</li>
										<li>
											<a href='#'>Grand Child</a>
											<ul>
												<li>
													<a href='#'>Great Grand Child</a>
												</li>
												<li>
													<a href='#'>Great Grand Child</a>
												</li>
												<li>
													<a href='#'>Great Grand Child</a>
												</li>
											</ul>
										</li>
										<li>
											<a href='#'>Grand Child</a>
										</li>
									</ul>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</Row>

			<Row className='tree-root d-flex justify-content-center align-items-center d-flex align-items-stretch'>
				<Col className='tree-child '>
					<Card className='w-50 mx-auto'>
						<CardBody>Mayor</CardBody>
					</Card>
					<Row className='tree-root'>
						<Col className='tree-child '>
							<Row className='tree-root d-flex justify-content-center align-items-center d-flex align-items-stretch mx-2'>
								<Col>
									<Card className=''>
										<CardBody>Co-Administrator</CardBody>
									</Card>
								</Col>
							</Row>

							<Row className='tree-root d-flex justify-content-center align-items-center d-flex align-items-stretch '>
								<Col className='tree-child'>
									<Card className=''>
										<CardBody></CardBody>
									</Card>
								</Col>
								<Col className='tree-child'>
									<Card className=''>
										<CardBody>Level 3</CardBody>
									</Card>
								</Col>
							</Row>
						</Col>
						<Col className='tree-child '>
							<Row className='tree-root d-flex justify-content-center align-items-center d-flex align-items-stretch mx-2'>
								<Col>
									<Card className=''>
										<CardBody>Co-Administrator</CardBody>
									</Card>
								</Col>
							</Row>

							<Row className='tree-root d-flex justify-content-center align-items-center d-flex align-items-stretch'>
								<Col className='tree-child'>
									<Card className=''>
										<CardBody></CardBody>
									</Card>
								</Col>
								<Col className='tree-child'>
									<Card className=''>
										<CardBody>Level 3</CardBody>
									</Card>
								</Col>
							</Row>
						</Col>
						<Col className='tree-child '>
							<Card className='m-2'>
								<CardBody>Clerk</CardBody>
							</Card>
						</Col>
					</Row>
				</Col>
			</Row>
			{/* <div class='container'>
				<h1 class='level-1 rectangle'>CEO</h1>
				<ol class='level-2-wrapper'>
					<li>
						<h2 class='level-2 rectangle'>Director A</h2>
						<ol class='level-3-wrapper'>
							<li>
								<h3 class='level-3 rectangle'>Manager A</h3>
								<ol class='level-4-wrapper'>
									<li>
										<h4 class='level-4 rectangle'>Person A</h4>
									</li>
									<li>
										<h4 class='level-4 rectangle'>Person B</h4>
									</li>
									<li>
										<h4 class='level-4 rectangle'>Person C</h4>
									</li>
									<li>
										<h4 class='level-4 rectangle'>Person D</h4>
									</li>
								</ol>
							</li>
							<li>
								<h3 class='level-3 rectangle'>Manager B</h3>
								<ol class='level-4-wrapper'>
									<li>
										<h4 class='level-4 rectangle'>Person A</h4>
									</li>
									<li>
										<h4 class='level-4 rectangle'>Person B</h4>
									</li>
									<li>
										<h4 class='level-4 rectangle'>Person C</h4>
									</li>
									<li>
										<h4 class='level-4 rectangle'>Person D</h4>
									</li>
								</ol>
							</li>
						</ol>
					</li>
					<li>
						<h2 class='level-2 rectangle'>Director B</h2>
						<ol class='level-3-wrapper'>
							<li>
								<h3 class='level-3 rectangle'>Manager C</h3>
								<ol class='level-4-wrapper'>
									<li>
										<h4 class='level-4 rectangle'>Person A</h4>
									</li>
									<li>
										<h4 class='level-4 rectangle'>Person B</h4>
									</li>
									<li>
										<h4 class='level-4 rectangle'>Person C</h4>
									</li>
									<li>
										<h4 class='level-4 rectangle'>Person D</h4>
									</li>
								</ol>
							</li>
							<li>
								<h3 class='level-3 rectangle'>Manager D</h3>
								<ol class='level-4-wrapper'>
									<li>
										<h4 class='level-4 rectangle'>Person A</h4>
									</li>
									<li>
										<h4 class='level-4 rectangle'>Person B</h4>
									</li>
									<li>
										<h4 class='level-4 rectangle'>Person C</h4>
									</li>
									<li>
										<h4 class='level-4 rectangle'>Person D</h4>
									</li>
								</ol>
							</li>
						</ol>
					</li>
				</ol>
			</div>

			<footer class='page-footer'>
				<span>made by </span>
				<a href='https://georgemartsoukos.com/' target='_blank'>
					<img width='24' height='24' src='https://assets.codepen.io/162656/george-martsoukos-small-logo.svg' alt='George Martsoukos logo' />
				</a>
			</footer> */}
		</>
	);
};

export default OrgChart;
