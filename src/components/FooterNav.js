import React, { Component } from 'react'
import { Fade } from 'reactstrap'
import { isMobile } from 'react-device-detect'

export class FooterNav extends Component {
    moveNext = (e) => {
        e.preventDefault()
        this.props.incrementStep()
    }
    movePrev = (e) => {
        e.preventDefault()
        this.props.decrementStep()
    }
    render() {
        const { step } = this.props
        return (
            <Fade timeout={2000}>
                <div className={isMobile ? "nav" : "footer"}>
                    <button onClick={this.movePrev} className="button" id="buttonPrev">Back</button>
                    {step < 6 ?
                        <button onClick={this.moveNext} className="button" id="buttonNext">Next</button>
                        :
                        <div></div>
                    }
                </div>
            </Fade>
        )
    }
}

export default FooterNav
