import React, { Component } from 'react'

//import '../styles/LandingPage.css'
import { PartnersPage } from './PartnersPage'
import { NavalProjectsPage } from './NavalProjectsPage'
import { SoftwareProjectsPage } from './SoftwareProjectsPage'
import { ServicesPage } from './ServicesPage'
import LocationPage from './LocationPage';
import { Fade } from 'reactstrap';



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
        //console.log(step)
        switch (step) {
            case 1:
                return (
                    <React.Fragment>
                        <header>
                            {<Fade timeout={500}>
                                <div className="overlay">
                                    <img className="header-image-hero" src="../img/scs_headerShip.jpg" ></img>
                                </div>
                            </Fade>}
                            <div className="header-text-box">

                                <Fade timeout={750}>
                                    <h1 className="header-text">Softcad Solutions <br /> Designing ships and <br /> custom software since 2002.</h1>
                                </Fade>
                                <Fade timeout={1000}>
                                    <button onClick={this.incrementStep} className="header-button">Show me More</button>
                                </Fade>
                            </div>
                        </header>

                    </React.Fragment>
                )
                break;
            case 2:
                return (
                    <ServicesPage incrementStep={this.incrementStep} decrementStep={this.decrementStep} />
                )
                break;
            case 3:
                return (
                    <NavalProjectsPage incrementStep={this.incrementStep} decrementStep={this.decrementStep} />
                )
                break
            case 4:
                return (
                    <SoftwareProjectsPage incrementStep={this.incrementStep} decrementStep={this.decrementStep} />
                )
                break;
            case 5:
                return (
                    <PartnersPage incrementStep={this.incrementStep} decrementStep={this.decrementStep} />
                )
                break
            case 6:
                return (
                    <LocationPage decrementStep={this.decrementStep} />
                )
        }
    }
}

export default LandingPage
