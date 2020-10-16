import {instance} from './api'
import {AxiosResponse} from 'axios'
import {TripType} from '../redux/tripsReducer'
import {tripSearchValuesType} from '../components/Trips/TripsPage'

export const TripsApi = {

  getTrips(page = 1, per_page = 9, search: tripSearchValuesType | null, tag: number = 0): Promise<AxiosResponse<Array<TripType>>> & any {

    let searchParams = ''
    let destinationsParams = ''
    if (search) {
      searchParams = (search.search === '' || !search.search ? '' : `&search=${search.search}`)
      destinationsParams = (search.destinations.length === 0 ? '' : `&destinations=${search.destinations}`)
    }

    let tagsParams = (tag === 0 ? '' : `&tags=${tag}`)

    return instance.get(`ee_trips?${searchParams}${tagsParams}${destinationsParams}`, {
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
  },

  getDestinations(): Promise<AxiosResponse<Array<any>>> & any {
    return instance.get(`destinations`, {
      params: {page: 1, per_page: 100}
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
  }

}

