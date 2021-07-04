import React, {useState} from "react";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	NavbarText,
} from "reactstrap";
const Main = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);
	return (
		<>
			{/* <div>
				<Navbar className=' px-3' color='light' light expand='md'>
					<NavbarToggler onClick={toggle} />
					<Collapse className='justify-content-center' isOpen={isOpen} navbar>
						<Nav className=' mr-auto' navbar>
							<NavItem>
								<NavLink to='/components/'>Components</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href='https://github.com/reactstrap/reactstrap'>GitHub</NavLink>
							</NavItem>
							<UncontrolledDropdown nav inNavbar>
								<DropdownToggle nav caret>
									Options
								</DropdownToggle>
								<DropdownMenu right>
									<DropdownItem>Option 1</DropdownItem>
									<DropdownItem>Option 2</DropdownItem>
									<DropdownItem divider />
									<DropdownItem>Reset</DropdownItem>
								</DropdownMenu>
							</UncontrolledDropdown>
						</Nav>
						<NavbarText>Simple Text</NavbarText>
					</Collapse>
				</Navbar>
			</div> */}
		</>
	);
};

export default Main;
