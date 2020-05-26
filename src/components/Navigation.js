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
    Fade,
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
        <Fade timeout={500}>
            <div className="navbar-wrapper">
                <Navbar color="light" light expand="md" className="navbar-custom">
                    <NavbarBrand style={{ fontSize: "0.6rem" }}>Softcad Solutions</NavbarBrand>
                    <NavbarToggler onClick={toggle} className="navbar-toggler-custom" />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink href="#" onClick={navigateHome}>Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#" onClick={navigateServices}>Services</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Projects
              </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem href="#" onClick={navigateNavalProjects}>
                                        Naval
                </DropdownItem>
                                    <DropdownItem href="#" onClick={navigateSoftwareProjects}>
                                        Software
                </DropdownItem>
                                    <DropdownItem divider />

                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <NavItem>
                                <NavLink href="#" onClick={navigatePartners}>Partners</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#" onClick={navigateLocation}>Location</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        </Fade>
    );
}

export default Navigation;
