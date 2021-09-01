import { React, useState, useEffect } from "react";
import { Container } from "reactstrap";
import { Route, NavLink } from "react-router-dom";
import "./css/stylesReact.css";
import "./css/OrgChart.css";

import GenerateHTML from "./components/generateHTML";
import OrgChart from "./OrgChart/OrgChart";
import AnimalControl from "./Departments/Police/PoliceDivisions/AnimalControl";
import PoliceLandingPage from "./Departments/Police/PoliceLandingPage";
import HumanResources from "./Departments/Human Resources/HumanResources";

import FrontDoor from "./Residents/FrontDoor";
import FireLandingPage from "./Departments/Fire/FireLandingPage";
import CitizensOfTheYear from "./Residents/CitizensOfTheYear";

import sanityClient from "./client";
import OnePost from "./OnePost";
import LandingPage from "./LandingPage";
import VillageDirectory from "./Departments/VillageDirectory";
import { ElectedOfficialsProfile } from "./Government/ElectedOfficialsProfiles/ElectedOfficialProfiles";
import PizzaOrder from './Residents/PizzaOrder';
const App = () => {
	const [postData, setPostData] = useState(null);

	useEffect(() => {
		sanityClient
			.fetch(
				`//groq
		  *[_type == 'navigation'] {
		   ...,
		   target->{slug},
		   sections[]{
			 ...,
			 target->{title, slug, header, _id, _type},
			 links[]{
			   ...,
			   target->{title, slug, _id, _type, header},
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
				console.log("APP DATA", data);
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
				 <DesktopNav postData={postData}></DesktopNav>
			</div>
			<GenerateHTML>
				<Container className='customCSS'>
					<Route exact path='/HumanResources' component={HumanResources} />
					<Route exact path='/OrgChart' component={OrgChart} />
					<Route exact path='/FrontDoor' component={FrontDoor} />
					<Route exact path='/CitizensOfTheYear' component={CitizensOfTheYear} />
					<Route exact path='/Fire' component={FireLandingPage} />
					<Route exact path='/AnimalControl/' component={AnimalControl} />
					<Route exact path='/Police' component={PoliceLandingPage} />
					<Route path='/villageDirectory' component={VillageDirectory}></Route>
					<Route component={OnePost} path='/preview/:slug' />
					<Route component={LandingPage} path='/preview2/:slug' />
					<Route component={ElectedOfficialsProfile} path='/profile/:id'></Route>
					<Route path='/Pizza' component = {PizzaOrder}/> 
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
			<li key={"LI" + id} className='nav-item dropdown'>
				<div className='dropdown-toggle mx-2' href={to} id={id} role='button' data-mdb-toggle='dropdown' aria-expanded='false'>
					{text}
				</div>
				{props.children && (
					<ul style={{ fontSize: "1.2rem" }} className='dropdown-menu' aria-labelledby={id}>
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
		<li key={to}>
			<NavLink className='dropdown-item' style={{ fontSize: "1.2rem", color: "rgba(0,0,0,.7)" }} to={to}>
				{!props.children ? text : text + " »"}
			</NavLink>
			{props.children && (
				<ul key={to + "UL"} className='dropdown-menu dropdown-submenu'>
					{props.children}
				</ul>
			)}
		</li>
	);
};

const NavDropDownSub = (props) => {
	const { to, text } = props;
	return (
		<li key={to}>
			<NavLink className='dropdown-item' style={{ color: "rgba(0,0,0,.7)" }} to={to}>
				{!props.children ? text : text + "»"}
			</NavLink>
		</li>
	);
};

const DesktopNav = (props) => {
	const { postData } = props;
	console.log(postData);
	return (
		<nav className='navbar navbar-expand-lg  mb-4' style={{ fontSize: "1.75rem" }}>
			<div className='container-fluid justify-content-center'>
				<ul className='navbar-nav'>
					{postData &&
						postData.map((level1, index) => {
							return (
								<>
									<NavRoot key={level1._rev} text={level1.title}>
										{level1.target && (
											<NavDropDownItem
												text={level1.title + " Landing Page"}
												to={"/preview2/" + level1.target.slug.current}
												key={level1._rev + "test"}></NavDropDownItem>
										)}
										{level1.sections &&
											level1.sections.map((level2) => {
												/* Fire, Police, Executive etc */

												return (
													<NavDropDownItem
														text={level2.title}
														key={level2._key}
														to={() => {
															if (level2.target._type === "landingPage") {
																return "/preview2/" + level2.target.slug.current;
															} else {
																return "/preview/" + level2.target.slug.current;
															}
														}}>
														{level2.links &&
															level2.links.length > 0 &&
															level2.links.map((level3) => {
																/* Commissions, Smoke Detectors, etc */

																return (
																	<NavDropDownItem
																		text={level3.target.title || level3.target.header}
																		key={level3._key}
																		to={() => {
																			if (level3.target._type === "landingPage") {
																				return "/preview2/" + level3.target.slug.current;
																			} else {
																				return "/preview/" + level3.target.slug.current;
																			}
																		}}>
																		{level3.children &&
																			level3.children.map((level4) => {
																				return (
																					<NavDropDownItem
																						text={level4.target.title || level4.target.header}
																						key={level4._key}
																						to={() => {
																							// console.log("Level 4", level3);
																							if (level4.target._type === "landingPage") {
																								return (
																									"/preview2/" +
																									level4.target.slug.current
																								);
																							} else {
																								return (
																									"/preview/" +
																									level4.target.slug.current
																								);
																							}
																						}}></NavDropDownItem>
																				);
																			})}
																	</NavDropDownItem>
																);
															})}
													</NavDropDownItem>
												);
											})}
									</NavRoot>
								</>
							);
						})}
					<NavRoot text='Extra Pages'>
						<NavDropDownItem text='Village Directory' to='/villageDirectory'></NavDropDownItem>
						<NavDropDownItem text='Front Door' to='/FrontDoor'></NavDropDownItem>
						<NavDropDownItem text="Pizza Order" to ='/Pizza'></NavDropDownItem>
					</NavRoot>
				</ul>
			</div>
		</nav>
	);
};

