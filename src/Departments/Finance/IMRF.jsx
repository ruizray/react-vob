import React from "react";
import { ContentCard } from "../../components/ContentCard";
import { Col, Row } from "reactstrap";
import CallToAction from "./../../components/CallToAction";
const IMRF = (props) => {
	return (
		<>
			<Row className='gx-3'>
				<Col></Col>
				<Col id='fadeInTop' md={6}>
					<ContentCard header='Information' icon='Information'>
						<p>
							In 2019, the Illinois General Assembly passed Public Act 101-0504. The law requires IMRF to post certain employer cost and
							participation information on its website. IMRF will update these reports annually.
						</p>
                        <CallToAction buttonText='IMRF Website' buttonLink=''>
							<p>To visit the IMRF website and get more information, click below.</p>
						</CallToAction>
                        <CallToAction buttonText='Public Act 101-0504' buttonLink=''>
							<p>To read the act in its entirety, click below.</p>
						</CallToAction>
					</ContentCard>

					
				</Col>
				<Col id='fadeInRight'></Col>
			</Row>
		</>
	);
};

export default IMRF;
