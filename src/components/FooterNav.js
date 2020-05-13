import React, { Component } from 'react'

export class FooterNav extends Component {
    moveNext = (e) => {
        const { step } = this.props
        e.preventDefault()

        this.props.incrementStep()


    }
    movePrev = (e) => {
        e.preventDefault()
        this.props.decrementStep()
    }
    render() {
        return (
            <div className="footer">
                <button onClick={this.movePrev} className="button-prev">Back</button>
                <button onClick={this.moveNext} className="button-next">Next</button>
            </div>
        )
    }
}

export default FooterNav
