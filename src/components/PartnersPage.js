import React, { Component } from 'react'

export class PartnersPage extends Component {
    render() {
        return (
            <div className="section-partners-location">
                <img className="header-image" src='../img/scs_headerShip2.jpg'></img>
                <div className="services-box">
                    <div className="row">
                        <h2 className="partners-text">Our Partners</h2>
                        <div className="column-3">
                            <img src="../img/scs_partners1.png" className="logo-partners"></img>
                            <p>Damen Shipyard (Galati Romania, Gorinchem Holland, Shipyard Yichang China, Nakilat Qatar)</p>
                        </div>
                        <div className="column-3">
                            <img src="../img/scs_partners2.png" className="logo-partners"></img>
                            <p>Vard Shipyard (Tulcea Romania, Braila Romania, Vung Tau , Vietnam, Aukra Norway)</p>
                        </div>
                        <div className="column-3">
                            <img src="../img/scs_partners3.png" className="logo-partners"></img>
                            <p>Arabesque Galati, Romania</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="column-3">
                            <img src="../img/scs_partners4.png" className="logo-partners"></img>
                            <p>Lamprell Shipyard Sharjah, UAE</p>
                        </div>
                        <div className="column-3">
                            <img src="../img/scs_partners5.png" className="logo-partners"></img>
                            <p>NASDIS Galati, Romania</p>
                        </div>
                        <div className="column-3">
                            <img src="../img/scs_partners6.png" className="logo-partners"></img>
                            <p>Ship Design Group Galati, Romania</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="column-3">
                            <img src="../img/scs_partners7.png" className="logo-partners"></img>
                            <p>Icepronav Galati, Romania</p>
                        </div>
                        <div className="column-3">
                            <img src="../img/scs_partners8.png" className="logo-partners"></img>
                            <p>ATG Shipyard Giurgiu, Romania</p>
                        </div>
                        <div className="column-3">
                            <img src="../img/scs_partners9.png" className="logo-partners"></img>
                            <p>Ginton Naval Architect, Holland</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PartnersPage
