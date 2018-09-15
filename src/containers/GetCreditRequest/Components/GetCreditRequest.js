import React, { Component } from 'react'
import GetCreditRequestView from '../Views/GetCreditRequest.view';
import { connect } from 'react-redux'
import {  bindActionCreators } from 'redux'
import { isEmpty } from 'lodash'

import { getCreditData, sendDataToShow, deletingRequest, sendDataToEdit } from '../../../actions/index'

export class GetCreditRequest extends Component {
  constructor(props){
    super(props)
    this.state = {
      deleted: false
    }
  }send
  componentWillMount(){
    this.props.getCreditData()
  }
  sendCreditData = item => {
    this.props.sendDataToShow(item)
  }
  sendToEdit = item => {
    this.props.sendDataToEdit(item)
  }
  deleting = id => {
    const body = { user: {
      id
    }}
    this.props.deletingRequest(body).then(() => {
      this.setState({
        deleted: !this.state.deleted
      })
    })
  }
  closeSwal = () => {
    this.setState({
      deleted: !this.state.deleted
    }, () => {
      this.props.getCreditData()
    })
  }
  render() {
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
        deleted={this.state.deleted}
        closeSwal={this.closeSwal}
        sendToEdit={this.sendToEdit}
        />
      </div>
    )
  }
}

function mapStateToProps({ credit }){
  return { credit }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ getCreditData, sendDataToShow, deletingRequest, sendDataToEdit }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GetCreditRequest)
