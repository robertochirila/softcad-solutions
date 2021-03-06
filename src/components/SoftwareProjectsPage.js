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
            <section className="section-software-projects">
                <div className="section-software">
                    <div className="box">
                        <Fade timeout={500}>
                            <h2 className="header-text-pages">Ship design software applications and more</h2>
                            <p className="services-paragraph">Easy Ship Design : ship design system</p>
                            <p className="services-paragraph">Autonesting : plates and profiles parts automatic nesting system</p>
                            <p className="services-paragraph">ShellPlates : ship 3D surfaces modeller, seams and butts arrangement, surface expansion 2D parts</p>
                        </Fade>

                        <Fade timeout={750}>
                            <Carousel showThumbs={false}>
                                <div>
                                    <img className="carousel-image" src="https://bucket-softcad.s3.eu-west-2.amazonaws.com/softcad/scs_software1.png" alt="landingPageImage1"></img>
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://bucket-softcad.s3.eu-west-2.amazonaws.com/softcad/scs_software2.png" alt="landingPageImage2"></img>
                                </div>
                            </Carousel>
                        </Fade>
                    </div>
                    <div className="box" id="softwareBox">
                        <Fade timeout={500}>

                            <h2 className="header-text-pages">Custom software applications, a few examples</h2>
                            <p className="services-paragraph">SERPO : shipyard ERP system, mySQL database server</p>
                            <p className="services-paragraph">SICA : house roof surface calculation</p>
                            <p className="services-paragraph"> SORT : automatically loading and routing of truck fleet</p>
                            <p className="services-paragraph">AMOB : kitchen 3D modeller and cutting plan</p>
                        </Fade>
                        <Fade timeout={750}>
                            <Carousel showThumbs={false}>
                                <div>
                                    <img className="carousel-image" src="https://bucket-softcad.s3.eu-west-2.amazonaws.com/softcad/scs_img16.jpg" alt="landingPageImage3"></img>
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://bucket-softcad.s3.eu-west-2.amazonaws.com/softcad/scs_img15.jpg" alt="landingPageImage3"></img>
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://bucket-softcad.s3.eu-west-2.amazonaws.com/softcad/scs_software3.png" alt="landingPageImage3"></img>
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://bucket-softcad.s3.eu-west-2.amazonaws.com/softcad/scs_software4.png" alt="landingPageImage4"></img>
                                </div>
                            </Carousel>
                        </Fade>
                    </div>
                </div>
            </section>
        )
    }
}

export default SoftwareProjectsPage
