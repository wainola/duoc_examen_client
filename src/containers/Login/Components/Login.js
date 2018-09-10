import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import LoginView from '../Views/Login.view'

import { changeLoginStatus } from '../../../actions/index'

export class Login extends Component {
  handleChangeAuth = e => {
    e.preventDefault()
    this.props.changeLoginStatus(!this.props.auth.isAuthenticated)
  }
  render() {
    console.log('this.props', this.props.auth.isAuthenticated)
    return (
      <div>
        <LoginView handleChangeAuth={this.handleChangeAuth} />
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
