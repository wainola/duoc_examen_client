import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import LoginView from '../Views/Login.view'

import { changeLoginStatus } from '../../../actions/index'

export class Login extends Component {
  componentWillReceiveProps(nextProps){
    console.log('nextProps', nextProps)
    if(nextProps.auth.isAuthenticated){
      nextProps.history.push('/protected/get-credit')
    }
  }
  handleChangeAuth = e => {
    e.preventDefault()
    this.props.changeLoginStatus(!this.props.auth.isAuthenticated)
  }
  render() {
    return (
      <div>
        <LoginView handleChangeAuth={this.handleChangeAuth} isAuthenticated={this.props.auth.isAuthenticated} />
      </div>
    )
  }
}

function mapStateToProps({ auth }){
  return { auth }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ changeLoginStatus }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
