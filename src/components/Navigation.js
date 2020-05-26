import React, { useState } from 'react';
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
} from 'reactstrap';

const Navigation = (props) => {
    console.log(props)

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const navigateHome = () => {
        props.handleHomeNavigation()
        toggle()
    }
    const navigateServices = () => {
        props.handleServicesNavigation()
        toggle()
    }
    const navigateNavalProjects = () => {
        props.handleNavalProjectsNavigation()
        toggle()
    }
    const navigateSoftwareProjects = () => {
        props.handleSoftwareProjectsNavigation()
        toggle()
    }
    const navigatePartners = () => {
        props.handlePartnersNavigation()
        toggle()
    }
    const navigateLocation = () => {
        props.handleLocationNavigation()
        toggle()
    }

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">reactstrap</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink onClick={navigateHome}>Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={navigateServices}>Services</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Projects
              </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem onClick={navigateNavalProjects}>
                                    Naval
                </DropdownItem>
                                <DropdownItem onClick={navigateSoftwareProjects}>
                                    Software
                </DropdownItem>
                                <DropdownItem divider />

                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <NavItem>
                            <NavLink onClick={navigatePartners}>Partners</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={navigateLocation}>Location</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Navigation;
