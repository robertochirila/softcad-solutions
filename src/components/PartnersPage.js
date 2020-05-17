import React, { Component } from 'react'
import { Fade } from 'reactstrap'
import { isMobile } from 'react-device-detect'

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
                    <img className="header-image" style={isMobile ? displayNone : display} id="headerImagePartners" src='../img/scs_headerShip2.jpg'></img>
                </div>
                <div className="services-box">
                    <h2 className="partners-text">Our Partners</h2>
                    <div className="row">
                        <div className="column-3">
                            <Fade timeout={500}>
                                <img src="../img/scs_partners1.png" className="logo-partners"></img>
                                <p className="partner-paragraph">Damen Shipyard (Galati Romania, Gorinchem Holland, Shipyard Yichang China, Nakilat Qatar)</p>
                            </Fade>
                        </div>
                        <div className="column-3">
                            <Fade timeout={750}>
                                <img src="../img/scs_partners2.png" className="logo-partners"></img>
                                <p className="partner-paragraph">Vard Shipyard (Tulcea Romania, Braila Romania, Vung Tau , Vietnam, Aukra Norway)</p>
                            </Fade>
                        </div>
                        <div className="column-3">
                            <Fade timeout={1000}>
                                <img src="../img/scs_partners3.png" className="logo-partners"></img>
                                <p className="partner-paragraph">Arabesque Galati, Romania</p>
                            </Fade>
                        </div>
                    </div>
                    <div className="row">
                        <div className="column-3">
                            <Fade timeout={1250}>
                                <img src="../img/scs_partners4.png" className="logo-partners"></img>
                                <p className="partner-paragraph">Lamprell Shipyard Sharjah, UAE</p>
                            </Fade>
                        </div>
                        <div className="column-3">
                            <Fade timeout={1500}>
                                <img src="../img/scs_partners5.png" className="logo-partners"></img>
                                <p className="partner-paragraph">NASDIS Galati, Romania</p>
                            </Fade>
                        </div>
                        <div className="column-3">
                            <Fade timeout={1750}>
                                <img src="../img/scs_partners6.png" className="logo-partners"></img>
                                <p className="partner-paragraph">Ship Design Group Galati, Romania</p>
                            </Fade>
                        </div>
                    </div>
                    <div className="row">
                        <div className="column-3">
                            <Fade timeout={2000}>
                                <img src="../img/scs_partners7.png" className="logo-partners"></img>
                                <p className="partner-paragraph">Icepronav Galati, Romania</p>
                            </Fade>
                        </div>
                        <div className="column-3">
                            <Fade timeout={2250}>
                                <img src="../img/scs_partners8.png" className="logo-partners"></img>
                                <p className="partner-paragraph">ATG Shipyard Giurgiu, Romania</p>
                            </Fade>
                        </div>
                        <div className="column-3">
                            <Fade timeout={2500}>
                                <img src="../img/scs_partners9.png" className="logo-partners"></img>
                                <p className="partner-paragraph">Ginton Naval Architect, Holland</p>
                            </Fade>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default PartnersPage
