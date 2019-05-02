import React, { useEffect, useState } from 'react'
import getLanguageStats from './getLanguageStats'
import LanguageGraphBar from './components/LanguageGraphBar'

export default function Stats(props) {
    const [stats, setStats] = useState()
    const [isLoading, setLoadingState] = useState(false)

    useEffect(
        () => {
            if (!props.username) {
                setStats()
                setLoadingState(false)
                return
            }
            setLoadingState(true)
            async function fetchData() {
                const newStats = await getLanguageStats(props.username)
                setStats(newStats)
                setLoadingState(false)
            }
            fetchData()
        },
        [props.username]
    )

    if(stats instanceof Array) {
        const maxLanguageSize = getMaxLanguageSize(stats)
        return stats.map(language => {
            return (
                <LanguageGraphBar key={language.name} name={language.name} size={language.size} max={maxLanguageSize} />
                )
        })
    } else if(isLoading) {
        return 'Loading...'
    }
    return ''
}

function getMaxLanguageSize(stats) {
    if(stats instanceof Array) {
        return Math.max(stats.map(language => language.size))
    } else {
        return 0
    }
}
