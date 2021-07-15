import { React } from "react";
import { Container } from "reactstrap";
import { Route, NavLink } from "react-router-dom";

import "./css/stylesReact.css";
import "./css/OrgChart.css";

import LandingPage from "./Departments/LandingPage";
import ExecutiveDepartment from "./Departments/Executive/ExecutiveDepartment";
import GenerateHTML from "./Functions/generateHTML";
import OrgChart from "./OrgChart/OrgChart";
import ElectedOfficials from "./Government/ElectedOfficials";
import { MayorMaryProfile } from "./Government/ElectedOfficialsProfiles/ElectedOfficialProfiles";
import AnimalControl from "./Departments/Police/AnimalControl";
import PoliceLandingPage from "./Departments/Police/PoliceLandingPage";
import HumanResources from "./Departments/Human Resources/HumanResources";
import AgendasAndMinutes from "./Government/AgendasAndMinutes";
import ArtsCouncil from './Government/Commissions/ArtsCouncil';
import ITCommission from './Government/Commissions/ITCommission';
import BeautificationCommittee from './Government/Commissions/BeautificationCommittee';
const App = () => {
	return (
		<>
			<div>
				<nav className='navbar navbar-expand-lg navbar-light bg-light mb-2 ' style={{ fontSize: "2rem" }}>
					<div className='container-fluid justify-content-center'>
						<ul className='navbar-nav'>
							<li className='nav-item dropdown'>
								<div
									className='dropdown-toggle mx-2'
									href=' '
									id='Departments'
									role='button'
									data-mdb-toggle='dropdown'
									aria-expanded='false'>
									Departments
								</div>
								<ul style={{ fontSize: "1.5rem" }} className='dropdown-menu' aria-labelledby='Departments'>
									<li>
										<NavLink className='dropdown-item' style={{ color: "rgba(0,0,0,.7)" }} to='/departmentLandingPage'>
											Landing Page
										</NavLink>
									</li>
									<li>
										<NavLink className='dropdown-item' style={{ color: "rgba(0,0,0,.7)" }} to='/Executive'>
											Executive »
										</NavLink>
										<ul className='dropdown-menu dropdown-submenu'>
											<li>
												<a className='dropdown-item' href=' '>
													Submenu item 1
												</a>
											</li>

											<li>
												<a className='dropdown-item' href=' '>
													Submenu item 3 &raquo;{" "}
												</a>
												<ul className='dropdown-menu dropdown-submenu'>
													<li>
														<a className='dropdown-item' href=' '>
															Multi level 1
														</a>
													</li>
													<li>
														<a className='dropdown-item' href=' '>
															Multi level 2
														</a>
													</li>
												</ul>
											</li>
										</ul>
									</li>
									<li>
										<NavLink className='dropdown-item' style={{ color: "rgba(0,0,0,.7)" }} to='/Police'>
											Police »
										</NavLink>
										<ul className='dropdown-menu dropdown-submenu'>
											<li>
												<NavLink className='dropdown-item' style={{ color: "rgba(0,0,0,.7)" }} to='/AnimalControl'>
													Animal Control »
												</NavLink>
											</li>
										</ul>
									</li>
									<li>
										<NavLink className='dropdown-item' style={{ color: "rgba(0,0,0,.7)" }} to='/HumanResources'>
											Human Resources
										</NavLink>
									</li>
								</ul>
							</li>
							<li className='nav-item dropdown'>
								<div
									className='dropdown-toggle mx-2'
									href=' '
									id='Government'
									role='button'
									data-mdb-toggle='dropdown'
									aria-expanded='false'>
									Government
								</div>
								<ul style={{ fontSize: "1.5rem" }} className='dropdown-menu' aria-labelledby='Government'>
									<li>
										<NavLink className='dropdown-item' style={{ color: "rgba(0,0,0,.7)" }} to='/departmentLandingPage'>
											Landing Page
										</NavLink>
									</li>
									<li>
										<NavLink className='dropdown-item' style={{ color: "rgba(0,0,0,.7)" }} to='/AgendasAndMinutes'>
											Agendas And Minutes
										</NavLink>
									</li>
									<li>
										<NavLink className='dropdown-item' style={{ color: "rgba(0,0,0,.7)" }} to='/AgendasAndMinutes'>
											Commissions »
										</NavLink>
										<ul className='dropdown-menu dropdown-submenu'>
											<li>
												<NavLink className='dropdown-item' style={{ color: "rgba(0,0,0,.7)" }} to='/ArtsCouncil'>
													Arts Council
												</NavLink>
											</li>
											<li>
												<NavLink className='dropdown-item' style={{ color: "rgba(0,0,0,.7)" }} to='/ITCommission'>
													IT Commission
												</NavLink>
											</li>
											<li>
												<NavLink className='dropdown-item' style={{ color: "rgba(0,0,0,.7)" }} to='/BeautificationCommittee'>
													Beautification Committee
												</NavLink>
											</li>
										</ul>
									</li>
									<li>
										<NavLink className='dropdown-item' style={{ color: "rgba(0,0,0,.7)" }} to='/Elected'>
											Elected Officials »
										</NavLink>

										<ul className='dropdown-menu dropdown-submenu'>
											<li>
												<a className='dropdown-item' href=' '>
													Submenu item 1
												</a>
											</li>

											<li>
												<a className='dropdown-item' href=' '>
													Submenu item 3
												</a>
											</li>
										</ul>
									</li>
									<li>
										<NavLink className='dropdown-item' style={{ color: "rgba(0,0,0,.7)" }} to='/OrgChart'>
											Organization Chart
										</NavLink>
									</li>
								</ul>
							</li>
						</ul>
					</div>
				</nav>
			</div>
			<GenerateHTML>
				<Container>
					<Route exact path='/departmentLandingPage' component={LandingPage} />
					<Route exact path='/AgendasAndMinutes' component={AgendasAndMinutes} />
					<Route exact path='/Executive' component={ExecutiveDepartment} />
					<Route exact path='/HumanResources' component={HumanResources} />
					<Route exact path='/OrgChart' component={OrgChart} />
					<Route exact path='/Elected' component={ElectedOfficials} />
					<Route exact path='/ArtsCouncil' component={ArtsCouncil} />
					<Route exact path='/ITCommission' component={ITCommission} />
					<Route exact path='/BeautificationCommittee' component={BeautificationCommittee} />
					<Route exact path='/MayorMary' component={MayorMaryProfile} />
					<Route exact path='/AnimalControl' component={AnimalControl} />
					<Route exact path='/Police' component={PoliceLandingPage} />
				</Container>
			</GenerateHTML>
		</>
	);
};

export default App;
