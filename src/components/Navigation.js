import React, { Component } from 'react'
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
import { isMobile, isTablet, isDesktop } from 'react-device-detect'

export default class Navigation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            toggleNav: false
        }
    }

    navigateHome = () => {
        this.props.handleHomeNavigation()
    }
    navigateServices = () => {
        this.props.handleServicesNavigation()
    }
    navigateNavalProjects = () => {
        this.props.handleNavalProjectsNavigation()
    }
    navigateSoftwareProjects = () => {
        this.props.handleSoftwareProjectsNavigation()
    }
    navigatePartners = () => {
        this.props.handlePartnersNavigation()
    }
    navigateLocation = () => {
        this.props.handleLocationNavigation()
    }

    handleToggle = () => {
        const { toggleNav } = this.state
        this.setState({ toggleNav: !toggleNav })
    }



    render() {
        const { toggleNav } = this.state
        const { navColor } = this.state
        return (
            <nav className="custom-navbar">
                {
                    !isMobile ?
                        <ul className="custom-navbar-list">
                            <li className="custom-navbar-list-item"><a href="#" className="link" onClick={this.navigateHome}>Home</a></li>
                            <li className="custom-navbar-list-item"><a href="#" className="link" onClick={this.navigateServices}>Services</a></li>
                            <li className="custom-navbar-list-item"><a href="#" className="link" onClick={this.navigateNavalProjects}>Naval Projects</a></li>
                            <li className="custom-navbar-list-item"><a href="#" className="link" onClick={this.navigateSoftwareProjects}>Software Projects</a></li>
                            <li className="custom-navbar-list-item"><a href="#" className="link" onClick={this.navigatePartners}>Partners</a></li>
                            <li className="custom-navbar-list-item"><a href="#" className="link" onClick={this.navigateLocation}>Location</a></li>
                        </ul>
                        :
                        <div className="custom-navbar-mobile-wrapper">
                            <a onClick={this.handleToggle} className="custom-mobile-icon"><i className="fas fa-bars"></i></a>
                            {toggleNav ?
                                <Fade timeout={500}>
                                    <div className="custom-navbar-mobile-menu">
                                        <ul className="custom-navbar-list">
                                            <li className="custom-navbar-list-item"><a href="#" className="link" onClick={this.navigateHome}>Home</a></li>
                                            <li className="custom-navbar-list-item"><a href="#" className="link" onClick={this.navigateServices}>Services</a></li>
                                            <li className="custom-navbar-list-item"><a href="#" className="link" onClick={this.navigateNavalProjects}>Naval Projects</a></li>
                                            <li className="custom-navbar-list-item"><a href="#" className="link" onClick={this.navigateSoftwareProjects}>Software Projects</a></li>
                                            <li className="custom-navbar-list-item"><a href="#" className="link" onClick={this.navigatePartners}>Partners</a></li>
                                            <li className="custom-navbar-list-item"><a href="#" className="link" onClick={this.navigateLocation}>Location</a></li>
                                        </ul>
                                    </div>
                                </Fade>

                                :
                                null
                            }
                        </div>

                }
            </nav>
        );
    }
}

