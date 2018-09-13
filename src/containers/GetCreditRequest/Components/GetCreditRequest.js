import React, { Component } from 'react'
import GetCreditRequestView from '../Views/GetCreditRequest.view';
import { connect } from 'react-redux'
import {  bindActionCreators } from 'redux'

import { logout } from '../../../actions/index'

export class GetCreditRequest extends Component {
  handleLogin = e => {
    e.preventDefault()
    this.props.logout()
  }
  render() {
    console.log('this.props getCredit', this.props)
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
  return bindActionCreators({ logout }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GetCreditRequest)
