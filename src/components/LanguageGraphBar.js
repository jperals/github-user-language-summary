import React from 'react'
import roundTo from 'round-to'

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
    const amount = props.total ?
        roundTo(100 * props.size / props.total, 2) + '%'
        :
        props.size + ' bytes'
    return props.name && !isNaN(props.size) && (
        <div className="flex flex-row mb3">
            <div className="w4 tr">
                <span className="mr2">{props.name}</span>
            </div>
            <div className="flex-grow relative mr6" style={{flexGrow: 1}}>
                <div className="absolute" style={barStyle} title={props.total && props.size + ' bytes'}></div>
                <div className="relative ml2" style={statsTextStyle}>
                    <span>{amount}</span>
                </div>
            </div>
        </div >
    )
}
