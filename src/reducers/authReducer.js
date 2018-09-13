import {
  SUCCESS_LOCAL_LOGIN,
  FAIL_LOCAL_LOGIN,
  LOGOUT,
  REFRESH_AUTH,
  CHANGE_LOGIN_STATUS,
  SUCCESS_GOOGLE_LOGIN
} from '../actions/types'

const initialState = {
  isAuthenticated: false
}

export default function(state = initialState, action){
  switch(action.type){
    case SUCCESS_LOCAL_LOGIN:
      localStorage.setItem('user', JSON.stringify(action.payload.data.user))
      return { ...state, isAuthenticated: action.payload.data.auth !== undefined ? action.payload.data.auth : state.isAuthenticated, user: action.payload.data.user, status: action.payload.data.status  }
    case FAIL_LOCAL_LOGIN:
      return state
    case LOGOUT:
      localStorage.removeItem('user')
      localStorage.removeItem('executive')
      return { ...state, isAuthenticated: !state.isAuthenticated }
    case REFRESH_AUTH:
      return { ...state, isAuthenticated: !state.isAuthenticated }
    // case LOGIN_EXECUTIVE:
    //   console.log('login executive', action.payload)
    //   localStorage.setItem('executive', JSON.stringify(action.payload.data.user))
    //   return { isAuthenticated: action.payload.data.auth, status: action.payload.data.status, executive: action.payload.data.user }
    case CHANGE_LOGIN_STATUS:
      return { ...state, isAuthenticated: !state.isAuthenticated }
    case SUCCESS_GOOGLE_LOGIN:
      const user = {
        nombre: `${action.payload.profileObj.name.split(' ')[0]} ${action.payload.profileObj.name.split(' ')[1]}`,
        apellido_paterno: `${action.payload.profileObj.name.split(' ')[2]}`,
        apellido_materno: `${action.payload.profileObj.name.split(' ')[3]}`
      }
      localStorage.setItem('user', JSON.stringify(user))
      return { ...state, isAuthenticated: !state.isAuthenticated }
    default:
      return state
  }
}