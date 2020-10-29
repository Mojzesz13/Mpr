import React from 'react'
import './arrow.scss'

function arrow( {arrowColor}) {
    const borderStyle= `0.4rem solid ${arrowColor}`
    const style= {borderBottom: borderStyle, borderRight: borderStyle}

    return (
        <div className="arrow">
            <span style={style}></span>
            <span style={style}></span>
            <span style={style}></span>
        </div>
    )
}

export default arrow
