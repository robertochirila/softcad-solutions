import React, { Component } from 'react'
import { Fade } from 'reactstrap';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader




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
                <Fade timeout={500}>
                    <div className="overlay">
                        <img className="header-image-naval" src='../img/scs_headerShip2.jpg' id="imageNavalProjects"></img>
                    </div>
                </Fade>
                <div className="services-box">
                    <div className="services-box-left">
                        <Fade timeout={500}>
                            <div>
                                <h2 className="header-naval">EasyShipDesign projects</h2>
                                <p className="services-paragraph">ESD screenshots and pictures during ship building stages</p>
                            </div>
                        </Fade>
                        <Fade timeout={1000}>
                            <div style={{ padding: "2%" }}>
                                <Carousel showThumbs={false}>
                                    <div>
                                        <img className="image-naval-collection" src="../img/scs_naval1.png"></img>
                                    </div>
                                    <div>
                                        <img className="image-naval-collection" src="../img/scs_naval2.png"></img>
                                    </div>
                                </Carousel>
                            </div>
                        </Fade>
                    </div>
                    <div className="services-box-right" id="servicesBoxRightMobile">
                        <Fade timeout={500}>
                            <div>
                                <h2 className="header-naval" id="headerNaval">Ships and more...</h2>
                                <p className="services-paragraph" id="servicesParagraph">We can create ship 3D model but also any kind of steel structure</p>
                            </div>
                        </Fade>
                        <Fade timeout={1000}>
                            <div style={{ padding: "2%" }}>
                                <Carousel showThumbs={false}>
                                    <div>
                                        <img className="image-naval-collection" src="../img/scs_naval3.png"></img>
                                    </div>
                                    <div>
                                        <img className="image-naval-collection" src="../img/scs_naval4.png"></img>
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
