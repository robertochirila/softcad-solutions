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
        <div className="navbar-wrapper">
            <Navbar color="light" light expand="md" className="navbar-custom">
                <NavbarBrand style={{ fontSize: "0.6rem" }}>Softcad Solutions</NavbarBrand>
                <NavbarToggler onClick={toggle} className="navbar-toggler-custom" />
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
