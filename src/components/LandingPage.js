import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import '../styles/LandingPage.css'
import { Spring } from 'react-spring/renderprops'
import { LocationPage } from './LocationPage'
import { PartnersPage } from './PartnersPage'
import { ProjectsPage } from './ProjectsPage'
import { ServicesPage } from './ServicesPage'



export class LandingPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            step: 1
        }
    }

    onClickHandler = () => {
        let getNextArrow = document.getElementsByClassName('control-arrow control-next')[0]
        getNextArrow.click()
        console.log(getNextArrow)
    }
    render() {
        return (
            <div>
                <Carousel showArrows={true}>
                    <React.Fragment>
                        <header>
                            <img className="header-image" src="../img/scs_headerShip.jpg" ></img>
                            <div className="header-text-box">
                                <h1 className="header-text">Softcad Solutions <br /> Designing ships and <br /> custom software since 2002.</h1>
                                <button onClick={this.onClickHandler} className="header-button">Show me More</button>
                            </div>
                        </header>

                    </React.Fragment>
                    <div>
                        <ServicesPage />
                    </div>
                    <div>
                        <ProjectsPage />
                    </div>
                    <div>
                        <PartnersPage />
                    </div>
                    <div>
                        <LocationPage />
                    </div>
                </Carousel>

            </div>
        )
    }
}

export default LandingPage
