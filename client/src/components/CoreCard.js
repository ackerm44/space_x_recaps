import React from 'react'

const CoreCard = (props) => {
    const reuseSize = () => {
        if (props.core.reuse_count <= 1) {
            return 1
        } else {
            return props.core.reuse_count / 2
        }
    }
    return (
        <section className="launchCard">
            <p className={`status ${props.core.status}`}>Status: {props.core.status.toUpperCase()}</p>
            <h3>{props.core.serial}</h3>
            {props.core.block !== null && <p>Block {props.core.block}</p>}
            <p>Last Update: {props.core.last_update ? props.core.last_update : 'Unknown'}</p>
            <p className="reuse_count-display">Reuse Count: <span style={{fontSize: reuseSize()+'em'}}>{props.core.reuse_count}</span></p>
        </section>
    )
}

export default CoreCard