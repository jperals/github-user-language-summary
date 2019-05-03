import React, { useEffect, useState } from 'react'
import getLanguageStats from './getLanguageStats'
import LanguageGraph from './components/LanguageGraph'

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
        return <LanguageGraph stats={stats} />
    } else if(isLoading) {
        return <div className="pl6-l">Loading...</div>
    }
    return ''
}
