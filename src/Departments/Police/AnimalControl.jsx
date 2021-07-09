import React from "react";
import { Row, Col, Card, CardBody, CardFooter, CardTitle, CardImg } from "reactstrap";
import ContactInformation from "../../components/ContactInformation";
import { villageDirectory } from "../../scripts/DepartmentInfo";
const AnimalControl = () => {
	const { AnimalControl, AnimalControlSupervisor } = villageDirectory.Police;
	return (
		<>
			<Row>
				<Col></Col>
				<Col md={12} lg={12} xl={6}>
					<CardBody className='flex-column d-flex p-4'>
						<i className='material-icons icon-lg '>announcement</i>
						<h2 className='display-6'>Misson Statement</h2>
						<p>
							To work in and with our community to provide leadership in the humane treatment of all animals, to address the causes of
							suffering, to encourage people to take responsibility for their animal companions and to provide care for animals who are
							neglected, abused, exploited stray or homeless.
						</p>
					</CardBody>

					<CardBody className='flex-column d-flex p-4'>
						<i className='material-icons icon-lg '>airport_shuttle</i>
						<h2 className='display-6'>Wildlife Removal</h2>
						<p>
							Occasionally residents encounter skunks, possums, and other small wildlife who have made a home under porches and back yard
							decks. Bolingbrook Animal Control is available to assist with traps and advice on how to deter these critters from remaining.
							We can be reached during regular business hours at (630) 226-8689 or (630) 226-8500. Nights and weekends, please call (630)
							226-8660. In addition, the Village of Bolingbrook is providing a list of licensed private professionals in the area who can
							be hired to assist with wildlife problems.
						</p>
					</CardBody>

					<Card className='border card-raised ripple-primary mb-3 w-50 m-auto text-center justify-content-center'>
						<CardBody className='flex-column d-flex p-4'>
							<p>
								If a resident would like to trap the animal themselves, they must first obtain a permit from the Illinois Department of
								Natural Resources.
							</p>
							<button
								href='#'
								style={{ width: "fit-content" }}
								color='primary'
								className='btn btn-primary stretched-link align-self-center '>
								Nusicance Wildlife Control Permit
							</button>
						</CardBody>
					</Card>

					<CardBody className='flex-column d-flex p-4'>
						<i className='material-icons icon-lg '>search</i>
						<h2 className='display-6'>Missing Pet</h2>
						<p>
							When your pet disappears, move quickly, before it has time to go far; 90% of lost dogs and cats are found within two miles of
							where they were lost. Mobilize help - family, neighbors, and friends and assign tasks to everyone. Have some one call
							Bolingbrook Animal Control at 630-226-8500. Walk and drive through the neighborhood calling your pets. Have two people in the
							car when you are searching, so one can drive while the other looks. Be cautious when calling around busy intersections - your
							pet may try to cross the street to get to you.
						</p>
						<ul>
							<li>If your pet is friendly with strangers, check parks and schools.</li>
							<li>If your pet is shy, frightened, or injured, check places that offer seclusion.</li>
							<li>Leave the gate to your yard open in case your dog returns home on its own.</li>
						</ul>
					</CardBody>
					<CardBody className='flex-column d-flex p-4'>
						<i className='material-icons icon-lg '>school</i>
						<h2 className='display-6'>Local Wildlife</h2>
						<p>
							Many wild animals have adapted well to living in our neighborhoods. By remembering some key factors about living with
							wildlife, we can learn how to avoid potential problems and enjoy the peace and serenity that these animals can bring to our
							backyards and communities. The information below in the links provide problem-solving advice and ways you can make your yard
							and home less attractive to wild animals.
						</p>

						<Row  className=' d-flex justify-content-center align-items-center d-flex align-items-stretch'>
							<Col md={4}>
								<Card className='hover-shadow mx-1 text-center border mb-3'>
									<CardImg
										top={true}
										src='https://www.bolingbrook.com/vertical/Sites/%7B55EB27CA-CA9F-40A5-A0EF-1E4EEF52F39E%7D/uploads/Coyotes(1).jpg'></CardImg>
									<CardBody>
										<CardTitle
											href='https://www.bolingbrook.com/vertical/Sites/%7B55EB27CA-CA9F-40A5-A0EF-1E4EEF52F39E%7D/uploads/Coyotes(2).pdf'
											className='stretched-link '
											tag={"a"}>
											Coyotes
										</CardTitle>
									</CardBody>
								</Card>
							</Col>
							<Col md={4}>
								<Card className='hover-shadow mx-1 text-center border mb-3'>
									<CardImg
										top={true}
										src='https://www.bolingbrook.com/vertical/Sites/%7B55EB27CA-CA9F-40A5-A0EF-1E4EEF52F39E%7D/uploads/Raccoons(1).jpg'></CardImg>
									<CardBody>
										<CardTitle
											href='https://www.bolingbrook.com/vertical/Sites/%7B55EB27CA-CA9F-40A5-A0EF-1E4EEF52F39E%7D/uploads/Raccoons(2).pdf'
											className='stretched-link '
											tag={"a"}>
											Racoons
										</CardTitle>
									</CardBody>
								</Card>
							</Col>
						</Row>

						<Row  className=' d-flex justify-content-center align-items-center d-flex align-items-stretch '>
							<Col md={4}>
								<Card className='hover-shadow mx-1 text-center border mb-3'>
									<CardImg
										top={true}
										src='https://www.bolingbrook.com/vertical/Sites/%7B55EB27CA-CA9F-40A5-A0EF-1E4EEF52F39E%7D/uploads/Squirrels(1).jpg'></CardImg>
									<CardBody>
										<CardTitle
											href='https://www.bolingbrook.com/vertical/Sites/%7B55EB27CA-CA9F-40A5-A0EF-1E4EEF52F39E%7D/uploads/Squirrels(2).pdf'
											className='stretched-link '
											tag={"a"}>
											Squirrels
										</CardTitle>
									</CardBody>
								</Card>
							</Col>
							<Col md={4}>
								<Card className='hover-shadow mx-1 text-center border mb-3'>
									<CardImg
										top={true}
										src='https://www.bolingbrook.com/vertical/Sites/%7B55EB27CA-CA9F-40A5-A0EF-1E4EEF52F39E%7D/uploads/Striped_Skunk(1).jpg'></CardImg>
									<CardBody>
										<CardTitle
											href='https://www.bolingbrook.com/vertical/Sites/%7B55EB27CA-CA9F-40A5-A0EF-1E4EEF52F39E%7D/uploads/Striped_Skunk(2).pdf'
											className='stretched-link '
											tag={"a"}>
											Skunks
										</CardTitle>
									</CardBody>
								</Card>
							</Col>
                            <Col md={4}>
								<Card className='hover-shadow mx-1 text-center border mb-3'>
									<CardImg
										top={true}
										src='https://www.bolingbrook.com/vertical/Sites/%7B55EB27CA-CA9F-40A5-A0EF-1E4EEF52F39E%7D/uploads/Opossums.jpg'></CardImg>
									<CardBody>
										<CardTitle
											href='https://www.bolingbrook.com/vertical/Sites/%7B55EB27CA-CA9F-40A5-A0EF-1E4EEF52F39E%7D/uploads/Opossum(2).pdf'
											className='stretched-link '
											tag={"a"}>
											Opposums
										</CardTitle>
									</CardBody>
								</Card>
							</Col>
						</Row>
					</CardBody>
				</Col>
				<Col>
					<ContactInformation type={1} person={AnimalControl} />
					<ContactInformation type={1} person={AnimalControlSupervisor} />
				</Col>
			</Row>
		</>
	);
};

export default AnimalControl;
