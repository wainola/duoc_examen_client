import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import LoginView from '../Views/Login.view'
import { loginSchema } from '../../../validators/index'

import { localLogin, successGoogleLogin } from '../../../actions/index'

export class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: {
        rut: '',
        password: ''
      },
      errorSwal: false
    }
  }
  responseGoogle = response => {
    if(response.tokenObj){
      this.props.successGoogleLogin(response)
    }
  }
  handleChangeAuth = e => {
    e.preventDefault()
    this.props.changeLoginStatus(!this.props.auth.isAuthenticated)
  }
  onChange = e => {
    e.preventDefault()
    if((e.target.name === 'rut') && (e.target.value.split('.').length === 3 || e.target.value.split('.').length === 1)){
      const r = e.target.value
      const rut = r.substring(0, r.search('-')).split('.').join('')
      this.setState({
        ...this.state,
        user: {
          ...this.state.user,
          [e.target.name]: rut
        }
      })
    } else {
      this.setState({
        ...this.state,
        user: {
          ...this.state.user,
          [e.target.name]: e.target.value
        }
      })
    }
  }
  onSubmit = e => {
    e.preventDefault()
    const body = { credentials: { ...this.state.user } }
    this.props.localLogin(body).then(() => {
      if(this.props.auth.status === 404){
        this.setState({
          errorSwal: !this.state.errorSwal
        })
      }
    }) 
  }
  closeSwal = () => {
    this.setState({
      errorSwal: !this.state.errorSwal
    }, () => {
      document.forms[0].reset()
    })
  }
  render() {
    return (
      <div>
        <LoginView 
        handleChangeAuth={this.handleChangeAuth} 
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        errorSwal={this.state.errorSwal}
        closeSwal={this.closeSwal}
        responseGoogle={this.responseGoogle}
        />
      </div>
    )
  }
}

function mapStateToProps({ auth }){
  return { auth }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ localLogin, successGoogleLogin }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
