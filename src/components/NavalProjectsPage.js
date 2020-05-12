import React, { Component } from 'react'

export class NavalProjectsPage extends Component {
    render() {
        return (
            <div className="section-naval">
                <img className="header-image" src='../img/scs_headerShip2.jpg'></img>
                <div className="services-box">
                    <div className="services-box-left">
                        <div>
                            <h2 className="header-naval">EasyShipDesign projects</h2>
                            <p className="services-paragraph">ESD model screenshot and picture from shipyards during ship building stages</p>
                        </div>
                        <div>
                            <img className="header-image-naval-collection" src="../img/scs_naval1.png"></img>
                            <img className="header-image-naval-collection" src="../img/scs_naval2.png"></img>

                        </div>
                    </div>
                    <div className="services-box-right">
                        <div>
                            <h2 className="header-naval">Ships and more...</h2>
                            <p className="services-paragraph">We can create ship 3D model but also any kind of steel structure</p>
                        </div>
                        <div>
                            <img className="header-image-naval-collection" src="../img/scs_naval3.png"></img>
                            <img className="header-image-naval-collection" src="../img/scs_naval4.png"></img>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NavalProjectsPage
