import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const GuestRoute = (props) => {
  const { auth: { isAuthenticated }, location: { pathname }, component: Component } = props
  return (
    <div>
      <Route {...props} render={
        props => ( 
          !isAuthenticated ? 
          (
            <Component {...props} />
          ) : (
            <Redirect to='/get-credit' />
          )
        )
      }
      />
    </div>
  )
}

function mapStateToProps({ auth }){
  return { auth }
}

export default connect(mapStateToProps)(GuestRoute)