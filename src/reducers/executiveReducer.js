import {
  LOGIN_EXECUTIVE
} from '../actions/types'

export default function(state={}, action){
  switch(action.type){
    case LOGIN_EXECUTIVE:
      return { isAuthenticated: action.payload.data.auth, executive: action.payload.data.user, status: action.payload.data.status }
    default:
      return state
  }
}