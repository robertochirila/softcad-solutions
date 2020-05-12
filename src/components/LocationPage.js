import React, { Component } from 'react'

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
                    <h2 className="location-text">Location</h2>
                    <div className="column-2">
                        <p className="services-paragraph">FROM 2004 OUR COMPANY HAS BEEN LOCATED IN GALATI, ROMANIA.
                        MAIN OFFICE: SOFTWARE PARK GALATI, 23 PORTULUI STREET, GALAȚI, 800025.
                        CONTACT EMAIL: SOFTCAD.SOLUTIONS@YAHOO.COM
                            <a href="mailto:softcad.solutions@yahoo.com?Subject=Hello" target="_top"> Send Mail</a>
                        </p>
                    </div>
                    <div className="column-2">
                        <img src="../img/scs_location.jpg" className="image-location"></img>
                    </div>
                    <button onClick={this.movePrev}>Back</button>
                </div>

            </div>
        )
    }
}

export default LocationPage
