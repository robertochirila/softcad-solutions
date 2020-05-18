import React, { Component } from 'react'
import { Fade } from 'reactstrap'
import { isMobile } from 'react-device-detect'

export class LocationPage extends Component {

    movePrev = (e) => {
        e.preventDefault()
        this.props.decrementStep()
    }
    render() {
        const alignAnchorMobile = {
            marginLeft: "5%"
        }
        return (
            <div className="section-location">
                <div className="overlay">
                    <img className="header-image" src='../img/scs_headerShip2.jpg'></img>
                </div>
                <div className="services-box">
                    <Fade timeout={500}>
                        <h2 className="location-text">Location</h2>
                    </Fade>
                    <div className="column-2">
                        <Fade timeout={500}>
                            <p className="services-paragraph">From 2004 our company has been located in Galati, Romania.</p>
                            <p className="services-paragraph ">Main office : Software Park Galati, 23 Strada Portului, Galati, 800025.</p>
                            <p className="services-paragraph" style={{ color: "red", fontSize: "60%" }}>CONTACT EMAIL: SOFTCAD.SOLUTIONS@YAHOO.COM</p>
                            <a href="mailto:softcad.solutions@yahoo.com?Subject=Hello" style={isMobile ? alignAnchorMobile : null} target="_top"> Send Mail</a>
                        </Fade>
                    </div>
                    <div className="column-2">
                        <Fade timeout={1000}>
                            <div className="alignMobile">
                                <img src="../img/scs_location.jpg" className="image-location"></img>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        )
    }
}

export default LocationPage
