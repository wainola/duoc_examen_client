import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const GuestRoute = (props, { isAuthenticated, component: Component }) => {
  return (
    <div>
      <Route {...props} render={
        props => ( 
          (isAuthenticated && props.path === '/') && (
            <Component history={props.history} location={props.location} match={props.match} />
          )
          (isAuthenticated && props.path === 'login') && (
            <Component history={props.history} location={props.location} match={props.match} />
          )
        )
      }
      />
    </div>
  )
}

export default GuestRoute