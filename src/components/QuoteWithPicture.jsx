import { React } from "react";
import { Card, CardImg, Container, Row, Col, CardBody } from "reactstrap";
import { villageDirectory } from "./../scripts/DepartmentInfo";
const QuoteWithPicture = (props) => {
	
	const personImage = props.personImage;
	if (personImage) {
		var { backgroundPositionY, backgroundImage, backgroundSize, backgroundPositionX } = props.personImage;
	}

	const { header, image, icon } = props;
	return (
		<>
			<CardBody className=' clamped'>
				<i className='material-icons icon-lg text-dark'>{icon}</i>
				<h1 className='display-6'>{header}</h1>
				<div className='testimonial'>
					{personImage && (
						<div className='avatar mx-auto mb-4'>
							<div
								className='avatar'
								style={{
									backgroundSize,
									backgroundPositionY,
									backgroundPositionX,
									backgroundImage,
								}}
							/>
						</div>
					)}
					

					{props.children}
				</div>
			</CardBody>

			{/* <div className='modal fade' id='exampleModal' tabIndex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>
					<div className='modal-dialog modal-xl'>
						<div className='modal-content'>
							<div className='modal-header'>
								<h5 className='modal-title' id='exampleModalLabel'>
									Message from the Mayor
								</h5>
								<button type='button' className='btn-close' data-mdb-dismiss='modal' aria-label='Close'></button>
							</div>
							<div className='modal-body'>
								<blockquote className='blockquote mb-0' style={{ display: "grid" }}>
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

									<footer className='blockquote-footer'>
										Mary Alexander-Basta, <cite title='Mayor'>Mayor</cite>
									</footer>
								</blockquote>
							</div>
							<div className='modal-footer'>
								<button type='button' className='btn btn-secondary' data-mdb-dismiss='modal'>
									Close
								</button>
							</div>
						</div>
					</div>
				</div> */}
		</>
	);
};

export default QuoteWithPicture;
