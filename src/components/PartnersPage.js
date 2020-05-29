import React, { Component } from 'react'
import { Fade } from 'reactstrap'
import { isMobile, isTablet } from 'react-device-detect'

export class PartnersPage extends Component {
    render() {
        return (
            <section className="section-partners">
                {isMobile ?
                    <div className="box" id="partnersBox">
                        <h2 id="partnersHeader">Our Partners</h2>
                        <Fade timeout={500}>
                            <img src="https://bucket-softcad.s3.eu-west-2.amazonaws.com/softcad/scs_partners1.png" className="partners-logo" alt="partnersPageImage1"></img>
                            <p className="partners-paragraph">Damen Shipyard (Galati Romania, Gorinchem Holland, Shipyard Yichang China, Nakilat Qatar)</p>
                        </Fade>
                        <Fade timeout={750}>
                            <img src="https://bucket-softcad.s3.eu-west-2.amazonaws.com/softcad/scs_partners2.png" className="partners-logo" alt="partnersPageImage2"></img>
                            <p className="partners-paragraph">Vard Shipyard (Tulcea Romania, Braila Romania, Vung Tau , Vietnam, Aukra Norway)</p>
                        </Fade>
                        <Fade timeout={1000}>
                            <img src="https://bucket-softcad.s3.eu-west-2.amazonaws.com/softcad/scs_partners3.png" className="partners-logo" alt="partnersPageImage3"></img>
                            <p className="partners-paragraph">Arabesque Galati, Romania</p>
                        </Fade>
                        <Fade timeout={1250}>
                            <img src="https://bucket-softcad.s3.eu-west-2.amazonaws.com/softcad/scs_partners4.png" className="partners-logo" alt="partnersPageImage4"></img>
                            <p className="partners-paragraph">Lamprell Shipyard Sharjah, UAE</p>
                        </Fade>
                        <Fade timeout={1500}>
                            <img src="https://bucket-softcad.s3.eu-west-2.amazonaws.com/softcad/scs_partners5.png" className="partners-logo" alt="partnersPageImage5"></img>
                            <p className="partners-paragraph">NASDIS Galati, Romania</p>
                        </Fade>
                        <Fade timeout={1750}>
                            <img src="https://bucket-softcad.s3.eu-west-2.amazonaws.com/softcad/scs_partners6.png" className="partners-logo" alt="partnersPageImage6"></img>
                            <p className="partners-paragraph">Ship Design Group Galati, Romania</p>
                        </Fade>
                        <Fade timeout={2000}>
                            <img src="https://bucket-softcad.s3.eu-west-2.amazonaws.com/softcad/scs_partners7.png" className="partners-logo" alt="partnersPageImage7"></img>
                            <p className="partners-paragraph">Icepronav Galati, Romania</p>
                        </Fade>
                        <Fade timeout={2250}>
                            <img src="https://bucket-softcad.s3.eu-west-2.amazonaws.com/softcad/scs_partners8.png" className="partners-logo" alt="partnersPageImage8"></img>
                            <p className="partners-paragraph">ATG Shipyard Giurgiu, Romania</p>
                        </Fade>
                        <Fade timeout={2500}>
                            <img src="https://bucket-softcad.s3.eu-west-2.amazonaws.com/softcad/scs_partners9.png" className="partners-logo" alt="partnersPageImage9"></img>
                            <p className="partners-paragraph">Ginton Naval Architect, Holland</p>
                        </Fade>
                    </div>
                    :
                    <div className="box" id="customPartnersBox">
                        <div className="row-custom">
                            <div className="col-3-custom">
                                <Fade timeout={500}>
                                    <img src="https://bucket-softcad.s3.eu-west-2.amazonaws.com/softcad/scs_partners1.png" className="partners-logo" alt="partnersPageImage1"></img>
                                    <p className="partners-paragraph">Damen Shipyard (Galati Romania, Gorinchem Holland, Shipyard Yichang China, Nakilat Qatar)</p>
                                </Fade>
                            </div>
                            <div className="col-3-custom">
                                <Fade timeout={750}>
                                    <img src="https://bucket-softcad.s3.eu-west-2.amazonaws.com/softcad/scs_partners2.png" className="partners-logo" alt="partnersPageImage2"></img>
                                    <p className="partners-paragraph">Vard Shipyard (Tulcea Romania, Braila Romania, Vung Tau , Vietnam, Aukra Norway)</p>
                                </Fade>
                            </div>
                            <div className="col-3-custom">
                                <Fade timeout={1000}>
                                    <img src="https://bucket-softcad.s3.eu-west-2.amazonaws.com/softcad/scs_partners3.png" className="partners-logo" alt="partnersPageImage3"></img>
                                    <p className="partners-paragraph">Arabesque Galati, Romania</p>
                                </Fade>
                            </div>
                        </div>
                        <div className="row-custom">
                            <div className="col-3-custom">
                                <Fade timeout={1250}>
                                    <img src="https://bucket-softcad.s3.eu-west-2.amazonaws.com/softcad/scs_partners4.png" className="partners-logo" alt="partnersPageImage4"></img>
                                    <p className="partners-paragraph">Lamprell Shipyard Sharjah, UAE</p>
                                </Fade>
                            </div>
                            <div className="col-3-custom">
                                <Fade timeout={1500}>
                                    <img src="https://bucket-softcad.s3.eu-west-2.amazonaws.com/softcad/scs_partners5.png" className="partners-logo" alt="partnersPageImage5"></img>

                                    <p className="partners-paragraph">NASDIS Galati, Romania</p>
                                </Fade>
                            </div>
                            <div className="col-3-custom">
                                <Fade timeout={1750}>
                                    <img src="https://bucket-softcad.s3.eu-west-2.amazonaws.com/softcad/scs_partners6.png" className="partners-logo" alt="partnersPageImage6"></img>
                                    <p className="partners-paragraph">Ship Design Group Galati, Romania</p>
                                </Fade>

                            </div>
                        </div>
                        <div className="row-custom">
                            <div className="col-3-custom">
                                <Fade timeout={2000}>
                                    <img src="https://bucket-softcad.s3.eu-west-2.amazonaws.com/softcad/scs_partners7.png" className="partners-logo" alt="partnersPageImage7"></img>
                                    <p className="partners-paragraph">Icepronav Galati, Romania</p>
                                </Fade>
                            </div>
                            <div className="col-3-custom">
                                <Fade timeout={2250}>
                                    <img src="https://bucket-softcad.s3.eu-west-2.amazonaws.com/softcad/scs_partners8.png" className="partners-logo" alt="partnersPageImage8"></img>
                                    <p className="partners-paragraph">ATG Shipyard Giurgiu, Romania</p>
                                </Fade>
                            </div>
                            <div className="col-3-custom">
                                <Fade timeout={2500}>
                                    <img src="https://bucket-softcad.s3.eu-west-2.amazonaws.com/softcad/scs_partners9.png" className="partners-logo" alt="partnersPageImage9"></img>
                                    <p className="partners-paragraph">Ginton Naval Architect, Holland</p>
                                </Fade>
                            </div>
                        </div>
                    </div>
                }
            </section>
        )
    }
}

export default PartnersPage
