import React, {FC} from 'react'
import {TripType} from '../../redux/tripsReducer'
import noimage from '../../assets/img/noimage.svg'
import './Trips.less'
import TripDates from './TripDates'

const Trip: FC<TripType> = React.memo(({...props}) => {
  let imageUrl = noimage
  if (props.featured_image_thumb) {
    imageUrl = props.featured_image_thumb
  } else imageUrl = props.featured_image_slider

  return (
    <li key={props.id} id={props.id} className='trip__item'>
      <a href={props.link} target='_blank' rel='noopener noreferrer'>
        <img className='trip__image' src={imageUrl} width={320} height={250} alt={props.title.rendered}/>
        <h3 className='trip__title'>{props.title.rendered}</h3>
      </a>
      <div className='trip__price'>ab <span>{props.meta.price}€</span> pro Person</div>
      <TripDates datesSingle={props.meta.dates} datesMultiple={props.meta.dates_multiple_trip} className='trip__dates'/>
    </li>
  )
})

export default Trip

