import API from '../api'

export const SUCCESS_GOOGLE_LOGIN = 'SUCCESS_GOOGLE_LOGIN'
export const FAIL_GOOGLE_LOGIN = 'FAIL_GOOGLE_LOGIN'

export const SUCCESS_LOCAL_LOGIN = 'SUCCESS_LOCAL_LOGIN'
export const FAIL_LOCAL_LOGIN = 'FAIL_LOCAL_LOGIN'

export const MAKE_AUTH = 'MAKE_AUTH'

export const successGoogleLogin = () => ({
  type: SUCCESS_GOOGLE_LOGIN
})

export const failGoogleLogin = () => ({
  type: FAIL_GOOGLE_LOGIN,
})

export const sendAuthTrueToBackend = bool => dispatch => {
  return API.sendAuthTrueToBackend(bool)
}

export const localLogin = credentials => dispatch => {
  return API.login(credentials)
}

export const makeAuth = payload => ({
  type: MAKE_AUTH,
  payload
})