import React, { Component } from 'react'
import { Fade } from 'reactstrap'

export class LocationPage extends Component {

    movePrev = (e) => {
        e.preventDefault()
        this.props.decrementStep()
    }
    render() {
        return (
            <div>
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
                            <p className="services-paragraph">CONTACT EMAIL: SOFTCAD.SOLUTIONS@YAHOO.COM </p>
                            <a href="mailto:softcad.solutions@yahoo.com?Subject=Hello" target="_top"> Send Mail</a>
                        </Fade>
                    </div>
                    <div className="column-2">
                        <Fade timeout={1000}>
                            <img src="../img/scs_location.jpg" className="image-location"></img>
                        </Fade>
                    </div>
                </div>

            </div >
        )
    }
}

export default LocationPage
