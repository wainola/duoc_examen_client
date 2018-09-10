import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const AuthRoute = (props) => {
  const { auth: { isAuthenticated }, component: Component } = props
  console.log('props authRoute', props)
  console.log('authcomponent', isAuthenticated)
  return (
    <Route
    {...props}
    render={
      props => (
      (
        isAuthenticated ? <Component {...props} /> : <Redirect to='/login'/>
      )
    )} />
  )
}

function mapStateToProps({ auth }){
  return { auth }
}

export default connect(mapStateToProps)(AuthRoute)
