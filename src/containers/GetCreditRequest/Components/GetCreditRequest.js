import React, { Component } from 'react'
import GetCreditRequestView from '../Views/GetCreditRequest.view';
import { connect } from 'react-redux'
import {  bindActionCreators } from 'redux'
import { isEmpty } from 'lodash'

import { getCreditData, sendDataToShow, deletingRequest } from '../../../actions/index'

export class GetCreditRequest extends Component {
  constructor(props){
    super(props)
  }
  componentWillMount(){
    this.props.getCreditData()
  }
  sendCreditData = item => {
    // e.preventDefault()
    console.log('data')
    this.props.sendDataToShow(item)
  }
  deleting = id => {
    console.log('id', id)
    const body = { user: {
      id
    }}
    this.props.deletingRequest(body)
  }
  render() {
    console.log('this.props getCredit', this.props)
    let creditData
    if(!isEmpty(this.props.credit)){
      creditData = this.props.credit.data_to_display
    }
    return (
      <div>
        <GetCreditRequestView 
        creditData={creditData}
        sendCreditData={this.sendCreditData}
        deleting={this.deleting}
        />
      </div>
    )
  }
}

function mapStateToProps({ credit }){
  return { credit }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ getCreditData, sendDataToShow, deletingRequest }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GetCreditRequest)
