import noimage from '../../assets/img/noimage.svg'
import {Button} from 'antd'
import {GlobalOutlined} from '@ant-design/icons/lib'
import React from 'react'
import TripDates from '../Trips/TripDates'

const SliderItem = ({...props}) => {

  let imageUrl = noimage
  if (props.featured_image_slider) {
    imageUrl = props.featured_image_slider
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
            ({key, ...props}: any) => <TripDates key={props.id} {...props} />)
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

export default SliderItem