import React, {FC} from 'react'
import Trip from './Trip'
import {TripType} from '../../redux/tripsReducer'

export const Trips: FC<any & Array<TripType>> = ({trips}) => {
  return (
    <ul className='trips__list'>
      {
        trips.map(
          ({key, ...props}: Array<TripType>&any) => <Trip key={props.id} {...props} />)
      }
    </ul>
  )
}
