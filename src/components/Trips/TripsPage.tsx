import {useDispatch, useSelector} from 'react-redux'
import React, {useEffect} from 'react'
import {getCurrentPage, getIsFetching, getPerPage, getTrips} from '../../redux/selectors'
import {Trips} from './Trips'
import {Divider, Skeleton} from 'antd'
import Title from 'antd/es/typography/Title'
import {requestTrips} from '../../redux/tripsReducer'
import Preloader from '../Preloader/Preloader'
import TripPagination from './TripPagination'

export const TripsPage = () => {

  const isFetching = useSelector(getIsFetching)
  const currentPageNumber = useSelector(getCurrentPage)
  const perPage = useSelector(getPerPage)
  const trips = useSelector(getTrips)
  const dispatch = useDispatch()

  useEffect(() => {
    let actualPage = currentPageNumber
    if (trips.length === 0) {
      dispatch(requestTrips(actualPage, perPage))
    }
  }, [currentPageNumber, perPage, trips, dispatch])

  return <section>
    <Divider orientation="left">
      <Title level={1}>Unsere Reisen</Title>
    </Divider>
    <TripPagination hide={false}/>
    {isFetching && <div><Preloader/>
      <TripsSkeleton />
    </div>}
    <Trips trips={trips}/>
    <TripPagination hide={true}/>
  </section>

}

const TripsSkeleton = () => {
  return <div className='trips__skeleton-wrapper'>
    <div className='trips__skeleton-item'>
      <Skeleton.Avatar active size={314} shape='square' />
      <Skeleton active paragraph={false}/>
    </div>
    <div className='trips__skeleton-item'>
      <Skeleton.Avatar active size={314} shape='square' />
      <Skeleton active paragraph={false}/>
    </div>
    <div className='trips__skeleton-item'>
      <Skeleton.Avatar active size={314} shape='square' />
      <Skeleton active paragraph={false}/>
    </div>
  </div>
}




