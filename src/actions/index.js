import API from '../api'
import {
  SUCCESS_GOOGLE_LOGIN,
  SUCCESS_LOCAL_LOGIN,
  FAIL_LOCAL_LOGIN,
  LOGOUT,
  GET_ALL_DATA,
  FAIL_GET_ALL_DATA,
  POST_USER,
  FAIL_POST_USER
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

export const successLocalLogin = payload => ({
  type: SUCCESS_LOCAL_LOGIN,
  payload
})

export const failLocalLogin = payload => ({
  type: FAIL_LOCAL_LOGIN,
  payload
})

export const logout = () => ({
  type: LOGOUT
})

// ASYNC ACTIONS AND THEIR DISPATCHERS

export const getCreditData = () => dispatch => {
  return API.getCredits()
    .then(res => dispatch(gettingAllTheData({ data: res.data, status: res.status })))
}

export const localLogin = body => dispatch => {
  return API.login(body)
    .then(res => dispatch(successLocalLogin({ data: res.data, status: res.status })))
    .catch(res => dispatch(failLocalLogin(res)))
}

export const postUser = body => dispatch => {
  return API.postUser(body)
    .then(res => dispatch(successPostingUser({ data: res.data })))
    .catch(res => dispatch(failPostingUser(res)))
}

export const successPostingUser = payload => ({
  type: POST_USER,
  payload
})

export const failPostingUser = payload => ({
  type: FAIL_POST_USER,
  payload
})