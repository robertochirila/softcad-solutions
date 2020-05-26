import React, { Component } from 'react'
import { Fade } from 'reactstrap'
import { isMobile, isTablet } from 'react-device-detect'

export class LocationPage extends Component {
    render() {
        return (
            <section className="section-location">
                <div className="box">
                    <h2 className="header-text-pages">Location</h2>
                    <p className="services-paragraph">From 2004 our company has been located in Galati, Romania.</p>
                    <p className="services-paragraph">Main office : Software Park Galati, 23 Strada Portului, Galati, 800025.</p>
                    <p className="services-paragraph" style={{ fontStyle: "italic" }}>Email: softcadsolutions@yahoo.com</p>
                    <a href="mailto:softcad.solutions@yahoo.com?Subject=Hello" target="_top"> Send Mail</a>
                    <img src="https://bucket-softcad.s3.eu-west-2.amazonaws.com/softcad/scs_location.jpg" className="location-image" alt="locationPageImage1"></img>
                </div>
            </section>
        )
    }
}

export default LocationPage
