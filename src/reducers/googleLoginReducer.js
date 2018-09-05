import {
  SUCCESS_GOOGLE_LOGIN,
  FAIL_GOOGLE_LOGIN
} from '../actions/index'

const initialState = {
  google_auth: false
}

export default function(state = initialState, action){
  switch(action.type){
    case SUCCESS_GOOGLE_LOGIN:
      return { ...state, google_auth: true }
    case FAIL_GOOGLE_LOGIN:
      return state
    default:
      return state
  }
}