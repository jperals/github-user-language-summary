import React from 'react'
import LanguageGraphBar from './LanguageGraphBar'

export default function LanguageGraph(props) {
    const maxLanguageSize = getMaxLanguageSize(props.stats)
    return props.stats.map(language => {
        return (
            <LanguageGraphBar key={language.name} name={language.name} size={language.size} max={maxLanguageSize} />
        )
    })
}

function getMaxLanguageSize(stats) {
    if (stats instanceof Array) {
        return Math.max(...stats.map(language => language.size))
    } else {
        return 0
    }
}
