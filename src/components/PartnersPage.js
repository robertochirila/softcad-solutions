import React, { Component } from 'react'
import { Fade } from 'reactstrap'
import { isMobile, isTablet } from 'react-device-detect'

export class PartnersPage extends Component {
    moveNext = (e) => {
        e.preventDefault()
        this.props.incrementStep()
    }



    movePrev = (e) => {
        e.preventDefault()
        this.props.decrementStep()
    }
    render() {
        const displayNone = { display: "none" }
        const display = { display: "inline-block" }
        return (
            <div className="section-partners">
                <div className="overlay">
                    <img className="header-image" style={isMobile ? displayNone : display} id="headerImagePartners" src='../img/scs_headerShip2.jpg' alt="partnersPageImage"></img>
                </div>
                <div className="services-box">
                    <h2 className={isTablet ? "partners-text black" : "partners-text"}>Our Partners</h2>
                    <div className="row">
                        <div className="column-3">
                            <Fade timeout={500}>
                                <div className="image-wrapper-mobile">
                                    <img src="../img/scs_partners1.png" className="logo-partners" alt="partnersPageImage1"></img>
                                </div>
                                <p className={isTablet ? "partner-paragraph black" : "partner-paragraph"}>Damen Shipyard (Galati Romania, Gorinchem Holland, Shipyard Yichang China, Nakilat Qatar)</p>
                            </Fade>
                        </div>
                        <div className="column-3">
                            <Fade timeout={750}>
                                <div className="image-wrapper-mobile">
                                    <img src="../img/scs_partners2.png" className="logo-partners" alt="partnersPageImage2"></img>
                                </div>
                                <p className={isTablet ? "partner-paragraph black" : "partner-paragraph"}>Vard Shipyard (Tulcea Romania, Braila Romania, Vung Tau , Vietnam, Aukra Norway)</p>
                            </Fade>
                        </div>
                        <div className="column-3">
                            <Fade timeout={1000}>
                                <div className="image-wrapper-mobile">
                                    <img src="../img/scs_partners3.png" className="logo-partners" alt="partnersPageImage3"></img>
                                </div>
                                <p className={isTablet ? "partner-paragraph black" : "partner-paragraph"}>Arabesque Galati, Romania</p>
                            </Fade>
                        </div>
                    </div>
                    <div className="row">
                        <div className="column-3">
                            <Fade timeout={1250}>
                                <div className="image-wrapper-mobile">
                                    <img src="../img/scs_partners4.png" className="logo-partners" alt="partnersPageImage4"></img>
                                </div>
                                <p className={isTablet ? "partner-paragraph black" : "partner-paragraph"}>Lamprell Shipyard Sharjah, UAE</p>
                            </Fade>
                        </div>
                        <div className="column-3">
                            <Fade timeout={1500}>
                                <div className="image-wrapper-mobile">

                                    <img src="../img/scs_partners5.png" className="logo-partners" alt="partnersPageImage5"></img>
                                </div>
                                <p className={isTablet ? "partner-paragraph black" : "partner-paragraph"}>NASDIS Galati, Romania</p>
                            </Fade>
                        </div>
                        <div className="column-3">
                            <Fade timeout={1750}>
                                <div className="image-wrapper-mobile">
                                    <img src="../img/scs_partners6.png" className="logo-partners" alt="partnersPageImage6"></img>
                                </div>
                                <p className={isTablet ? "partner-paragraph black" : "partner-paragraph"}>Ship Design Group Galati, Romania</p>
                            </Fade>
                        </div>
                    </div>
                    <div className="row">
                        <div className="column-3">
                            <Fade timeout={2000}>
                                <div className="image-wrapper-mobile">

                                    <img src="../img/scs_partners7.png" className="logo-partners" alt="partnersPageImage7"></img>
                                </div>
                                <p className={isTablet ? "partner-paragraph black" : "partner-paragraph"}>Icepronav Galati, Romania</p>
                            </Fade>
                        </div>
                        <div className="column-3">
                            <Fade timeout={2250}>
                                <div className="image-wrapper-mobile">

                                    <img src="../img/scs_partners8.png" className="logo-partners" alt="partnersPageImage8"></img>
                                </div>
                                <p className={isTablet ? "partner-paragraph black" : "partner-paragraph"}>ATG Shipyard Giurgiu, Romania</p>
                            </Fade>
                        </div>
                        <div className="column-3">
                            <Fade timeout={2500}>
                                <div className="image-wrapper-mobile">

                                    <img src="../img/scs_partners9.png" className="logo-partners" alt="partnersPageImage9"></img>
                                </div>
                                <p className={isTablet ? "partner-paragraph black" : "partner-paragraph"}>Ginton Naval Architect, Holland</p>
                            </Fade>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default PartnersPage
