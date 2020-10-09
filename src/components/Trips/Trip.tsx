import React, {FC} from 'react'
import {TripType} from '../../redux/tripsReducer'
import noimage from '../../assets/img/noimage.svg'

import './Trips.less'

const Trip: FC<TripType> = ({...props}) => {
  let imageUrl = noimage
  if (props._embedded['wp:featuredmedia'][0].media_details) {
    imageUrl = props._embedded['wp:featuredmedia'][0].media_details.sizes.grid_thumb.source_url
  } else imageUrl = props._embedded['wp:featuredmedia'][0].source_url

  return (
    <li key={props.id} id={props.id} className='trips__item'>
      <a href={props.link} target='_blank' rel='noopener noreferrer'>
        <img className='trip__image' src={imageUrl} width={320} height={250} alt={props.title.rendered}/>
        <h3 className='trip__title'>{props.title.rendered}</h3>
        <div className='trip__price'>ab <span>{props.meta.price} €</span> pro Person</div>
      </a>
    </li>
  )
}

export default Trip
