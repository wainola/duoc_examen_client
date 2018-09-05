import {
  SEND_DATA_TO_VIEW
} from '../actions/index'

export default function(state={}, action){
  switch(action.type){
    case SEND_DATA_TO_VIEW:
      return action.payload
    default:
      return state
  }
}