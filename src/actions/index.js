import API from '../api'
import {
  SUCCESS_GOOGLE_LOGIN,
  SUCCESS_LOCAL_LOGIN,
  FAIL_LOCAL_LOGIN,
  GET_ALL_DATA,
  FAIL_GET_ALL_DATA
} from './types'

export const successGoogleLogin = () => ({
  type: SUCCESS_GOOGLE_LOGIN
})

export const gettingAllTheData = payload => ({
  type: GET_ALL_DATA,
  payload
})

export const failGettingAllTheData = payload => ({
  type: FAIL_GET_ALL_DATA,
  payload
})

export const getCreditData = () => dispatch => {
  return API.getCredits()
    .then(res => dispatch(gettingAllTheData({ data: res.data, status: res.status })))
}