import React from 'react'

const TripDates = ({...props}) => {
  return <span>
    {props.arrival} - {props.departure}
  </span>
}

export default TripDates