import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import IndexGetCredit from '../../containers/GetCreditRequest/index'

const Protected = ({ component: Component, auth: { isAuthenticated }, ...rest }) => {
  return(
    <Route {...rest} render={props => 
      isAuthenticated ? <IndexGetCredit {...props}/> : <Redirect to='/login' />
    } />
  )
}

function mapStateToProps({ auth }){
  return { auth }
}

export default connect(mapStateToProps)(Protected)
