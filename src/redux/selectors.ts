import {AppStateType} from './reduxStore'

// Trips
export const getTrips = (state: AppStateType) => state.tripsPage.trips
export const getTotalCount = (state: AppStateType) => state.tripsPage.total_count
export const getImages = (state: AppStateType) => state.tripsPage.images
export const getPerPage = (state: AppStateType) => state.tripsPage.per_page
export const getCurrentPage = (state: AppStateType) => state.tripsPage.currentPage
export const getIsFetching = (state: AppStateType) => state.tripsPage.isFetching

// Posts
export const getPost = (state: AppStateType) => state.posts.post