import React from 'react'

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
    const statsTextStyle = {
        left: 100 * scale + '%'
    }
    return props.name && !isNaN(props.size) && (
        <div className="flex flex-row mb3">
            <div className="w4 tr">
                <span className="mr2">{props.name}</span>
            </div>
            <div className="flex-grow relative mr4" style={{flexGrow: 1}}>
                <div className="absolute" style={barStyle}></div>
                <div className="relative ml2" style={statsTextStyle}>
                    <span>{props.size} bytes</span>
                </div>
            </div>
        </div >
    )
}
