import { combineReducers } from 'redux'
import creditReducer from './creditReducer'
import googleReducer from './googleLoginReducer'

export default combineReducers({
  credit: creditReducer,
  google: googleReducer
})