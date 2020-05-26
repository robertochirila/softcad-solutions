import React, { Component } from 'react'

//import '../styles/LandingPage.css'
import { PartnersPage } from './PartnersPage'
import { NavalProjectsPage } from './NavalProjectsPage'
import { SoftwareProjectsPage } from './SoftwareProjectsPage'
import { ServicesPage } from './ServicesPage'
import LocationPage from './LocationPage';
import { Fade } from 'reactstrap';
import Navigation from './Navigation'



export class LandingPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            step: 1
        }
    }

    handleHomeNavigation = () => {
        this.setState({ step: 1 })
    }

    handleServicesNavigation = () => {
        this.setState({ step: 2 })
    }

    handleNavalProjectsNavigation = () => {
        this.setState({ step: 3 })
    }

    handleSoftwareProjectsNavigation = () => {
        this.setState({ step: 4 })
    }

    handlePartnersNavigation = () => {
        this.setState({ step: 5 })
    }
    handleLocationNavigation = () => {
        this.setState({ step: 6 })
    }




    render() {
        const { step } = this.state
        switch (step) {
            case 1:
                return (
                    <header>
                        <div className="header-box">
                            <h1 className="header-text">Softcad Solutions <br /> Designing ships and <br /> custom software since 2002.</h1>
                            <button onClick={this.handleServicesNavigation} className="button" id="showButton">Show me More</button>
                        </div>
                    </header>
                )
                break;
            case 2:
                return (
                    <React.Fragment>
                        <Navigation
                            handleHomeNavigation={this.handleHomeNavigation}
                            handleServicesNavigation={this.handleServicesNavigation}
                            handleNavalProjectsNavigation={this.handleNavalProjectsNavigation}
                            handleSoftwareProjectsNavigation={this.handleSoftwareProjectsNavigation}
                            handlePartnersNavigation={this.handlePartnersNavigation}
                            handleLocationNavigation={this.handleLocationNavigation}
                        />
                        <ServicesPage
                            handleNavalProjectsNavigation={this.handleNavalProjectsNavigation}
                            handleSoftwareProjectsNavigation={this.handleSoftwareProjectsNavigation}
                        />

                    </React.Fragment>
                )
                break;
            case 3:
                return (
                    <React.Fragment>
                        <Navigation
                            handleHomeNavigation={this.handleHomeNavigation}
                            handleServicesNavigation={this.handleServicesNavigation}
                            handleNavalProjectsNavigation={this.handleNavalProjectsNavigation}
                            handleSoftwareProjectsNavigation={this.handleSoftwareProjectsNavigation}
                            handlePartnersNavigation={this.handlePartnersNavigation}
                            handleLocationNavigation={this.handleLocationNavigation}
                        />
                        <NavalProjectsPage />

                    </React.Fragment>
                )
                break
            case 4:
                return (
                    <React.Fragment>
                        <Navigation
                            handleHomeNavigation={this.handleHomeNavigation}
                            handleServicesNavigation={this.handleServicesNavigation}
                            handleNavalProjectsNavigation={this.handleNavalProjectsNavigation}
                            handleSoftwareProjectsNavigation={this.handleSoftwareProjectsNavigation}
                            handlePartnersNavigation={this.handlePartnersNavigation}
                            handleLocationNavigation={this.handleLocationNavigation}
                        />
                        <SoftwareProjectsPage />

                    </React.Fragment>
                )
                break;
            case 5:
                return (
                    <React.Fragment>
                        <Navigation
                            handleHomeNavigation={this.handleHomeNavigation}
                            handleServicesNavigation={this.handleServicesNavigation}
                            handleNavalProjectsNavigation={this.handleNavalProjectsNavigation}
                            handleSoftwareProjectsNavigation={this.handleSoftwareProjectsNavigation}
                            handlePartnersNavigation={this.handlePartnersNavigation}
                            handleLocationNavigation={this.handleLocationNavigation}
                        />
                        <PartnersPage />

                    </React.Fragment>
                )
                break
            case 6:
                return (
                    <React.Fragment>
                        <Navigation
                            handleHomeNavigation={this.handleHomeNavigation}
                            handleServicesNavigation={this.handleServicesNavigation}
                            handleNavalProjectsNavigation={this.handleNavalProjectsNavigation}
                            handleSoftwareProjectsNavigation={this.handleSoftwareProjectsNavigation}
                            handlePartnersNavigation={this.handlePartnersNavigation}
                            handleLocationNavigation={this.handleLocationNavigation}
                        />
                        <LocationPage />
                    </React.Fragment>
                )
            default:
                return (
                    <div>
                        <p>Error</p>
                    </div>
                )
        }
    }
}

export default LandingPage
