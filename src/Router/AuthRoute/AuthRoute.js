import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const AuthRoute = (props) => {
  console.log('props', props)
  const { google: { google_auth }, location, history, match, component: Component } = props
  return (
    <Route render={props => (
      (
        !google_auth ? <Redirect to='/'/> : <Component {...props} />
      )
    )} />
  )
}

function mapStateToProps({ google }){
  return { google }
}

export default connect(mapStateToProps)(AuthRoute)
