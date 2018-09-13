import React, { Component } from 'react'
import GetCreditRequestView from '../Views/GetCreditRequest.view';
import { connect } from 'react-redux'
import {  bindActionCreators } from 'redux'
import { isEmpty } from 'lodash'

import { getCreditData } from '../../../actions/index'

export class GetCreditRequest extends Component {
  constructor(props){
    super(props)
  }
  componentWillMount(){
    this.props.getCreditData()
  }
  render() {
    console.log('this.props getCredit', this.props)
    let creditData
    if(!isEmpty(this.props.credit)){
      creditData = this.props.credit.data
    }
    const c = this.props.credit
    return (
      <div>
        <GetCreditRequestView creditData={creditData}/>
      </div>
    )
  }
}

function mapStateToProps({ credit }){
  return { credit }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ getCreditData }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GetCreditRequest)
