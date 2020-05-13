import React, { Component } from 'react'
import { Fade } from 'reactstrap';


export class NavalProjectsPage extends Component {
    moveNext = (e) => {
        e.preventDefault()
        this.props.incrementStep()
    }
    movePrev = (e) => {
        e.preventDefault()
        this.props.decrementStep()
    }
    render() {
        return (
            <div className="section-naval">
                <img className="header-image" src='../img/scs_headerShip2.jpg'></img>
                <div className="services-box">
                    <div className="services-box-left">
                        <Fade timeout={500}>
                            <div>
                                <h2 className="header-naval">EasyShipDesign projects</h2>
                                <p className="services-paragraph">ESD model screenshot and picture from shipyards during ship building stages</p>
                            </div>
                        </Fade>
                        <div>
                            <Fade timeout={750}>
                                <img className="image-naval-collection" src="../img/scs_naval1.png"></img>
                            </Fade>
                            <Fade timeout={1000}>
                                <img className="image-naval-collection" src="../img/scs_naval2.png"></img>
                            </Fade>

                        </div>
                        <button onClick={this.movePrev} className="button-prev">Back</button>

                    </div>
                    <div className="services-box-right">
                        <Fade timeout={500}>
                            <div>
                                <h2 className="header-naval">Ships and more...</h2>
                                <p className="services-paragraph">We can create ship 3D model but also any kind of steel structure</p>
                            </div>
                        </Fade>
                        <div>
                            <Fade timeout={1250}>
                                <img className="image-naval-collection" src="../img/scs_naval3.png"></img>
                            </Fade>
                            <Fade timeout={1500}>
                                <img className="image-naval-collection" src="../img/scs_naval4.png"></img>
                            </Fade>
                        </div>
                        <button onClick={this.moveNext} className="button-next">Next</button>

                    </div>
                </div>
            </div>
        )
    }
}

export default NavalProjectsPage
