import {
  SUCCESS_LOCAL_LOGIN,
  FAIL_LOCAL_LOGIN,
  LOGOUT
} from '../actions/types'

const initialState = {
  isAuthenticated: false
}

export default function(state = initialState, action){
  switch(action.type){
    case SUCCESS_LOCAL_LOGIN:
      return { ...state, isAuthenticated: !state.isAuthenticated }
    case FAIL_LOCAL_LOGIN:
      return state
    case LOGOUT:
      return { ...state, isAuthenticated: !state.isAuthenticated }
    default:
      return state
  }
}