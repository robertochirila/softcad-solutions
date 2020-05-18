import React, { Component } from 'react'
import { Fade } from 'reactstrap'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

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
                <div className="overlay">
                    <img className="header-image" src='../img/scs_headerShip2.jpg' alt="landingPageImage"></img>
                </div>

                <div className="services-box">
                    <div className="services-box-left">
                        <div>
                            <Fade timeout={1000}>
                                <h2 className="header-software">Ship design software applications and more</h2>
                                <p className="services-paragraph-software">Easy Ship Design : ship design system</p>
                                <p className="services-paragraph-software">Autonesting : plates and profiles parts automatic nesting system , cnc files code generation</p>
                                <p className="services-paragraph-software">ShellPlates : ship 3D surfaces modeller, seams and butts arrangement , surface expansion 2D parts</p>
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
                    <div className="services-box-right">
                        <div style={{ padding: "2%" }}>
                            <Fade timeout={1000}>
                                <h2 className="header-software" id="headerSoftware">Custom software applications , a few examples</h2>
                                <p className="services-paragraph-software black">SERPO : shipyard ERP system , mySQL database server</p>
                                <p className="services-paragraph-software black">SICA : house roof surface calculation</p>
                                <p className="services-paragraph-software black"> SORT : automatically loading and routing of truck fleet</p>
                                <p className="services-paragraph-software black">AMOB : kitched 3D modeller and cutting plan</p>
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
