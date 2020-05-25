import React, { Component } from 'react'
import { Fade } from 'reactstrap';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { isTablet } from 'react-device-detect'




export class NavalProjectsPage extends Component {
    moveNext = (e) => {
        e.preventDefault()
        this.props.incrementStep()
    }
    movePrev = (e) => {
        e.preventDefault()
        this.props.decrementStep()
    }
    render() {
        return (
            <div className="section-naval">

                {isTablet ?
                    <div className="overlay">
                    </div>
                    :
                    <div className="overlay">
                        <img className="header-image-naval" src='../img/scs_headerShip2.jpg' alt="landingPageImage"></img>
                    </div>
                }

                <div className="services-box">
                    <div className="services-box-left">
                        <Fade timeout={500}>
                            <div>
                                <h2 className={isTablet ? "header-naval black" : "header-naval"}>EasyShipDesign projects</h2>
                                <p className={isTablet ? "services-paragraph black" : "services-paragraph"}>ESD screenshots and pictures during ship building stages</p>
                            </div>
                        </Fade>
                        <Fade timeout={1000}>
                            <div style={{ padding: "2%" }}>
                                <Carousel showThumbs={false}>
                                    <div>
                                        <img className="image-naval-collection" src="https://bucket-softcad.s3.eu-west-2.amazonaws.com/softcad/scs_naval1.png" alt="navalPageImage1"></img>
                                    </div>
                                    <div>
                                        <img className="image-naval-collection" src="https://bucket-softcad.s3.eu-west-2.amazonaws.com/softcad/scs_naval2.png" alt="navalPageImage2"></img>
                                    </div>
                                </Carousel>
                            </div>
                        </Fade>
                    </div>
                    <div className="services-box-right" id="servicesBoxRightMobile">
                        <Fade timeout={500}>
                            <div>
                                <h2 className={isTablet ? "header-naval black" : "header-naval"} id="headerNaval">Ships and more...</h2>
                                <p className={isTablet ? "services-paragraph black" : "services-paragraph"} id="servicesParagraph">We can create ship 3D model but also any kind of steel structure</p>
                            </div>
                        </Fade>
                        <Fade timeout={1000}>
                            <div style={{ padding: "2%" }}>
                                <Carousel showThumbs={false}>
                                    <div>
                                        <img className="image-naval-collection" src="https://bucket-softcad.s3.eu-west-2.amazonaws.com/softcad/scs_naval3.png" alt="navalPageImage3"></img>
                                    </div>
                                    <div>
                                        <img className="image-naval-collection" src="https://bucket-softcad.s3.eu-west-2.amazonaws.com/softcad/scs_naval4.png" alt="navalPageImage4"></img>
                                    </div>
                                </Carousel>
                            </div>
                        </Fade>

                    </div>
                </div>
            </div>
        )
    }
}

export default NavalProjectsPage
