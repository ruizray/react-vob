import React, {useState} from "react";
import { useLocation } from "react-router-dom";
import { Row, CardImg , Card, CardBody} from "reactstrap";

const ElectedOfficialProfile = (props) => {
	let location = useLocation;

    const [person, setPerson] = useState(props.location.props2.person)
    
    var {backgroundImage} = person.image;
    console.log(backgroundImage.indexOf("("))
    var space1 = backgroundImage.indexOf("(")
    var space2 = backgroundImage.indexOf(")")
    var temp = backgroundImage.substring(space1+1,space2)
	console.log(temp);
    const {image } = props.location.props2.person
	return (
		<>
			<Row className='gutters-sm'>
				<div className='col-md-4 mb-3'>
					<Card>
						<CardBody>

                     
							<div className='d-flex flex-column align-items-center text-center'>
							<CardImg src={temp}></CardImg>
                           

                             
								<div className='mt-3'>
									<p className='text-muted font-size-sm'>
										The Sialkot Clock Tower also known as Iqbal Square, is situated in Saddar Bazar, Sialkot Cantt, Pakistan. It
										acts like a giant pin, holding the crazy and bustling streets of the main city and the well--planned,
										relatively tranquil portions of the cantonment area together.s
									</p>
								</div>
							</div>
						   </CardBody>
					</Card>
					<div className='card mt-3'>
						<ul className='list-group list-group-flush'>
							<li className='list-group-item d-flex justify-content-between align-items-center flex-wrap'>
								<h6 className='mb-0'>Country</h6>
								<span className='text-secondary'>Pakistan</span>
							</li>

							<li className='list-group-item d-flex justify-content-between align-items-center flex-wrap'>
								<h6 className='mb-0'>Province</h6>
								<span className='text-secondary'>Punjab</span>
							</li>

							<li className='list-group-item d-flex justify-content-between align-items-center flex-wrap'>
								<h6 className='mb-0'>Division</h6>
								<span className='text-secondary'>Gujranwala</span>
							</li>
							<li className='list-group-item d-flex justify-content-between align-items-center flex-wrap'>
								<h6 className='mb-0'>District</h6>
								<span className='text-secondary'>Sialkot</span>
							</li>
						</ul>
					</div>
				</div>
				<div className='col-md-8'>
					<div className='card card-raised ripple-primary mb-3'>
						<div className='card-body flex-column d-flex p-4'>
							<i className='material-icons icon-lg text-primary'>date_range</i>
							<h2 className='display-6'>History</h2>
							<p>Has way too much history. Not too sure what to grab.</p>
						</div>
					</div>
				</div>
			</Row>
		</>
	);
};

export default ElectedOfficialProfile;
