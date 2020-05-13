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
                <img className="header-image" src='../img/scs_headerShip2.jpg'></img>
                <div className="services-box">
                    <Fade timeout={500}>
                        <h2 className="location-text">Location</h2>
                    </Fade>
                    <div className="column-2">
                        <Fade timeout={500}>
                            <p className="services-paragraph">FROM 2004 OUR COMPANY HAS BEEN LOCATED IN GALATI, ROMANIA.
                            MAIN OFFICE: SOFTWARE PARK GALATI, 23 PORTULUI STREET, GALAȚI, 800025.
                            CONTACT EMAIL: SOFTCAD.SOLUTIONS@YAHOO.COM
                            <a href="mailto:softcad.solutions@yahoo.com?Subject=Hello" target="_top"> Send Mail</a>
                            </p>
                        </Fade>
                    </div>
                    <div className="column-2">
                        <Fade timeout={1000}>
                            <img src="../img/scs_location.jpg" className="image-location"></img>
                        </Fade>
                    </div>
                    <button onClick={this.movePrev} className="button-prev">Back</button>
                </div>

            </div>
        )
    }
}

export default LocationPage
