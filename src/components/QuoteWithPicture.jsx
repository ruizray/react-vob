import { React, useEffect } from "react";
import { Card, CardImg, Container, Row, Col, CardBody } from "reactstrap";
const QuoteWithPicture = () => {
	return (
		<>
			<Card className='pl-0 ml-0'>
				<CardBody className='h-100 w-100'>
					<Container className='ps-1 ml-0' fluid={true}>
						<Row className='d-flex justify-content-center align-items-center d-flex align-items-stretch'>
							<Col className='align-self-md-center' sm={6} lg={3}>
								<CardImg src='https://bolingbrookil.govoffice3.com/vertical/Sites/%7B55EB27CA-CA9F-40A5-A0EF-1E4EEF52F39E%7D/uploads/Mayor_Mary_2.jpg'></CardImg>
							</Col>
							<Col className='align-self-center '>
								<blockquote class='blockquote mb-0 mt-3'>
									<p>
										Welcome to the Bolingbrook Executive Department website. As a resident of Bolingbrook since 2003 and Mayor
										since August 1, 2020, I am honored and thrilled to be serving as the Mayor of the Village of Bolingbrook. I
										believe strongly in our motto, “A Place to Grow”...
									</p>

									<footer class='blockquote-footer'>
										Mary Alexander-Basta, <cite title='Mayor'>Mayor</cite>
									</footer>
									<div className='align-items-end d-flex h-100 w-100'>
										<button type='button' class='btn btn-primary ' data-mdb-toggle='modal' data-mdb-target='#exampleModal'>
											Read more
										</button>
									</div>
								</blockquote>
							</Col>
						</Row>
					</Container>
				</CardBody>
			</Card>

			<div class='card border-0 card-0'>
				<div class='card profile py-3 px-4'>
					<div class='text-center'>
					
						<img
							src='https://bolingbrookil.govoffice3.com/vertical/Sites/%7B55EB27CA-CA9F-40A5-A0EF-1E4EEF52F39E%7D/uploads/Mayor_Mary_2.jpg'
							class='img-fluid profile-pic'></img>
					</div>
					<h6 class='mb-0 mt-2'>Marielle Haag</h6> <small>Backend Developer</small>
				</div>{" "}
				<img class='img-fluid open-quotes' src='https://i.imgur.com/Hp91vdT.png' width='20' height='20'></img>
				<p class='content mb-0'>
					Welcome to the Bolingbrook Executive Department website. As a resident of Bolingbrook since 2003 and Mayor since August 1, 2020, I am
					honored and thrilled to be serving as the Mayor of the Village of Bolingbrook. I believe strongly in our motto, “A Place to Grow”
					<br />
				</p>{" "}
				<img class='img-fluid close-quotes ml-auto' src='https://i.imgur.com/iPcHyJK.png' width='20' height='20'></img>
				<button type='button' class='btn btn-primary ' data-mdb-toggle='modal' data-mdb-target='#exampleModal'>
					Read More
				</button>
			</div>

			<div class='modal fade' id='exampleModal' tabindex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>
				<div class='modal-dialog modal-xl'>
					<div class='modal-content'>
						<div class='modal-header'>
							<h5 class='modal-title' id='exampleModalLabel'>
								Message from the Mayor
							</h5>
							<button type='button' class='btn-close' data-mdb-dismiss='modal' aria-label='Close'></button>
						</div>
						<div class='modal-body'>
							<blockquote class='blockquote mb-0' style={{ display: "grid" }}>
								<p className='d-inline-block mb-0'>
									Welcome to the Bolingbrook Executive Department website. As a resident of Bolingbrook since 2003 and Mayor since
									August 1, 2020, I am honored and thrilled to be serving as the Mayor of the Village of Bolingbrook. I believe
									strongly in our motto, “A Place to Grow”
								</p>
								<p>
									Not only have I personally experienced this with my family in Bolingbrook, I have seen this motto be demonstrated
									by our residents, businesses, and community. The Executive Department exists to handle the day to day operations of
									the village, and my goal is to ensure that our staff follows that motto. The department continues to move forward
									by constantly collaborating with all other village departments, reviewing where we’ve been and where we’re going,
									and communicating with our residents. I believe in an open door policy. I want to have open lines of communication
									and welcome anyone who would like to meet with me to either call, email, or come in to the village office.
								</p>

								<footer class='blockquote-footer'>
									Mary Alexander-Basta, <cite title='Mayor'>Mayor</cite>
								</footer>
							</blockquote>
						</div>
						<div class='modal-footer'>
							<button type='button' class='btn btn-secondary' data-mdb-dismiss='modal'>
								Close
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default QuoteWithPicture;
