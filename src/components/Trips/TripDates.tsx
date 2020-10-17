import React from 'react'

export type TripsDatesType = {
  'arrival': string
  'departure': string
}

const TripDates = React.memo(({...props}: TripsDatesType) => {
  return <span>
    {props.arrival} - {props.departure}
  </span>
})

export default TripDates