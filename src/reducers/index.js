import { combineReducers } from 'redux'
import creditReducer from './creditReducer'

export default combineReducers({
  credit: creditReducer
})