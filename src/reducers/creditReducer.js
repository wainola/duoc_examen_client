import {
  GET_ALL_DATA,
  FAIL_GET_ALL_DATA,
  POST_CREDIT_REQUEST,
  SEND_CREDIT_TO_SHOW,
  DELETING_CREDIT_REQUEST,
  SEND_DATA_TO_EDIT
} from '../actions/types'

export default function(state = {}, action){
  switch(action.type){
    case GET_ALL_DATA:
      return { ...state, data: action.payload.data.all_user_data, status: action.payload.status, data_to_display: action.payload.data.usuarios }
    case FAIL_GET_ALL_DATA:
      return { ...state, status: action.payload.status }
    case POST_CREDIT_REQUEST:
      return { ...state, data: action.payload.data }
    case SEND_CREDIT_TO_SHOW:
      return { ...state, data: action.payload }
    case DELETING_CREDIT_REQUEST:
      return { ...state, data: action.payload }
    case SEND_DATA_TO_EDIT:
      return { ...state, data_received: { ...action.payload } }
    default:
      return state
  }
}