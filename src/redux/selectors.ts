import {AppStateType} from './reduxStore'

// Trips
export const getTrips = (state: AppStateType) => state.tripsPage.trips
export const getDestinations = (state: AppStateType) => state.tripsPage.destinations
export const getTotalCount = (state: AppStateType) => state.tripsPage.total_count
export const getPerPage = (state: AppStateType) => state.tripsPage.per_page
export const getCurrentPage = (state: AppStateType) => state.tripsPage.currentPage
export const getIsFetching = (state: AppStateType) => state.tripsPage.isFetching

// Posts
export const getPost = (state: AppStateType) => state.posts.post
