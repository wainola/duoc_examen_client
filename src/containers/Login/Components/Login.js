import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import LoginView from '../Views/Login.view'

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
    if(nextProps.auth.isAuthenticated){
      nextProps.history.push('/protected/get-credit')
    }
  }
  handleChangeAuth = e => {
    e.preventDefault()
    this.props.changeLoginStatus(!this.props.auth.isAuthenticated)
  }
  onChange = e => {
    e.preventDefault()
    this.setState({
      ...this.state,
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value
      }
    })
  }
  onSubmit = e => {
    e.preventDefault()
    console.log('this.state', this.state)
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
  return bindActionCreators({ }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
