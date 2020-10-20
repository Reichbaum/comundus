import React, {FC} from 'react'
import {Collapse} from 'antd'

const {Panel} = Collapse

export type TripsDatesType = {
  'arrival': string
  'departure': string
}

type TripsDatesComponentType = {
  datesSingle: TripsDatesType
  datesMultiple: Array<TripsDatesType>
  className: string
}

const convertDateforComparing = (date: string) => {
  let dateArray = date.split('.')
  return Date.UTC(parseInt(dateArray[2]), parseInt(dateArray[1]), parseInt(dateArray[0]))
}

const today = Date.now()

const TripDates: FC<TripsDatesComponentType> = ({datesSingle, datesMultiple, className}) => {

  let tripsDates = [{
    'arrival': '',
    'departure': ''
  }]

  if (datesSingle && datesSingle.arrival !== '') {
    let dateArrival = convertDateforComparing(datesSingle.arrival)
    if (dateArrival > today) {
      tripsDates =
        [
          {
            'arrival': datesSingle.arrival,
            'departure': datesSingle.departure
          }
        ]
    }
  } else if (datesMultiple && datesMultiple[0].arrival !== '') {
    let dateArrival = convertDateforComparing(datesMultiple[0].arrival)
    if (dateArrival > today) {
      tripsDates = []
      datesMultiple.forEach(
        (date: TripsDatesType) => {
          tripsDates.push({
            'arrival': date.arrival,
            'departure': date.departure
          })
        })
    }
  }

  return <Collapse bordered={false} expandIconPosition='right' className={className}>
    {tripsDates.length === 1 && <div className={`${className}--single`}>
      {`${tripsDates[0].arrival} - ${tripsDates[0].departure}`}
    </div>
    }
    {tripsDates.length > 1 && <Panel header={`${tripsDates[0].arrival} - ${tripsDates[0].departure}`} key="dates_multpiple">
      {
        tripsDates.slice(1).length !== 0 && tripsDates.slice(1).map(
          (date: TripsDatesType) => <span key={date.arrival}>{date.arrival} - {date.departure}</span>)
      }
    </Panel>
    }
  </Collapse>
}

export default TripDates