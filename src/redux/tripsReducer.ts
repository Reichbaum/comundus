import {ThunkAction} from 'redux-thunk'
import {Dispatch} from 'redux'
import {AppStateType, InferActionsType} from './reduxStore'
import {TripsApi} from '../api/trips-api'


const initialState = {
  trips: [] as Array<TripType>,
  isFetching: false,
  currentPage: 1,
  per_page: 12,
  images: [] as Array<ImageType>,
  total_count: 1
}

type InitialStateType = typeof initialState

export const tripsReducer = (state = initialState, action: ActionsTypes) => {
  switch (action.type) {
    case 'SET_TRIPS':
      return {
        ...state,
        trips: action.trips
      }
    case 'SET_TOTAL_COUNT':
      return {
        ...state,
        total_count: action.count
      }
    case 'SET_IMAGES':
      return {
        ...state,
        images: action.images
      }
    case 'TOGGLE_IS_FETCHING':
      return {
        ...state,
        isFetching: action.isFetching
      }
    case 'SET_CURRENT_PAGE':
      return {
        ...state,
        currentPage: action.currentPage
      }
    default:
      return state
  }
}

export const actions = {
  setTrips: (trips: Array<TripType>) => ({type: 'SET_TRIPS', trips} as const),
  setTotalCount: (count: number) => ({type: 'SET_TOTAL_COUNT', count} as const),
  setImages: (images: any) => ({type: 'SET_IMAGES', images} as const),
  setCurrentPage: (currentPage: number) => ({
    type: 'SET_CURRENT_PAGE', currentPage
  } as const),
  toggleIsFetching: (isFetching: boolean) => ({
    type: 'TOGGLE_IS_FETCHING', isFetching
  } as const),
}

export const requestTrips = (currentPage: number, pageSize: number): ThunkActionType =>
  async (dispatch) => {
    dispatch(actions.toggleIsFetching(true))
    dispatch(actions.setCurrentPage(currentPage))
    let data = await TripsApi.getTrips(currentPage, pageSize)
    dispatch(actions.setTrips(data.data))
    dispatch(actions.setTotalCount(parseInt(data.headers['x-wp-total'])))
    // let imagesArray = [] as Array<number>
    // data.data.map((trip) => {
    //   imagesArray.push(trip.featured_media)
    // })
    // let images = await TripsApi.getImages(imagesArray)
    // dispatch(actions.setImages(images))
    dispatch(actions.toggleIsFetching(false))
  }

type DispatchType = Dispatch<ActionsTypes>
type ActionsTypes = InferActionsType<typeof actions>
type ThunkActionType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export type TripType = {
  author?: number
  id: string
  date?: string
  date_gmt?: string
  link: string
  slug: string
  title: {
    rendered: string
  }
  content: string
  featured_media: number
  meta: {
    price: number
  }
  categories: Array<number>
  destinations?: Array<number>
  guid?: any
  modified?: string
  modified_gmt?: string
  parent?: 0
  reisefinder?: Array<number>
  reisemerkmale?: Array<number>
  reisethemen?: Array<number>
  status?: string
  tags?: Array<number>
  template?: string
  type?: string
  yoast_head?: string
  _links?: any
  _embedded: {
    ['wp:featuredmedia']: Array<embedMediaType>
  }
}

export type ImageType = {
  id: number
  guid: {
    rendered: string
  }
}

type embedMediaType = {
  id: number,
  source_url: string,
  media_details: {
    sizes: {
      grid_thumb: {
        source_url: string
      }
    }
  }
}