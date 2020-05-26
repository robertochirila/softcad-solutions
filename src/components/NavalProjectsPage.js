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
            <section className="section-naval-projects">
                <div className="section-naval">
                    <div className="box">
                        <h2 className="header-projects">EasyShipDesign projects</h2>
                        <p className="services-paragraph">ESD screenshots and pictures during ship building stages</p>
                        <Carousel showThumbs={false} className="carousel">
                            <div>
                                <img className="carousel-image" src="https://bucket-softcad.s3.eu-west-2.amazonaws.com/softcad/scs_naval1.png" alt="navalPageImage1"></img>
                            </div>
                            <div>
                                <img className="carousel-image" src="https://bucket-softcad.s3.eu-west-2.amazonaws.com/softcad/scs_naval2.png" alt="navalPageImage2"></img>
                            </div>
                        </Carousel>
                    </div>
                    <div className="section-software">
                        <div className="box">
                            <h2 className="header-projects" id="headerNaval">Ships and more...</h2>
                            <p className="services-paragraph" id="servicesParagraph">We can create ship 3D model but also any kind of steel structure</p>
                            <Carousel showThumbs={false} className="carousel">
                                <div>
                                    <img className="carousel-image" src="https://bucket-softcad.s3.eu-west-2.amazonaws.com/softcad/scs_naval3.png" alt="navalPageImage3"></img>
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://bucket-softcad.s3.eu-west-2.amazonaws.com/softcad/scs_naval4.png" alt="navalPageImage4"></img>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default NavalProjectsPage
