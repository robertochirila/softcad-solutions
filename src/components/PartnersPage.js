import React, { Component } from 'react'
import { Fade } from 'reactstrap'
import { isMobile, isTablet } from 'react-device-detect'

export class PartnersPage extends Component {
    render() {
        return (
            <section className="section-partners">
                {isMobile ?
                    <div className="box" id="partnersBox">
                        <h2 className="header-text-pages">Our Partners</h2>
                        <img src="https://bucket-softcad.s3.eu-west-2.amazonaws.com/softcad/scs_partners1.png" className="partners-logo" alt="partnersPageImage1"></img>
                        <p className="partners-paragraph">Damen Shipyard (Galati Romania, Gorinchem Holland, Shipyard Yichang China, Nakilat Qatar)</p>
                        <img src="https://bucket-softcad.s3.eu-west-2.amazonaws.com/softcad/scs_partners2.png" className="partners-logo" alt="partnersPageImage2"></img>
                        <p className="partners-paragraph">Vard Shipyard (Tulcea Romania, Braila Romania, Vung Tau , Vietnam, Aukra Norway)</p>
                        <img src="https://bucket-softcad.s3.eu-west-2.amazonaws.com/softcad/scs_partners3.png" className="partners-logo" alt="partnersPageImage3"></img>
                        <p className="partners-paragraph">Arabesque Galati, Romania</p>
                        <img src="https://bucket-softcad.s3.eu-west-2.amazonaws.com/softcad/scs_partners4.png" className="partners-logo" alt="partnersPageImage4"></img>
                        <p className="partners-paragraph">Lamprell Shipyard Sharjah, UAE</p>
                        <img src="https://bucket-softcad.s3.eu-west-2.amazonaws.com/softcad/scs_partners5.png" className="partners-logo" alt="partnersPageImage5"></img>
                        <p className="partners-paragraph">NASDIS Galati, Romania</p>
                        <img src="https://bucket-softcad.s3.eu-west-2.amazonaws.com/softcad/scs_partners6.png" className="partners-logo" alt="partnersPageImage6"></img>
                        <p className="partners-paragraph">Ship Design Group Galati, Romania</p>
                        <img src="https://bucket-softcad.s3.eu-west-2.amazonaws.com/softcad/scs_partners7.png" className="partners-logo" alt="partnersPageImage7"></img>
                        <p className="partners-paragraph">Icepronav Galati, Romania</p>
                        <img src="https://bucket-softcad.s3.eu-west-2.amazonaws.com/softcad/scs_partners8.png" className="partners-logo" alt="partnersPageImage8"></img>
                        <p className="partners-paragraph">ATG Shipyard Giurgiu, Romania</p>
                        <img src="https://bucket-softcad.s3.eu-west-2.amazonaws.com/softcad/scs_partners9.png" className="partners-logo" alt="partnersPageImage9"></img>
                        <p className="partners-paragraph">Ginton Naval Architect, Holland</p>
                    </div>
                    :
                    <div className="box">
                        <h2 className="header-text-pages" id="partnersHeader">Our Partners</h2>
                        <div className="row">
                            <div className="col-3">
                                <img src="https://bucket-softcad.s3.eu-west-2.amazonaws.com/softcad/scs_partners1.png" className="partners-logo" alt="partnersPageImage1"></img>
                                <p className="partners-paragraph">Damen Shipyard (Galati Romania, Gorinchem Holland, Shipyard Yichang China, Nakilat Qatar)</p>
                            </div>
                            <div className="col-3">
                                <img src="https://bucket-softcad.s3.eu-west-2.amazonaws.com/softcad/scs_partners2.png" className="partners-logo" alt="partnersPageImage2"></img>
                                <p className="partners-paragraph">Vard Shipyard (Tulcea Romania, Braila Romania, Vung Tau , Vietnam, Aukra Norway)</p>
                            </div>
                            <div className="col-3">
                                <img src="https://bucket-softcad.s3.eu-west-2.amazonaws.com/softcad/scs_partners3.png" className="partners-logo" alt="partnersPageImage3"></img>
                                <p className="partners-paragraph">Arabesque Galati, Romania</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <img src="https://bucket-softcad.s3.eu-west-2.amazonaws.com/softcad/scs_partners4.png" className="partners-logo" alt="partnersPageImage4"></img>
                                <p className="partners-paragraph">Lamprell Shipyard Sharjah, UAE</p>
                            </div>
                            <div className="col-3">
                                <img src="https://bucket-softcad.s3.eu-west-2.amazonaws.com/softcad/scs_partners5.png" className="partners-logo" alt="partnersPageImage5"></img>

                                <p className="partners-paragraph">NASDIS Galati, Romania</p>
                            </div>
                            <div className="col-3">
                                <img src="https://bucket-softcad.s3.eu-west-2.amazonaws.com/softcad/scs_partners6.png" className="partners-logo" alt="partnersPageImage6"></img>
                                <p className="partners-paragraph">Ship Design Group Galati, Romania</p>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <img src="https://bucket-softcad.s3.eu-west-2.amazonaws.com/softcad/scs_partners7.png" className="partners-logo" alt="partnersPageImage7"></img>
                                <p className="partners-paragraph">Icepronav Galati, Romania</p>
                            </div>
                            <div className="col-3">
                                <img src="https://bucket-softcad.s3.eu-west-2.amazonaws.com/softcad/scs_partners8.png" className="partners-logo" alt="partnersPageImage8"></img>
                                <p className="partners-paragraph">ATG Shipyard Giurgiu, Romania</p>
                            </div>
                            <div className="col-3">
                                <img src="https://bucket-softcad.s3.eu-west-2.amazonaws.com/softcad/scs_partners9.png" className="partners-logo" alt="partnersPageImage9"></img>
                                <p className="partners-paragraph">Ginton Naval Architect, Holland</p>
                            </div>
                        </div>
                    </div>
                }
            </section>
        )
    }
}

export default PartnersPage
