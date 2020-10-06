import {instance} from './api'
import {AxiosResponse} from 'axios'
import {ImageType, TripType} from '../redux/tripsReducer'

export const TripsApi = {

  getTrips(page = 1, per_page = 10): Promise<AxiosResponse<Array<TripType>>> {
    return instance.get(`ee_trips?_embed`, {
      params: {page, per_page}
    }).then(res => res)
  },

  getImages(include: Array<number>): Promise<AxiosResponse<Array<ImageType>>> {
    return instance.get(`media`, {
      params: {include}
    }).then(res => res.data)
  }
}

