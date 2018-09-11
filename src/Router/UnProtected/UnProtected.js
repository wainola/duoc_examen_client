import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const UnProtected = ({ isAuthenticated, component: Component, location, ...rest}) => {
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
