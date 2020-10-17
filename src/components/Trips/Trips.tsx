import React, {FC} from 'react'
import Trip from './Trip'
import {TripType} from '../../redux/tripsReducer'
import {useSelector} from 'react-redux'
import {getIsFetching} from '../../redux/selectors'
import cn from 'classnames'


const Trips: FC<any & Array<TripType>> = React.memo(({trips}) => {

  const isFetching = useSelector(getIsFetching)
  const tripListClassName = cn(isFetching && 'hide', 'app__pagination', 'trips__list')

  return (
    <ul className={tripListClassName}>
      {
        trips.map(
          ({key, ...props}: Array<TripType>&any) => <Trip key={props.id} {...props} />)
      }
    </ul>
  )
})

export default Trips
