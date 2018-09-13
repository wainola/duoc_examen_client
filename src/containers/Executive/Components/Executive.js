import React, { Component } from 'react'
import ExecutiveView from '../Views/Executive.view'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { loginExecutive, changeLoginStatus } from '../../../actions/index'

export class Executive extends Component {
    constructor(props){
        super(props)
        this.state = {
          executive: {
            rut: '',
            password: ''
          },
          errorSwal: false
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
          const rut = r.substring(0, r.search('-'))
          console.log('rut', rut)
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
        console.log('body to send', body)
        this.props.loginExecutive(body).then(() => {
          console.log('logeando executive', this.props)
          if(this.props.executive.status === 200){
            this.props.changeLoginStatus()
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
    console.log('executive this.props', this.props)  
    return (
      <div>
        <ExecutiveView 
        handleChangeAuth={this.handleChangeAuth}
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        errorSwal={this.state.errorSwal}
        closeSwal={this.closeSwal}
        />
      </div>
    )
  }
}

function mapStateToProps({ executive }){
    return { executive }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators( { loginExecutive, changeLoginStatus }, dispatch )
}

export default connect(mapStateToProps, mapDispatchToProps)(Executive)
