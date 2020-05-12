import React, { Component } from 'react'

export class ServicesPage extends Component {
    render() {
        return (
            <div className="section-services">
                <img className="header-image" src='../img/scs_headerShip2.jpg'></img>
                <div className="services-box">
                    <div className="services-box-left">
                        <div>
                            <p className="services-paragraph">We already have the tools and expertise and we can create detailed 3D ship model database, drawings and complete shipbuilding production information</p>
                            <button className="services-button-naval">Naval Projects</button>
                        </div>
                        <div>
                            <img src="../img/scs_navalProject3.PNG" className="header-image-naval"></img>
                        </div>
                    </div>
                    <div className="services-box-right">
                        <div>
                            <p className="services-paragraph">Our main goal is to create new software applications for ship design, 3D modelling, CAD/CAM production information,custom oriented applications</p>
                            <button className="services-button-software">Software Projects</button>
                        </div>
                        <div>
                            <img className="header-image-software" src="../img/programmingIcon2.png"></img>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ServicesPage
