import { combineReducers } from 'redux'
import creditReducer from './creditReducer'
import googleReducer from './googleLoginReducer'
import requestReducer from './requestReducer'
import authReducer from './authReducer'
import userReducer from './userReducer'

export default combineReducers({
  credit: creditReducer,
  google: googleReducer,
  request: requestReducer,
  auth: authReducer,
  user: userReducer
})