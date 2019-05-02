import React, { useEffect } from 'react'

export default function LanguageGraphBar(props) {
    const scale = props.size / props.max
    const barStyle = {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'lightgray',
        transform: `scaleX(${scale})`,
        transformOrigin: 'left center'
    }
    return props.name && !isNaN(props.size) && (
        <div className="relative">
            <div className="absolute" style={barStyle}></div>
            <div className="relative">
                <span>{props.name}&nbsp;</span>
                <span>{props.size} bytes</span>
            </div>
        </div>
    )
}
