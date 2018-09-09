import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const GuestRoute = (props, { isAuthenticated, component: Component }) => {
  console.log('props Gest', props)
  return (
    <div>
      <Route {...props} render={
        props => ( isAuthenticated ?
          (<Component history={props.history} location={props.location} match={props.match} />) 
          :
          <Redirect to='/'/>
        )
      }
      />
    </div>
  )
}

export default GuestRoute