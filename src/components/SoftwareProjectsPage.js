import React, { Component } from 'react'
import { Fade } from 'reactstrap'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { isMobile, isTablet, isDesktop } from 'react-device-detect'
export class SoftwareProjectsPage extends Component {
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
            <div className="section-software">
                {isTablet ?
                    <div className="overlay">
                    </div>
                    :
                    <div className="overlay">
                        <img className="header-image-naval" src='../img/scs_headerShip2.jpg' alt="landingPageImage"></img>
                    </div>
                }


                <div className="services-box">
                    <div className={isMobile ? "services-box-left overwriteColumnWidth" : "services-box-left"}>
                        <div>
                            <Fade timeout={1000}>
                                <h2 className={isTablet ? "header-software black" : "header-software"}>Ship design software applications and more</h2>
                                <p className={isTablet ? "services-paragraph black" : "services-paragraph"}>Easy Ship Design : ship design system</p>
                                <p className={isTablet ? "services-paragraph black" : "services-paragraph"}>Autonesting : plates and profiles parts automatic nesting system</p>
                                <p className={isTablet ? "services-paragraph black" : "services-paragraph"} id="servicesParagraphLandscape">ShellPlates : ship 3D surfaces modeller, seams and butts arrangement, surface expansion 2D parts</p>
                            </Fade>
                            <Fade timeout={1250}>
                                <div style={{ padding: "2%", marginBottom: "15%" }}>
                                    <Carousel showThumbs={false}>
                                        <div>
                                            <img className="image-software-collection" src="../img/scs_software1.png" alt="landingPageImage1"></img>
                                        </div>
                                        <div>
                                            <img className="image-software-collection" src="../img/scs_software2.png" alt="landingPageImage2"></img>
                                        </div>
                                    </Carousel>
                                </div>
                            </Fade>
                        </div>
                    </div>
                    <div className={isMobile ? "services-box-left overwriteColumnWidth" : "services-box-left"}>
                        <div style={{ padding: "0" }}>
                            <Fade timeout={1000}>
                                <h2 className={isMobile ? "header-software black" : "header-software"} id="headerSoftwareMobile">Custom software applications, a few examples</h2>
                                <p className={isMobile ? "services-paragraph black" : "services-paragraph"}>SERPO : shipyard ERP system, mySQL database server</p>
                                <p className={isMobile ? "services-paragraph black" : "services-paragraph"}>SICA : house roof surface calculation</p>
                                <p className={isMobile ? "services-paragraph black" : "services-paragraph"}> SORT : automatically loading and routing of truck fleet</p>
                                <p className={isMobile ? "services-paragraph black" : "services-paragraph"}>AMOB : kitched 3D modeller and cutting plan</p>
                            </Fade>
                            <Fade timeout={1250}>
                                <div>
                                    <Carousel showThumbs={false}>
                                        <div>
                                            <img className="image-software-collection" src="../img/scs_software3.png" alt="landingPageImage3"></img>
                                        </div>
                                        <div>
                                            <img className="image-software-collection" src="../img/scs_software4.png" alt="landingPageImage4"></img>
                                        </div>
                                    </Carousel>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SoftwareProjectsPage
