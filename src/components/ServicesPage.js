import React, { Component } from 'react'
import { Fade } from 'reactstrap';
import { isMobile } from 'react-device-detect'
import { isTablet } from 'react-device-detect'


export class ServicesPage extends Component {
    navigateNavalProjects = () => {
        this.props.handleNavalProjectsNavigation()

    }
    navigateSoftwareProjects = () => {
        this.props.handleSoftwareProjectsNavigation()

    }

    render() {

        return (
            <div className="section-services">
                <div className="section-naval" id="sectionServicesNaval">
                    <div className="box">
                        <Fade timeout={500}>
                            <p className="services-paragraph">We already have the tools and expertise and we can create detailed 3D ship model database, drawings and complete shipbuilding production information</p>
                        </Fade>
                        <Fade timeout={750}>
                            <button onClick={this.navigateNavalProjects} className="button" id="navalProjectButton" name="naval">Naval Projects</button>
                        </Fade>
                        <Fade timeout={1000}>
                            <img src="https://bucket-softcad.s3.eu-west-2.amazonaws.com/softcad/scs_navalProject3.png" className="services-image" alt="servicePageImage2"></img>
                        </Fade>
                    </div>
                    <div className="box">
                        <Fade timeout={500}>
                            <p className="services-paragraph">Our main goal is to create new software applications for ship design, 3D modelling and CAD/CAM production information</p>
                        </Fade>
                        <Fade timeout={750}>
                            <button onClick={this.navigateSoftwareProjects} className="button" id="softwareProjectButton" name="software">Software Projects</button>
                        </Fade>
                        <Fade timeout={1000}>
                            <img className="services-image" src="https://bucket-softcad.s3.eu-west-2.amazonaws.com/softcad/programmingIcon2.png" id="programmingIcon" alt="servicePageImage3"></img>
                        </Fade>
                    </div>
                </div>
            </div>
        )
    }
}

export default ServicesPage
