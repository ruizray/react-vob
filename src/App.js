import { React } from "react";
import { Container } from "reactstrap";
import { Route, NavLink } from "react-router-dom";

import "./css/stylesReact.css";

import LandingPage from "./Departments/LandingPage";
import ExecutiveDepartment from "./Departments/ExecutiveDepartment";
import GenerateHTML from "./Functions/generateHTML";
import OrgChart from "./OrgChart/OrgChart";
import ElectedOfficials from "./Government/ElectedOfficials";
import { MayorMaryProfile } from "./Government/ElectedOfficialsProfiles/ElectedOfficialProfiles";
import AnimalControl from "./Departments/Police/AnimalControl";
import PoliceLandingPage from './Departments/Police/PoliceLandingPage';
const App = () => {
	return (
		<>
			<div>
				<nav class='navbar navbar-expand-lg navbar-light bg-light mb-2 ' style={{ fontSize: "2rem" }}>
					<div class='container-fluid justify-content-center'>
						<ul class='navbar-nav'>
							<li class='nav-item dropdown'>
								<div
									className='dropdown-toggle mx-2'
									href=' '
									id='Departments'
									role='button'
									data-mdb-toggle='dropdown'
									aria-expanded='false'>
									Departments
								</div>
								<ul style={{ fontSize: "1.5rem" }} class='dropdown-menu' aria-labelledby='Departments'>
									<li>
										<NavLink className='dropdown-item' style={{ color: "rgba(0,0,0,.7)" }} to='/departmentLandingPage'>
											Landing Page
										</NavLink>
									</li>
									<li>
										<NavLink className='dropdown-item' style={{ color: "rgba(0,0,0,.7)" }} to='/Executive'>
											Executive »
										</NavLink>
										<ul class='dropdown-menu dropdown-submenu'>
											<li>
												<a class='dropdown-item' href=' '>
													Submenu item 1
												</a>
											</li>

											<li>
												<a class='dropdown-item' href=' '>
													Submenu item 3 &raquo;{" "}
												</a>
												<ul class='dropdown-menu dropdown-submenu'>
													<li>
														<a class='dropdown-item' href=' '>
															Multi level 1
														</a>
													</li>
													<li>
														<a class='dropdown-item' href=' '>
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
										<ul class='dropdown-menu dropdown-submenu'>
											<li>
												<NavLink className='dropdown-item' style={{ color: "rgba(0,0,0,.7)" }} to='/AnimalControl'>
													Animal Control »
												</NavLink>
											</li>

											
										</ul>
									</li>
								</ul>
							</li>
							<li class='nav-item dropdown'>
								<div
									className='dropdown-toggle mx-2'
									href=' '
									id='Government'
									role='button'
									data-mdb-toggle='dropdown'
									aria-expanded='false'>
									Government
								</div>
								<ul style={{ fontSize: "1.5rem" }} class='dropdown-menu' aria-labelledby='Government'>
									<li>
										<NavLink className='dropdown-item' style={{ color: "rgba(0,0,0,.7)" }} to='/departmentLandingPage'>
											Landing Page
										</NavLink>
									</li>
									<li>
										<NavLink className='dropdown-item' style={{ color: "rgba(0,0,0,.7)" }} to='/Elected'>
											Elected Officials »
										</NavLink>

										<ul class='dropdown-menu dropdown-submenu'>
											<li>
												<a class='dropdown-item' href=' '>
													Submenu item 1
												</a>
											</li>

											<li>
												<a class='dropdown-item' href=' '>
													Submenu item 3
												</a>
											</li>
										</ul>
									</li>
									<li>
										<NavLink className='dropdown-item' style={{ color: "rgba(0,0,0,.7)" }} to='/OrgChart'>
											organization Chart
										</NavLink>

										
									</li>
								</ul>
							</li>
						</ul>
					</div>
				</nav>
			</div>
			<GenerateHTML>
				<Container  >
					<Route exact path='/departmentLandingPage' component={LandingPage} />
					<Route exact path='/Executive' component={ExecutiveDepartment} />
					<Route exact path='/OrgChart' component={OrgChart} />
					<Route exact path='/Elected' component={ElectedOfficials} />

					<Route exact path='/MayorMary' component={MayorMaryProfile} />
					<Route exact path='/AnimalControl' component={AnimalControl} />
					<Route exact path='/Police' component={PoliceLandingPage} />
				</Container>
			</GenerateHTML>
		</>
	);
};

export default App;
