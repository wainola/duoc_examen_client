import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const Protected = ({ component: Component, isAuthenticated, ...rest }) => {
  // console.log('props', rest)
  return(
    <Route {...rest} render={props => 
      isAuthenticated ? <Component {...props}/> : <Redirect to='/login' />
    } />
  )
}

function mapStateToProps({ auth }){
  return { isAuthenticated: auth.isAuthenticated }
}

export default connect(mapStateToProps)(Protected)
