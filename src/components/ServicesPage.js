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
                <div className="section-naval">
                    <div className="box">
                        <p className="services-paragraph">We already have the tools and expertise and we can create detailed 3D ship model database, drawings and complete shipbuilding production information</p>
                        <button onClick={this.moveNext} className="button" id="navalProjectButton" name="naval">Naval Projects</button>
                        <img src="https://bucket-softcad.s3.eu-west-2.amazonaws.com/softcad/scs_navalProject3.png" className="services-image" alt="servicePageImage2"></img>
                    </div>
                </div>
                <div className="section-software">
                    <div className="box">
                        <p className="services-paragraph">Our main goal is to create new software applications for ship design, 3D modelling and CAD/CAM production information</p>
                        <button onClick={this.moveNext2Steps} className="button" id="softwareProjectButton" name="software">Software Projects</button>
                        <img className="services-image" src="https://bucket-softcad.s3.eu-west-2.amazonaws.com/softcad/programmingIcon2.png" alt="servicePageImage3"></img>
                    </div>
                </div>
            </div>
        )
    }
}

export default ServicesPage
