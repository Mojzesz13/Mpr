import React from 'react'
import './arrow.scss'

function arrow( {arrowColor}) {
    const borderStyle= `0.4rem solid ${arrowColor}`

    return (
        <div className="arrow">
                <span style={{borderBottom: borderStyle, borderRight: borderStyle}}></span>
                <span style={{borderBottom: borderStyle, borderRight: borderStyle}}></span>
                <span style={{borderBottom: borderStyle, borderRight: borderStyle}}></span>
                
        </div>
    )
}

export default arrow
