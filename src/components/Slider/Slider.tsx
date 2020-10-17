import React, {useEffect} from 'react'
import {Carousel, Skeleton} from 'antd'
import {useDispatch, useSelector} from 'react-redux'
import {getIsFetching, getTrips} from '../../redux/selectors'
import {requestTrips, TripType} from '../../redux/tripsReducer'
import '../Slider/Slider.less'
import SliderItem from './SliderItem'

const Slider = React.memo(() => {

  const trips = useSelector(getTrips)
  const isFetching = useSelector(getIsFetching)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(requestTrips(1, 10, null, 99))
  }, [dispatch])

  return <>
    {isFetching && <SliderSkeleton/>}
    <Carousel
    draggable={true}
    infinite={true}
    className='slider'>
    {
      trips.map(
        ({key, ...props}: Array<TripType> & any) => <SliderItem key={props.id} {...props} />)
    }
  </Carousel>
    </>
})

export default Slider

export const SliderSkeleton = React.memo(() => {
   return <div className='slider__skeleton'>
      <Skeleton active avatar={{ size: 700, shape: 'square'}} paragraph={{ rows: 10 }}/>
    </div>
})