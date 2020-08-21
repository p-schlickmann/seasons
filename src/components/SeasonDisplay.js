import React from 'react'

import Cold from './Cold'
import Hot from './Hot'

function getSeason(lat, month) {
    if (8 >= month >= 3) {
        return lat >= 0 ? <Cold/> : <Hot/>
    } else if (2 >= month >= 0 || 12 >= month >= 9 ){
        return lat >= 0 ? <Hot/> : <Cold/>
    }
     else {
        return null
    }
}

const SeasonDisplay = (props) => {
    return (
        getSeason(props.lat, props.month)
    )
}

export default SeasonDisplay
