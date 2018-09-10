import {
  CHANGE_LOGIN_STATUS
} from '../actions/index'

const initialState = {
  isAuthenticated: false
}

export default function(state = initialState, action){
  switch(action.type){
    case CHANGE_LOGIN_STATUS:
    return { ...state, isAuthenticated: action.payload }
    default:
      return state
  }
}