import React from 'react'
import LanguageGraphBar from './LanguageGraphBar'

export default function LanguageGraph(props) {
    const maxLanguageSize = getMaxLanguageSize(props.stats)
    const totalSize = getTotalSize(props.stats)
    return props.stats.map(language => {
        return (
            <LanguageGraphBar key={language.name} name={language.name} size={language.size} max={maxLanguageSize} total={totalSize} />
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

function getTotalSize(stats) {
    if (stats instanceof Array) {
        const total = stats.reduce((accumulator, currentValue) => accumulator + currentValue.size, 0)
        return total
    } else {
        return 0
    }

}
