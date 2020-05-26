import React, { Component } from 'react'

//import '../styles/LandingPage.css'
import { PartnersPage } from './PartnersPage'
import { NavalProjectsPage } from './NavalProjectsPage'
import { SoftwareProjectsPage } from './SoftwareProjectsPage'
import { ServicesPage } from './ServicesPage'
import LocationPage from './LocationPage';
import { Fade } from 'reactstrap';
import { FooterNav } from './FooterNav'



export class LandingPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            step: 1
        }
    }

    incrementStep = () => {
        const { step } = this.state
        this.setState({ step: step + 1 })
    }

    decrementStep = () => {
        const { step } = this.state
        this.setState({ step: step - 1 })
    }


    render() {
        const { step } = this.state
        switch (step) {
            case 1:
                return (
                    <header>
                        <div className="header-box">
                            <h1 className="header-text">Softcad Solutions <br /> Designing ships and <br /> custom software since 2002.</h1>
                            <button onClick={this.incrementStep} className="button" id="showButton">Show me More</button>
                        </div>
                    </header>
                )
                break;
            case 2:
                return (
                    <React.Fragment>
                        <ServicesPage incrementStep={this.incrementStep} decrementStep={this.decrementStep} />
                        {/*<FooterNav incrementStep={this.incrementStep} decrementStep={this.decrementStep} step={step} />*/}
                    </React.Fragment>
                )
                break;
            case 3:
                return (
                    <React.Fragment>
                        <NavalProjectsPage incrementStep={this.incrementStep} decrementStep={this.decrementStep} />
                        {/*<FooterNav incrementStep={this.incrementStep} decrementStep={this.decrementStep} step={step} />*/}
                    </React.Fragment>
                )
                break
            case 4:
                return (
                    <React.Fragment>
                        <SoftwareProjectsPage incrementStep={this.incrementStep} decrementStep={this.decrementStep} />
                        {/*<FooterNav incrementStep={this.incrementStep} decrementStep={this.decrementStep} step={step} />*/}
                    </React.Fragment>
                )
                break;
            case 5:
                return (
                    <React.Fragment>
                        <PartnersPage incrementStep={this.incrementStep} decrementStep={this.decrementStep} />
                        {/*<FooterNav incrementStep={this.incrementStep} decrementStep={this.decrementStep} step={step} />*/}
                    </React.Fragment>
                )
                break
            case 6:
                return (
                    <React.Fragment>
                        <LocationPage decrementStep={this.decrementStep} />
                        {/*<FooterNav decrementStep={this.decrementStep} step={step} />*/}
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
