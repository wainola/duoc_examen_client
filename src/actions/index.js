import API from '../api'

export const SUCCESS_GOOGLE_LOGIN = 'SUCCESS_GOOGLE_LOGIN'
export const FAIL_GOOGLE_LOGIN = 'FAIL_GOOGLE_LOGIN'

export const SUCCESS_LOCAL_LOGIN = 'SUCCESS_LOCAL_LOGIN'
export const FAIL_LOCAL_LOGIN = 'FAIL_LOCAL_LOGIN'

export const MAKE_AUTH = 'MAKE_AUTH'

export const GET_REQUEST = 'GET_REQUEST'

export const GET_ALL_DATA = 'GET_ALL_DATA'
export const FAIL_GET_ALL_DATA = 'FAIL_GET_ALL_DATA'

export const SEND_DATA_TO_VIEW = 'SEND_DATA_TO_VIEW'

export const CHANGE_LOGIN_STATUS = 'CHANGE_LOGIN_STATUS'

export const successGoogleLogin = () => ({
  type: SUCCESS_GOOGLE_LOGIN
})

export const failGoogleLogin = () => ({
  type: FAIL_GOOGLE_LOGIN,
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
    .catch(res => dispatch(failGettingAllTheData(res)))
}

export const sendDataToView = payload => {
  type: SEND_DATA_TO_VIEW,
  payload
}

export const changeLoginStatus = payload => ({
  type: CHANGE_LOGIN_STATUS,
  payload
})