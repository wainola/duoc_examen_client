import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const Protected = ({ component: Component, ...rest }) => (
  <Route 
  { ...rest }
  render={
    props => 
    (
      props.auth.isAuthenticated ? 
      (
        <Component { ...props } />
      ) : (
        <Redirect to ={{ pathname: '/login' }} />
      )
    )
  } />
)

function mapStateToProps({ auth }){
  return { auth }
}

export default connect(mapStateToProps)(Protected)
