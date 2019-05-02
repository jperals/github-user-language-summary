import React, { useEffect, useState } from 'react'
import getLanguageStats from './getLanguageStats'

export default function Stats(props) {
    const [stats, setStats] = useState()

    useEffect(
        () => {
            if (!props.username) return
            async function fetchData() {
                const newStats = await getLanguageStats(props.username)
                setStats(newStats)
            }
            fetchData()
        },
        [props.username]
    )

    return stats instanceof Array && stats.map(language => {
        return (<div key={language.name}><span>{language.name}</span><span>{language.size}</span></div>)
    })
}
