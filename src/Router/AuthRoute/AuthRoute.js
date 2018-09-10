import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const AuthRoute = (props, { isAuthenticated, component: Component }) => {
  console.log('props authRoute', props)
  return (
    <Route
    {...props}
    render={
      props => (
      (
        !isAuthenticated ?  <Component {...props} /> :<Redirect to='/get-credit'/>
      )
    )} />
  )
}

export default AuthRoute
