import React, { Component } from 'react'


class SuccessAndFailure extends Component {
    countSuccessFailure() {
        return this.props.launchData.reduce((prevVal, currVal) => {
            if (currVal.success === true) {
                prevVal['successes']++
            } else {
                prevVal['failures']++
            }
            return prevVal
        }, {'successes': 0, 'failures': 0})
    }

    render() {
        const sandf = this.countSuccessFailure()
        return (
            <section className="graph">
                <h2>Successes and Failures</h2>
                <div className="sandf">
                    <div className="data-card success">
                        <h3>Successes</h3>
                        <h3><strong>{sandf.successes}</strong></h3>
                    </div>
                    <div className="data-card fail">
                        <h3>Failures</h3>
                        <h3><strong>{sandf.failures}</strong></h3>
                    </div>
                </div>
            </section>
        )
    }


}


export default SuccessAndFailure