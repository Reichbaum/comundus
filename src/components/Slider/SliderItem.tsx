import noimage from '../../assets/img/noimage.svg'
import {Button} from 'antd'
import {GlobalOutlined} from '@ant-design/icons/lib'
import React from 'react'
import TripDates from '../Trips/TripDates'
import {TripType} from '../../redux/tripsReducer'

const SliderItem = ({...props}: TripType) => {

  let imageUrl = noimage
  if (props.featured_image_slider) {
    imageUrl = props.featured_image_slider
  }

  return <div key={props.id} id={props.id} className='slider__item'>

    <img className='slider__image' src={imageUrl} alt={props.title.rendered}/>
    <div className='slider__content'>
      <h3 className='slider__title'>{props.title.rendered}</h3>
      <div className='slider__buttons'>
        <TripDates datesSingle={props.meta.dates} datesMultiple={props.meta.dates_multiple_trip} className='slider__dates'/>
        <div className='slider__price'>ab <span>{props.meta.price}€</span> pro Person</div>
        <Button
          type="primary"
          icon={<GlobalOutlined/>}
          className='slider__link'
          href={props.link}>
          Zur Reise
        </Button>
      </div>

    </div>
  </div>
}

export default React.memo(SliderItem)