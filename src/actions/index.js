import API from '../api'

export const SUCCESS_GOOGLE_LOGIN = 'SUCCESS_GOOGLE_LOGIN'
export const FAIL_GOOGLE_LOGIN = 'FAIL_GOOGLE_LOGIN'

export const SUCCESS_LOCAL_LOGIN = 'SUCCESS_LOCAL_LOGIN'
export const FAIL_LOCAL_LOGIN = 'FAIL_LOCAL_LOGIN'

export const successGoogleLogin = payload => {
  type: SUCCESS_GOOGLE_LOGIN,
  payload
}

export const failGoogleLogin = payload => {
  type: FAIL_GOOGLE_LOGIN,
  payload
}

export const sendAuthTrueToBackend = bool => dispatch => {
  return API.sendAuthTrueToBackend(bool)
}

export const localLogin = credentials => dispatch => {
  return API.login(credentials)
}