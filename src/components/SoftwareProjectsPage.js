import React, { Component } from 'react'
import { Fade } from 'reactstrap'

export class SoftwareProjectsPage extends Component {
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
            <div className="section-software">
                <Fade timeout={500}>
                    <div className="overlay">
                        <img className="header-image" src='../img/scs_headerShip2.jpg'></img>
                    </div>
                </Fade>
                <div className="services-box">
                    <div className="services-box-left">
                        <div>
                            <Fade timeout={1000}>
                                <h2 className="header-software">Ship design software applications and more</h2>
                                <p className="services-paragraph-software">Easy Ship Design : ship design system</p>
                                <p className="services-paragraph-software">Autonesting : plates and profiles parts automatic nesting system , cnc files code generation</p>
                                <p className="services-paragraph-software">ShellPlates : ship 3D surfaces modeller, seams and butts arrangement , surface expansion 2D parts</p>
                            </Fade>
                            <Fade timeout={1250}>
                                <img className="image-software-collection" src="../img/scs_software1.png"></img>
                                <img className="image-software-collection" src="../img/scs_software2.png"></img>
                            </Fade>
                        </div>
                        <div>
                            <img></img>
                        </div>

                    </div>
                    <div className="services-box-right">
                        <div>
                            <Fade timeout={1000}>
                                <h2 className="header-software" id="headerSoftware">Custom software applications , a few examples</h2>
                                <p className="services-paragraph-software black">SERPO : shipyard ERP system , mySQL database server</p>
                                <p className="services-paragraph-software black">SICA : house roof surface calculation</p>
                                <p className="services-paragraph-software black"> SORT : automatically loading and routing of truck fleet</p>
                                <p className="services-paragraph-software black">AMOB : kitched 3D modeller and cutting plan</p>
                            </Fade>
                            <Fade timeout={1250}>
                                <img className="image-software-collection" src="../img/scs_software3.png"></img>
                                <img className="image-software-collection" src="../img/scs_software4.png"></img>
                            </Fade>
                        </div>
                        <div>
                            <img></img>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default SoftwareProjectsPage
