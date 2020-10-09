import {instance} from './api'
import {AxiosResponse} from 'axios'
import {TripType} from '../redux/tripsReducer'
import {tripSearchValuesType} from '../components/Trips/TripsPage'

export const TripsApi = {

  getTrips(page = 1, per_page = 9, search: tripSearchValuesType): Promise<AxiosResponse<Array<TripType>>> & any {
    let searchParams = (search.search === '' || !search.search ? '' : `&search=${search.search}`)
    console.log(search)
    let destinationsParams = (search.country.length === 0 ? '' : `&destinations=${search.country}`)

    const response = instance.get(`ee_trips?_embed${searchParams}${destinationsParams}`, {
      params: {page, per_page}
    }).then(res => res)
      .catch(err => {
        if (err.response) {
          console.log(err.response)
          // client received an error response (5xx, 4xx)
        } else if (err.request) {
          console.log(err.request)
          // client never received a response, or request never left
        } else {
          console.log('something wrong')
          // anything else
        }
      })
    return response

  }

}

