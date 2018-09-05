import {
  GET_ALL_DATA,
  FAIL_GET_ALL_DATA
} from '../actions/index'

export default function(state = {}, action){
  switch(action.type){
    case GET_ALL_DATA:
      return { ...state, data: action.payload.data, status: action.payload.status }

    case FAIL_GET_ALL_DATA:
      return { ...state, status: action.payload.status }
    default:
      return state
  }
}