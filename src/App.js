import { React, useState } from "react";
import { Route, NavLink } from "react-router-dom";

import LandingPage from "./Departments/LandingPage";
import {
	Container,
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	Dropdown,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	NavbarText,
} from "reactstrap";

//import 'bootstrap/dist/css/bootstrap.css'
import "./css/stylesReact.css";
import ExecutiveDepartment from "./Departments/ExecutiveDepartment";
import GenerateHTML from "./Functions/generateHTML";
import OrgChart from "./OrgChart/OrgChart";

const App = () => {
	const [isDepartmentsOpen, setDepartmentsIsOpen] = useState(false);

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
							<DropdownToggle style={{ fontSize: "2rem" }} nav caret>
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
						<NavbarText style={{ fontSize: "2rem" }}>
							<NavLink style={{ color: "rgba(0,0,0,.7)", fontSize: "2rem" }} to='/OrgChart'>Org Chart</NavLink>
						</NavbarText>
						
					</Nav>
				</Navbar>
			</div>
			<GenerateHTML>
				<Container style={{ maxWidth: 1920 }}>
					<Route exact path='/departmentLandingPage' component={LandingPage} />
					<Route exact path='/Executive' component={ExecutiveDepartment} />
					<Route exact path='/OrgChart' component={OrgChart} />
				</Container>
			</GenerateHTML>
		</>
	);
};

export default App;
