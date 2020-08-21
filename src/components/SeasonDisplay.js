import React from 'react'

import Cold from './Cold'
import Hot from './Hot'

function getSeason(lat, month) {
    if (8 >= month >= 3) {
        if (lat >= 0) {
            return <Hot/>
        } else {
            return <Cold/>
        }
    } else if (2 >= month >= 0 || 12 >= month >= 9 ){
        if (lat <=0 ){
            return <Cold/>
        } else {
            return <Hot/>
        }
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
