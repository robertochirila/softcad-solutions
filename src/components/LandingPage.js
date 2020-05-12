import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
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
    render() {
        return (
            <div>
                <Carousel showThumbs={false}>
                    <div>
                        <img src="../img/scs_headerShip.jpg"></img>
                    </div>
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
