import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const UnProtected = ({ auth: { isAuthenticated }, component: Component, ...rest}) => {
  // console.log('unprotected', rest)
  return (
    <div>
      <Route { ...rest} render={props => isAuthenticated ? <Redirect to='/protected/create-credit-request' /> : <Component { ...props } />} />
    </div>
  )
}

function mapStateToProps({ auth }){
  return { auth }
}

export default connect(mapStateToProps)(UnProtected)
