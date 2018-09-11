import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const UnProtected = ({ auth: { isAuthenticated }, component: Component, ...rest}) => {
  // console.log('unprotected', rest)
  console.log('isAuth', isAuthenticated)
  return (
    <div>
      <Route { ...rest} render={props => isAuthenticated ? <Redirect to='/protected/create-credit' /> : <Component { ...props } />} />
    </div>
  )
}

function mapStateToProps({ auth }){
  return { auth }
}

export default connect(mapStateToProps)(UnProtected)
