import React from 'react'
import './LoadingGraph.css'

export default function LoadingGraph() {
    const bars = []
    for (let i = 0; i < 5; i++) {
        const style = {
            animationDuration: (1 + Math.random(3)) + 's'
        }
        bars.push(<div className="LoadingGraphBar mb3 ml6 flex-grow relative mr6 bg-light-gray" key={i} style={style}>&nbsp;</div>)
    }
    return (
        <div>
            {bars}
        </div>
    )
}

