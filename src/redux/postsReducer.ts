import {ThunkAction} from 'redux-thunk'
import {Dispatch} from 'redux'
import {AppStateType, InferActionsType} from './reduxStore'
import {PostApi} from '../api/post_api'


const initialState = {
  post: {
    id: 0 as number,
    title: {
      rendered: ''
    },
    content: {
      rendered: ''
    },
    link: ''
  } as PostType,
  isFetching: false,
}

type InitialStateType = typeof initialState

export const postsReducer = (state = initialState, action: ActionsTypes) => {
  switch (action.type) {
    case 'SET_POST':
      return {
        ...state,
        post: action.post
      }
    case 'TOGGLE_IS_FETCHING':
      return {
        ...state,
        isFetching: action.isFetching
      }
    default:
      return state
  }
}

export const actions = {
  setPost: (post: PostType) => ({type: 'SET_POST', post} as const),
  toggleIsFetching: (isFetching: boolean) => ({
    type: 'TOGGLE_IS_FETCHING', isFetching
  } as const),
}

export const requestPost = (id: number): ThunkActionType =>
  async (dispatch) => {
    dispatch(actions.toggleIsFetching(true))
    let data = await PostApi.getPage(id)
    dispatch(actions.setPost(data.data))
    dispatch(actions.toggleIsFetching(false))
  }

type DispatchType = Dispatch<ActionsTypes>
type ActionsTypes = InferActionsType<typeof actions>
type ThunkActionType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export type PostType = {
  id: number,
  link: string,
  title: {
    rendered: string
  },
  content: {
    rendered: string
  }
}