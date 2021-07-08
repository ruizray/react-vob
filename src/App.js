import { React, useState } from "react";
import { Route, NavLink } from "react-router-dom";

import LandingPage from "./Departments/LandingPage";
import { Container, Navbar, Nav, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText } from "reactstrap";

//import 'bootstrap/dist/css/bootstrap.css'
import "./css/stylesReact.css";
import ExecutiveDepartment from "./Departments/ExecutiveDepartment";
import GenerateHTML from "./Functions/generateHTML";
import OrgChart from "./OrgChart/OrgChart";
import ElectedOfficials from "./Government/ElectedOfficials";
import ElectedOfficialProfile from './Government/ElectedOfficialsProfiles/ElectedOfficialProfile';

const App = () => {
	const [isDepartmentsOpen, setDepartmentsIsOpen] = useState(false);
	const [isGovernmentOpen, setGovernmentIsOpen] = useState(false);

	return (
		<>
			<div>
				<Navbar className='justify-content-center px-3 mb-4' color='light' light expand='md'>
					<Nav className=' mr-auto' navbar>
						<Dropdown
							onMouseOver={() => setDepartmentsIsOpen(true)}
							onFocus={() => setDepartmentsIsOpen(true)}
							onMouseLeave={() => setDepartmentsIsOpen(false)}
							onBlur={() => setDepartmentsIsOpen(false)}
							toggle={() => setDepartmentsIsOpen(!isDepartmentsOpen)}
							isOpen={isDepartmentsOpen}>
							<DropdownToggle tag={"h3"}  style={{ fontSize: "2rem" }} nav caret>
								<NavLink style={{ color: "rgba(0,0,0,.7)" }} to='/departmentLandingPage'>
									Departments
								</NavLink>
							</DropdownToggle>
							<DropdownMenu>
								<NavLink style={{ color: "rgba(0,0,0,.7)" }} to='/Executive'>
									<DropdownItem style={{ fontSize: "2rem" }}>Executive</DropdownItem>
								</NavLink>
							</DropdownMenu>
						</Dropdown>
						<Dropdown
							onMouseOver={() => setGovernmentIsOpen(true)}
							onFocus={() => setGovernmentIsOpen(true)}
							onMouseLeave={() => setGovernmentIsOpen(false)}
							onBlur={() => setGovernmentIsOpen(false)}
							toggle={() => setGovernmentIsOpen(!isDepartmentsOpen)}
							isOpen={isGovernmentOpen}>
							<DropdownToggle tag={"h3"} style={{ fontSize: "2rem" }} nav caret>
								<NavLink style={{ color: "rgba(0,0,0,.7)" }} to='/Government'>
									Government
								</NavLink>
							</DropdownToggle>
							<DropdownMenu>
								<NavLink style={{ color: "rgba(0,0,0,.7)" }} to='/Elected'>
									<DropdownItem style={{ fontSize: "2rem" }}>Elected Officials</DropdownItem>
								</NavLink>
							</DropdownMenu>
						</Dropdown>
						<NavbarText tag ={"h3"} style={{ fontSize: "2rem" }}>
							<NavLink style={{ color: "rgba(0,0,0,.7)", fontSize: "2rem" }} to='/OrgChart'>
								Org Chart
							</NavLink>
						</NavbarText>
					</Nav>
				</Navbar>
			</div>
			<GenerateHTML>
				<Container fluid={true} style={{ maxWidth: 1920 }}>
					<Route exact path='/departmentLandingPage' component={LandingPage} />
					<Route exact path='/Executive' component={ExecutiveDepartment} />
					<Route exact path='/OrgChart' component={OrgChart} />
					<Route exact path='/Elected' component={ElectedOfficials} />
					<Route exact path='/ElectedOfficialProfile' component={ElectedOfficialProfile} />
				</Container>
			</GenerateHTML>
		</>
	);
};

export default App;
