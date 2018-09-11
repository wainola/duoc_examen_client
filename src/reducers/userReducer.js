import {
  POST_USER,
  FAIL_POST_USER
} from '../actions/types'

export default function(state={}, action){
  switch(action.type){
    case POST_USER:
      return { ...state, status: action.payload.data.status }
    case FAIL_POST_USER:
      return { ...state, data: action.payload }
    default:
      return state
  }
}