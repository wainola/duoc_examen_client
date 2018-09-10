import React, { Component } from 'react'
import GetCreditRequestView from '../Views/GetCreditRequest.view';
import { connect } from 'react-redux'
import {  bindActionCreators } from 'redux'

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

export default connect(mapStateToProps)(GetCreditRequest)
