import React, {useEffect} from 'react'
import {Button, Carousel} from 'antd'
import {useDispatch, useSelector} from 'react-redux'
import {getTrips} from '../../redux/selectors'
import {requestTrips, TripType} from '../../redux/tripsReducer'
import noimage from '../../assets/img/noimage.svg'
// import {Carousel} from 'antd-mobile'
import '../Slider/Slider.less'
import {DownloadOutlined, GlobalOutlined} from '@ant-design/icons/lib'

const Slider = () => {

  const trips = useSelector(getTrips)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(requestTrips(1, 10, null, 99))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trips])

  return <Carousel
    draggable={true}
    infinite={true}>
    {
      trips.map(
        ({key, ...props}: Array<TripType> & any) => <SliderItem key={props.id} {...props} />)
    }
  </Carousel>
}

export default Slider

const SliderItem = ({...props}) => {
  let imageUrl = noimage
  if (props._embedded['wp:featuredmedia'][0].source_url) {
    imageUrl = props._embedded['wp:featuredmedia'][0].source_url
  }

  let tripsDates = [{
    'arrival': '',
    'departure': ''
  }]

  if (props.meta.dates && props.meta.dates.arrival !== '') {
    tripsDates =
      [
        {
          'arrival': props.meta.dates.arrival,
          'departure': props.meta.dates.departure
        }
      ]
  } else if (props.meta.dates_multiple_trip && props.meta.dates_multiple_trip[0].arrival !== '') {
    tripsDates = []
    props.meta.dates_multiple_trip.map(
      (e: any) => {
        tripsDates.push({
          'arrival': e.arrival,
          'departure': e.departure
        })
      })
  }

  return <div key={props.id} id={props.id} className='slider__item'>
    <img className='slider__image' src={imageUrl} alt={props.title.rendered} height='auto' width='75%'/>
    <div className='slider__content'>
      <h3 className='slider__title'>{props.title.rendered}</h3>
      <div className='slider__price'>ab <span>{props.meta.price} €</span> pro Person</div>
      <div className='slider__dates'>
        {
          tripsDates.map(
            ({key, ...props}: any) => <SliderDate key={props.id} {...props} />)
        }
      </div>
      <Button
        type="primary"
        icon={<GlobalOutlined/>}
        size="large"
        className='slider__link'>
        Zur Reise
      </Button>
    </div>
  </div>
}

const SliderDate = ({...props}) => {
  return <span>
    {props.arrival} - {props.departure}
  </span>
}