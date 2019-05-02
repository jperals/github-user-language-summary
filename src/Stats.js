import React, {useEffect, useState} from 'react'
const getLanguageStatsAggregated = require('./getLanguageStatsAggregated')

export default function Stats (props) {
    const [stats, setStats] = useState()

    useEffect(
        () => {
            if(!props.username) return
            async function fetchData() {
                console.log(props)
                const newStats = await getLanguageStatsAggregated(props.username)
                setStats(newStats)
            }
            fetchData()
        },
        [props.username]
    )

    return(
        <span>{props.username}</span>
    )
}
