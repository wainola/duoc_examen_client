import React, { Component } from 'react'
import GetCreditRequestView from '../Views/GetCreditRequest.view';
import { connect } from 'react-redux'
import {  bindActionCreators } from 'redux'

import { changeLoginStatus } from '../../../actions/index'

export class GetCreditRequest extends Component {
  handleLogin = e => {
    e.preventDefault()
    this.props.changeLoginStatus(!this.props.auth.isAuthenticated)
  }
  render() {
    return (
      <div>
        <GetCreditRequestView handleLogin={this.handleLogin}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(GetCreditRequest)
