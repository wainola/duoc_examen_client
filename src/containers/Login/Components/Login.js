import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import LoginView from '../Views/Login.view'
import { loginSchema } from '../../../validators/index'

import { localLogin } from '../../../actions/index'

export class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: {
        rut: '',
        password: ''
      }
    }
  }
  componentWillReceiveProps(nextProps){
    console.log('nextProps', nextProps)
    // if(nextProps.auth.isAuthenticated){
    //   nextProps.history.push('/protected/get-credit')
    // }
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
      }, () => {
        console.log('rut', this.state.user.rut)
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
    console.log('this.state', this.state)
    const body = { credentials: { ...this.state.user } }
    this.props.localLogin(body)
  }
  render() {
    return (
      <div>
        <LoginView 
        handleChangeAuth={this.handleChangeAuth} 
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        />
      </div>
    )
  }
}

function mapStateToProps({ auth }){
  return { auth }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ localLogin }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
