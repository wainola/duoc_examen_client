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
      localStorage.setItem('user', JSON.stringify(action.payload.data.user))
      return { ...state, isAuthenticated: action.payload.data.auth !== undefined ? action.payload.data.auth : state.isAuthenticated, user: action.payload.data.user, status: action.payload.data.status  }
    case FAIL_LOCAL_LOGIN:
      return state
    case LOGOUT:
      localStorage.removeItem('user')
      return { ...state, isAuthenticated: !state.isAuthenticated }
    default:
      return state
  }
}