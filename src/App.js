import { React } from "react";
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
import AboutBolingbrook from "./Residents/AboutBolingbrook";
const App = () => {
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
							<NavRoot text='Departments'>
								<NavDropDownItem text='Landing Page' to='/departmentLandingPage'></NavDropDownItem>
								<NavDropDownItem text='Executive' to='/Executive'></NavDropDownItem>
								<NavDropDownItem text='Police' to='/Police'>
									<NavDropDownItem text='Divisions' to='/Police'>
										<NavDropDownSub text='Animal Control' to='/AnimalControl'></NavDropDownSub>
										<NavDropDownSub text='Code Enforcement' to='/CodeEnforcement'></NavDropDownSub>
										<NavDropDownSub text='Crime Prevention' to='/CrimePrevention'></NavDropDownSub>
									</NavDropDownItem>
									<NavDropDownItem text='Explorers' to='/PoliceExplorers'></NavDropDownItem>
								</NavDropDownItem>
								<NavDropDownItem text='Human Resources' to='/HumanResources'></NavDropDownItem>
							</NavRoot>
							<NavRoot text='Government'>
								<NavDropDownItem text='Agendas And Minutes' to='/AgendasAndMinutes'></NavDropDownItem>
								<NavDropDownItem text='Commissions' to='/'>
									<NavDropDownSub text='Arts Council' to='/ArtsCouncil'></NavDropDownSub>
									<NavDropDownSub text='IT Commission' to='/ITCommission'></NavDropDownSub>
									<NavDropDownSub text='Beautification Committee' to='/BeautificationCommittee'></NavDropDownSub>
								</NavDropDownItem>
								<NavDropDownItem text='Elected Officials' to='/Elected'></NavDropDownItem>
								<NavDropDownItem text='Organization Chart' to='/OrgChart'></NavDropDownItem>
							</NavRoot>
							<NavRoot text='Residents'>
								<NavDropDownItem text='About Bolingbrook' to='/AboutBolingbrook'></NavDropDownItem>
							</NavRoot>
							<NavRoot text='Front Door' to='/FrontDoor'></NavRoot>
						</ul>
					</div>
				</nav>
			</div>
			<GenerateHTML>
				<Container>
					<LastUpdated>
						<Route exact path='/departmentLandingPage' component={LandingPage} />
						<Route exact path='/AgendasAndMinutes' component={AgendasAndMinutes} />
						<Route exact path='/Executive' component={ExecutiveDepartment} />
						<Route exact path='/HumanResources' component={HumanResources} />
						<Route exact path='/OrgChart' component={OrgChart} />
						<Route exact path='/AboutBolingbrook' component={AboutBolingbrook} />
						<Route exact path='/Elected' component={ElectedOfficials} />
						<Route exact path='/ArtsCouncil' component={ArtsCouncil} />
						<Route exact path='/ITCommission' component={ITCommission} />
						<Route exact path='/BeautificationCommittee' component={BeautificationCommittee} />
						<Route exact path='/MayorMary' component={MayorMaryProfile} />
						<Route exact path='/AnimalControl' component={AnimalControl} />
						<Route exact path='/Police' component={PoliceLandingPage} />
						<Route exact path='/PoliceDivisions' component={PoliceDivisions} />
						<Route exact path='/CodeEnforcement' component={CodeEnforcement} />
						<Route exact path='/FrontDoor' component={FrontDoor} />
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
			<li className='nav-item dropdown'>
				<NavLink className='mx-2' style={{ color: "#4f4f4f" }} to={to}>
					{text}
				</NavLink>
			</li>
		);
	} else {
		return (
			<li className='nav-item dropdown'>
				<div className='dropdown-toggle mx-2' href={to} id={id} role='button' data-mdb-toggle='dropdown' aria-expanded='false'>
					{text}
				</div>
				{props.children && (
					<ul style={{ fontSize: "1.5rem" }} className='dropdown-menu' aria-labelledby={id}>
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
			<NavLink className='dropdown-item h-100 d-flex justify-content-between align-items-center' style={{ color: "rgba(0,0,0,.7)" }} to={to}>
				{!props.children ? (
					text
				) : (
					<>
						<span >{text}</span>
						<i style={{ verticalAlign: "middle", fontSize: "inherit" }} className='material-icons'>
							chevron_right
						</i>
					</>
				)}
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
				{!props.children ? (
					text
				) : (
					<>
						<span >{text}</span>
						<i style={{ verticalAlign: "middle", fontSize: "inherit" }} className='material-icons'>
							chevron_right
						</i>
					</>
				)}
			</NavLink>
		</li>
	);
};
