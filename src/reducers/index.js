import { combineReducers } from 'redux'
import creditReducer from './creditReducer'
import googleReducer from './googleLoginReducer'
import requestReducer from './requestReducer'

export default combineReducers({
  credit: creditReducer,
  google: googleReducer,
  request: requestReducer
})