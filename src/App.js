import { React, useState, useEffect } from "react";
import { Container } from "reactstrap";
import { Route, NavLink } from "react-router-dom";
import "./css/stylesReact.css";
import "./css/OrgChart.css";

import LandingPage from "./Departments/LandingPage";
import ExecutiveDepartment from "./Departments/Executive/ExecutiveDepartment";
import GenerateHTML from "./components/generateHTML";
import OrgChart from "./OrgChart/OrgChart";
import ElectedOfficials from "./Government/ElectedOfficials";
import { MayorMaryProfile } from "./Government/ElectedOfficialsProfiles/ElectedOfficialProfiles";
import AnimalControl from "./Departments/Police/PoliceDivisions/AnimalControl";
import PoliceLandingPage from "./Departments/Police/PoliceLandingPage";
import HumanResources from "./Departments/Human Resources/HumanResources";
import AgendasAndMinutes from "./Government/AgendasAndMinutes";
import ArtsCouncil from "./Government/Commissions/ArtsCouncil";
import ITCommission from "./Government/Commissions/ITCommission";
import BeautificationCommittee from "./Government/Commissions/BeautificationCommittee";
import LastUpdated from "./components/LastUpdated";
import FrontDoor from "./Residents/FrontDoor";
import PoliceDivisions from "./Departments/Police/PoliceDivisions/PoliceDivisions";
import CodeEnforcement from "./Departments/Police/PoliceDivisions/CodeEnforcement";
import TransparencyPolicy from "./Government/TransparencyPolicy";
import IMRF from "./Departments/Finance/IMRF";
import FinanceLandingPage from "./Departments/Finance/FinanceLandingPage";
import FireLandingPage from "./Departments/Fire/FireLandingPage";
import SmokeDetectors from "./Departments/Fire/SmokeDetectors";
import CitizensOfTheYear from "./Residents/CitizensOfTheYear";
import EmergencyMedicalSerices from "./Departments/Fire/Fire Divisions/EmergencyMedicalServices";
import FirePreventionBureau from "./Departments/Fire/Fire Divisions/FirePreventionBureau";
import FireTraining from "./Departments/Fire/Fire Divisions/FireTraining";
import ITDepartmentLandingPage from "./Departments/IT/ITDepartmentLandingPage";
import sanityClient from "./client";
import OnePost from "./OnePost";
const App = () => {
	const [postData, setPostData] = useState(null);

	useEffect(() => {
		sanityClient
			.fetch(
				`//groq
		  *[_type == 'navigation'] {
		   ...,
		   sections[]{
			 ...,
			 target->{title, slug, _id},
			 links[]{
			   ...,
			   target->{title, slug, _id},
			   children[]{
				 ...,
				 target->{title, slug, _id},
				 children[]{
					...,
					target->{title, slug, _id}
				 }
			   }
			 }
		   }
		 }
		 `
			)
			.then((data) => {
				console.log(data);
				setPostData(data);
			})
			.catch(console.error);
	}, []);

	return (
		<>
			<div>
				<div className='w-100 d-flex justify-content-center py-4' style={{ backgroundColor: "#132e5b" }}>
					<div>
						<img
							className='w-100'
							src='https://www.bolingbrook.com/repository/designs/templates/GO_bolingbrook-il_resp/images/title.png'
							alt='Bolingbrook, IL'
						/>
					</div>
				</div>
				<nav className='navbar navbar-expand-lg  mb-4' style={{ fontSize: "1.75rem" }}>
					<div className='container-fluid justify-content-center'>
						<ul className='navbar-nav'>
							{postData &&
								postData.map((level1) => (
									<NavRoot key={level1._key} text={level1.title}>
										{level1.sections &&
											level1.sections.map((level2) => {
												/* Fire, Police, Executive etc */

												return (
													<NavDropDownItem
														text={level2.title}
														key={level2._key}
														to={"/preview/" + level2.target.slug.current}>
														{level2.links &&
															level2.links.map((level3) => {
																/* Commissions, Smoke Detectors, etc */
																return (
																	<NavDropDownItem
																		text={level3.target.title}
																		key={level3._key}
																		to={"/preview/" + level3.target.slug.current}>
																		{level3.links &&
																			level3.links.map((level4) => {
																				return (
																					<NavDropDownItem
																						text={level4.title}
																						key={level4._key}
																						to={
																							"/" + level4.target.slug.current
																						}></NavDropDownItem>
																				);
																			})}
																	</NavDropDownItem>
																);
															})}
													</NavDropDownItem>
												);
											})}
									</NavRoot>
								))}
						</ul>
					</div>
				</nav>

				<nav className='navbar navbar-expand-lg  mb-4' style={{ fontSize: "1.75rem" }}>
					<div className='container-fluid justify-content-center'>
						<ul className='navbar-nav'>
							<NavRoot text='Government'>
								<NavDropDownItem text='Agendas And Minutes' to='/AgendasAndMinutes'></NavDropDownItem>
								<NavDropDownItem text='Commissions' to='/'>
									<NavDropDownSub text='Arts Council' to='/ArtsCouncil/'></NavDropDownSub>
									<NavDropDownSub text='IT Commission' to='/ITCommission'></NavDropDownSub>
									<NavDropDownSub text='Beautification Committee' to='/BeautificationCommittee'></NavDropDownSub>
								</NavDropDownItem>
								<NavDropDownItem text='Elected Officials' to='/Elected'></NavDropDownItem>
								<NavDropDownItem text='Organization Chart' to='/OrgChart'></NavDropDownItem>
								<NavDropDownItem text='Transparency Policy' to='/TransparencyPolicy'></NavDropDownItem>
							</NavRoot>
							<NavRoot text='Departments'>
								<NavDropDownItem text='Landing Page' to='/departmentLandingPage'></NavDropDownItem>
								<NavDropDownItem text='Executive' to='/Executive'></NavDropDownItem>
								<NavDropDownItem text='Police' to='/Police'>
									<NavDropDownItem text='Divisions' to='/Divisions/'>
										<NavDropDownSub text='Animal Control' to='/AnimalControl/'></NavDropDownSub>
										<NavDropDownSub text='Code Enforcement' to='/CodeEnforcement'></NavDropDownSub>
										<NavDropDownSub text='Crime Prevention' to='/CrimePrevention'></NavDropDownSub>
									</NavDropDownItem>
									<NavDropDownItem text='Explorers' to='/PoliceExplorers'></NavDropDownItem>
								</NavDropDownItem>
								<NavDropDownItem text='Finance' to='/Finance'>
									<NavDropDownItem text='IMRF' to='/IMRF'></NavDropDownItem>
								</NavDropDownItem>
								<NavDropDownItem text='Fire' to='/Fire'>
									<NavDropDownItem text='Smoke Detectors' to='/SmokeDetectors'></NavDropDownItem>
									<NavDropDownItem text='Fire Divisions' to='/FireDivisions'>
										<NavDropDownSub text='Emergency Medical Services' to='/EMS/'></NavDropDownSub>
										<NavDropDownSub text='Fire Prevention Bureau' to='/FirePreventionBureau/'></NavDropDownSub>
										<NavDropDownSub text='Training' to='/FireTraining/'></NavDropDownSub>
									</NavDropDownItem>
								</NavDropDownItem>
								<NavDropDownItem text='IT' to='/IT'>
									<NavDropDownItem text='Smoke Detectors' to='/SmokeDetectors'></NavDropDownItem>
									<NavDropDownItem text='Smoke Detectors' to='/SmokeDetectors'></NavDropDownItem>
									<NavDropDownItem text='Smoke Detectors' to='/SmokeDetectors'></NavDropDownItem>
									<NavDropDownItem text='Smoke Detectors' to='/SmokeDetectors'></NavDropDownItem>
								</NavDropDownItem>
								<NavDropDownItem text='Human Resources' to='/HumanResources'></NavDropDownItem>
							</NavRoot>
							<NavRoot text='Residents'>
								<NavDropDownItem text='Articles' to='/Articles'>
									<NavDropDownItem text='2020 Citizens Of The Year' to='/CitizensOfTheYear'></NavDropDownItem>
								</NavDropDownItem>
							</NavRoot>

							<NavRoot text='Front Door' to='/FrontDoor'></NavRoot>
						</ul>
					</div>
				</nav>
			</div>
			<GenerateHTML>
				<Container className="customCSS">
					<LastUpdated>
						<Route exact path='/departmentLandingPage' component={LandingPage} />
						{/* <Route component={OnePost} path='/:slug' /> */}
						{/* GOVERNMENT PAGES */}
						<Route exact path='/Elected' component={ElectedOfficials} />
						<Route exact path='/ArtsCouncil' component={ArtsCouncil} />
						<Route exact path='/ITCommission' component={ITCommission} />
						<Route exact path='/BeautificationCommittee' component={BeautificationCommittee} />
						<Route path='/AgendasAndMinutes' component={AgendasAndMinutes} />

						{/* DEPARTMENT PAGES */}
						{/* IT DEPARTMENT */}
						<Route exact path='/IT' component={ITDepartmentLandingPage} />
						{/* EXECUTIVE DEPARTMENT */}
						<Route exact path='/Executive' component={ExecutiveDepartment} />
						<Route exact path='/HumanResources' component={HumanResources} />
						<Route exact path='/IMRF' component={IMRF} />
						<Route exact path='/MayorMary' component={MayorMaryProfile} />
						<Route exact path='/OrgChart' component={OrgChart} />
						<Route exact path='/FrontDoor' component={FrontDoor} />
						<Route exact path='/TransparencyPolicy' component={TransparencyPolicy} />
						<Route exact path='/CitizensOfTheYear' component={CitizensOfTheYear} />
						{/* FIRE DEPARTMENT  */}
						<Route exact path='/Fire' component={FireLandingPage} />
						<Route exact path='/SmokeDetectors' component={SmokeDetectors} />
						<Route exact path='/FirePreventionBureau' component={FirePreventionBureau} />
						<Route exact path='/EMS' component={EmergencyMedicalSerices} />
						<Route exact path='/FireTraining' component={FireTraining} />
						{/* FINANCE DEPARTMENT */}
						<Route exact path='/Finance' component={FinanceLandingPage} />
						{/* POLICE DEPARTMENT */}
						<Route exact path='/AnimalControl/' component={AnimalControl} />
						<Route exact path='/Police' component={PoliceLandingPage} />
						<Route exact path='/PoliceDivisions' component={PoliceDivisions} />
						<Route exact path='/CodeEnforcement' component={CodeEnforcement} />
						<Route component={OnePost} path='/preview/:slug' />
					</LastUpdated>
				</Container>
			</GenerateHTML>
		</>
	);
};

export default App;

const NavRoot = (props) => {
	const { id, text, to } = props;
	if (to) {
		return (
			<li key={id} className='nav-item dropdown'>
				<NavLink className='mx-2' style={{ color: "#4f4f4f" }} to={to}>
					{text}
				</NavLink>
			</li>
		);
	} else {
		return (
			<li key={id} className='nav-item dropdown'>
				<div className='dropdown-toggle mx-2' href={to} id={id} role='button' data-mdb-toggle='dropdown' aria-expanded='false'>
					{text}
				</div>
				{props.children && (
					<ul key={"LI"+id} style={{ fontSize: "1.5rem" }} className='dropdown-menu' aria-labelledby={id}>
						{props.children}
					</ul>
				)}
			</li>
		);
	}
};

const NavDropDownItem = (props) => {
	const { to, text } = props;
	return (
		<li>
			<NavLink key={to} className='dropdown-item' style={{ color: "rgba(0,0,0,.7)" }} to={to}>
				{!props.children ? text : text + " »"}
			</NavLink>
			{props.children && <ul className='dropdown-menu dropdown-submenu'>{props.children}</ul>}
		</li>
	);
};

const NavDropDownSub = (props) => {
	const { to, text } = props;
	return (
		<li>
			<NavLink className='dropdown-item' style={{ color: "rgba(0,0,0,.7)" }} to={to}>
				{!props.children ? text : text + "»"}
			</NavLink>
		</li>
	);
};
