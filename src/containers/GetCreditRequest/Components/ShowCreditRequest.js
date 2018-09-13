import React, { Component } from 'react'
import { connect } from 'react-redux'
import ShowCreditRequestView from '../Views/ShowCreditRequest.view'

export class ShowCreditRequest extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div>
        <ShowCreditRequestView {...this.props}/>
      </div>
    )
  }
}

function mapStateToProps({ credit }){
    return { credit }
}

export default connect(mapStateToProps)(ShowCreditRequest)
