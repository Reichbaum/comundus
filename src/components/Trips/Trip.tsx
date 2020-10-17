import React, {FC} from 'react'
import {TripType} from '../../redux/tripsReducer'
import noimage from '../../assets/img/noimage.svg'
import './Trips.less'
import TripDates, {TripsDatesType} from './TripDates'
import {Collapse} from 'antd'

const {Panel} = Collapse

const Trip: FC<TripType> = React.memo(({...props}) => {
  let imageUrl = noimage
  if (props.featured_image_thumb) {
    imageUrl = props.featured_image_thumb
  } else imageUrl = props.featured_image_slider

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
    props.meta.dates_multiple_trip.forEach(
      (e: TripsDatesType) => {
        tripsDates.push({
          'arrival': e.arrival,
          'departure': e.departure
        })
      })
  }

  return (
    <li key={props.id} id={props.id} className='trips__item'>
      <a href={props.link} target='_blank' rel='noopener noreferrer'>
        <img className='trip__image' src={imageUrl} width={320} height={250} alt={props.title.rendered}/>
      </a>

        <a href={props.link} target='_blank' rel='noopener noreferrer'>
          <h3 className='trip__title'>{props.title.rendered}</h3>
        </a>
        <div className='trip__price'>ab <span>{props.meta.price}€</span> pro Person</div>

        <Collapse bordered={false} expandIconPosition='right' className='trip__dates'>
          {tripsDates.length === 1 && <div className='trip__dates--single'>
            {`${tripsDates[0].arrival} - ${tripsDates[0].departure}`}
          </div>
          }
          {tripsDates.length > 1 && <Panel header={`${tripsDates[0].arrival} - ${tripsDates[0].departure}`} key="dates_multpiple">
            {
              tripsDates.slice(1).length !== 0 && tripsDates.slice(1).map(
                ({key, ...props}: TripsDatesType & any) => <TripDates key={props.arrival} {...props} />)
            }
          </Panel>
          }
        </Collapse>
    </li>
  )
})

export default Trip

