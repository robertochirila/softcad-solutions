import React, { Component } from 'react'
import { Fade } from 'reactstrap';
import { isMobile } from 'react-device-detect'
import { isTablet } from 'react-device-detect'


export class ServicesPage extends Component {
    moveNext = (e) => {
        e.preventDefault()
        this.props.incrementStep()
    }

    moveNext2Steps = (e) => {
        e.preventDefault()
        this.props.incrementStep()
        setTimeout(() => {
            this.props.incrementStep()
        }, 1000)
    }

    movePrev = (e) => {
        e.preventDefault()
        this.props.decrementStep()
    }
    render() {
        const display = { display: "inline-block" }
        const displayNone = { display: "none" }
        return (
            <div className="section-services">
                <Fade timeout={500}>
                    {isTablet ?
                        <div className="overlay">
                        </div>
                        :
                        <div className="overlay">
                            <img className="header-image-naval" src='../img/scs_headerShip2.jpg' alt="landingPageImage"></img>
                        </div>
                    }
                </Fade>
                <div className="services-box">
                    <div className="services-box-left">
                        <Fade timeout={1000}>
                            <div>
                                <p className={isTablet ? "services-paragraph black" : "services-paragraph"}>We already have the tools and expertise and we can create detailed 3D ship model database, drawings and complete shipbuilding production information</p>
                                <button onClick={this.moveNext} className={isTablet ? "button blackButton" : "button"} name="naval">Naval Projects</button>
                            </div>
                        </Fade>
                        <Fade timeout={1500}>
                            <div>

                                <img src="../img/scs_navalProject3.png" className="image-naval" alt="servicePageImage2"></img>

                            </div>


                        </Fade>
                    </div>
                    <div className="services-box-right">
                        <Fade timeout={1000}>
                            <div>
                                <p className={isTablet ? "services-paragraph black" : "services-paragraph"}>Our main goal is to create new software applications for ship design, 3D modelling and CAD/CAM production information</p>
                                <button onClick={this.moveNext2Steps} className={isTablet ? "button blackButton" : "button"} name="software">Software Projects</button>
                            </div>
                        </Fade>
                        <Fade timeout={1500}>
                            <div style={isMobile ? displayNone : display}>

                                <img className="image-software" src="../img/programmingIcon2.png" alt="servicePageImage3"></img>

                            </div>

                        </Fade>
                    </div>
                </div>
            </div>

        )
    }
}

export default ServicesPage
