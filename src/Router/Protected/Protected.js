import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import IndexGetCredit from '../../containers/GetCreditRequest/index'

const Protected = ({ component: Component, isAuthenticated, ...rest }) => {
  console.log('protected', rest)
  console.log('component', Component)
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
