import {
  LOGIN_EXECUTIVE
} from '../actions/types'

export default function(state={}, action){
  switch(action.type){
    case LOGIN_EXECUTIVE:
      localStorage.setItem('executive', JSON.stringify(action.payload.data.user))
      return { isAuthenticated: action.payload.data.auth, executive: action.payload.data.user, status: action.payload.data.status }
    default:
      return state
  }
}