import React from "react";
import { Row, Col } from "reactstrap";
import { ContentCard, ContentCardSubsection } from "../../../components/ContentCard";
import ScrollSpy from "../../../components/ScrollSpy";
const EmergencyMedicalSerices = (props) => {
	return (
		<>
			<Row className='gx-3'>
				<Col>
					<ScrollSpy></ScrollSpy>
				</Col>
				<Col id='fadeInTop' md={6}>
					<ContentCard id='BecomeEMT' header='Becoming an EMT' icon='Information'>
						<p>
							The initial education for EMT's is usually conducted through the local community college. It consists of one semester of
							classroom with 16 hours of working in the emergency room and on an ambulance. Upon completion of these requirements, the
							individual completes the state exam for licensing. In the field, EMT's are required to perform 30 hours of documented
							continuing education per year.
						</p>
						<p>
							To become a paramedic, an individual must complete the EMT-Basic course and apply for the paramedic program through a
							resource hospital like Edward, Good Sam, Loyola, etc. The student will study topics of cardiology, pharmacology, anatomy and
							physiology, advanced trauma life-support, and pediatric advanced life-support. The student spends six months doing clinical
							rotations in various departments of the hospital and 400 hours of field operations in the ambulance.
						</p>
						<p>
							Upon successful completion of the course, the individual must pass the state exam for licensing. The paramedic must then pass
							an entrance exam in the Emergency Medical System in which he/she plans to operate. Once operational, the paramedic must
							perform 30 hours of continuing education per year. Currently, all the members of the Fire Department field staff are EMS
							trained. The department currently has 63 EMT-P (Paramedics) and 23 EMT-B (EMT Basics)
						</p>
					</ContentCard>
					<ContentCard id='PreceptorProgram' header='Preceptor Program' icon='Information'>
						<p>
							Over the past ten years, the Bolingbrook Fire Department has been involved in the Paramedic Preceptor program through the
							Edward Hospital EMS system. A Preceptor is a Paramedic who volunteers his/her time to field train a Paramedic student by
							giving them the ability to ride along with the Paramedic and to participate in the care (under the paramedics guidance) and
							transport of a patient. They also help the student with their studies by answering questions, dealing with patient care,
							Standard Operating Procedures, policies and ECG recognition.
						</p>
					</ContentCard>
					<ContentCard id='MedicationDisposal' header='Medication Disposal' icon='Information'>
						<p>
							If you have expired drugs or medications that you no longer use, do you know the proper way to dispose of them? According to
							the Food and Drug Administration (FDA) most drugs can be thrown in the trash, but certain precautions should be taken before
							tossing them out.
						</p>
						<ul>
							<li>Follow any specific disposal instructions on the drug label or patient information that accompanies the medication.</li>
							<li>
								Only flush the medications that are on the medications recommended for disposal by flushing list. This list, from FDA,
								tells you what expired, unwanted, or unused medicines you should flush down the sink or toilet to help prevent danger to
								people and pets in the home. Flushing these medicines will get rid of them right away and help keep your family and pets
								safe. The FDA continually evaluates medicines for safety risks and will update the list as needed.
							</li>
							<li>
								Take them out of their original containers and mix them with an undesirable substance, such as used coffee grounds or
								kitty litter. Put them in a sealable bag, empty can or other container to prevent the medication from leaking or
								breaking out of a garbage bag.
							</li>
							<li>
								Make sure to scratch out all identifying information on the prescription label to make it unreadable. This will help
								protect your identity and the privacy of your personal health information.
							</li>
						</ul>
						<ContentCardSubsection id='HypodermicNeedles' subHeader='Disposal of Hypodermic Needles'>
							<p>
								Stericycle is a company that provides home disposal kits for sharps needles. For a small fee, the company will send you
								a home kit that you will return to them once it is full. Visit the Stericycle website to order a pre-addressed package,
								or contact Dean at 847/943-6596.
							</p>
						</ContentCardSubsection>
					</ContentCard>
					<ContentCard id='WEMSWebLinks' header='EMS Web Links' icon='Information'>
						<p>Below is a list of web sites that will give you EMS related topics and information.</p>
						<ul>
							<li>
								The Center for Disease Control is one of the major operating components of the Department of Health and Human Services.
								The Centers for Disease Control and Prevention is the nation’s premier public health agency— working to ensure healthy
								people in a healthy world.
							</li>
							<li>
								Illinois Department of Public Health website you can quickly and conveniently access current health statistics, request
								a copy of a birth certificate, browse through the Department's catalog of publications, locate the nearest local health
								department and check out the latest information about public health issues.
							</li>
							<li>
								On the Will County Health Department website you will find comprehensive public health programs and primary health care
								and dental services for medically under-served residents of one of America's fastest growing counties. Services are
								provided regardless of age, race, color, national origin or disability.
							</li>
						</ul>
					</ContentCard>
				</Col>
				<Col id='fadeInRight'></Col>
			</Row>
		</>
	);
};

export default EmergencyMedicalSerices;
