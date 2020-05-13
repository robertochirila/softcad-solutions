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
                <img className="header-image" src='../img/scs_headerShip2.jpg'></img>
                <div className="services-box">
                    <div className="services-box-left">
                        <div>
                            <Fade timeout={500}>
                                <h2 className="header-software">Ship design software applications</h2>
                                <p className="services-paragraph-software">Easy Ship Design : ship design system</p>
                                <p className="services-paragraph-software">Autonesting : plates and profiles parts automatic nesting system , cnc files code generation</p>
                                <p className="services-paragraph-software">ShellPlates : ship 3D surfaces modeller, seams and butts arrangement , surface expansion 2D parts</p>
                            </Fade>
                            <Fade timeout={1000}>
                                <img className="image-software-collection" src="../img/scs_software1.png"></img>
                                <img className="image-software-collection" src="../img/scs_software2.png"></img>
                            </Fade>
                        </div>
                        <div>
                            <img></img>
                        </div>
                        <button onClick={this.movePrev} className="button-prev">Back</button>

                    </div>
                    <div className="services-box-right">
                        <div>
                            <Fade timeout={500}>
                                <h2 className="header-software">Custom software applications , few representative from more</h2>
                                <p className="services-paragraph-software">SERPO : shipyard ERP system , mySQL database server</p>
                                <p className="services-paragraph-software">SICA : house roof surface calculation</p>
                                <p className="services-paragraph-software"> SORT : automatically loading and routing of truck fleet</p>
                                <p className="services-paragraph-software">AMOB : kitched 3D modeller and cutting plan</p>
                            </Fade>
                            <Fade timeout={1000}>
                                <img className="image-software-collection" src="../img/scs_software3.png"></img>
                                <img className="image-software-collection" src="../img/scs_software4.png"></img>
                            </Fade>
                        </div>
                        <div>
                            <img></img>
                        </div>
                        <button onClick={this.moveNext} className="button-next">Next</button>

                    </div>
                </div>
            </div>
        )
    }
}

export default SoftwareProjectsPage
