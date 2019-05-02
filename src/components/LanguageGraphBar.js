import React, { useEffect } from 'react'

export default function LanguageGraphBar(props) {
    return props.name && !isNaN(props.size) && (
        <div key={props.name}><span>{props.name}</span><span>{props.size}</span></div>
    )
}
