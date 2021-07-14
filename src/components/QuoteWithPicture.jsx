import { React } from "react";
import { CardBody } from "reactstrap";
const QuoteWithPicture = (props) => {
	const personImage = props.personImage;
	if (personImage) {
		var { backgroundPositionY, backgroundImage, backgroundSize, backgroundPositionX } = props.personImage;
	}

	const { header } = props;
	return (
		<>
			<CardBody className=' clamped'>
				{/* <i className='material-icons icon-lg text-dark'>{icon}</i> */}
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
		</>
	);
};

export default QuoteWithPicture;
