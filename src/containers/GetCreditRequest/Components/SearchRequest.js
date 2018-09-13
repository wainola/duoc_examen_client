import React, { Component } from 'react'
import SearchRequestView from '../Views/SearchRequest.view'
import { connect } from 'react-redux'

import { getCreditData } from '../../../actions/index'
import { bindActionCreators } from 'redux'

export class SearchRequest extends Component {
  constructor(props){
    super(props)
    this.state = {
      rut: '',
      startDate: '',
      endDate: ''
    }
  }
  componentWillMount(){
    this.props.getCreditData()
  }
  onChange = e => {
    e.preventDefault()
    this.setState({
      rut: e.target.value
    })
  }
  handleStartDate = e => {
    e.preventDefault()
    this.setState({
      startDate: e.target.value
    })
  }
  handleEndDate = e => {
    e.preventDefault()
    this.setState({
      endDate: e.target.value
    })
  }
  onSubmit = e => {
    e.preventDefault()
    if(this.state.rut !== ''){

    }
    if(this.state.startDate !== '' && this.state.endDate !== ''){

    }
  }
  render() {
    console.log('search props', this.props)
    return (
      <div>
        <SearchRequestView 
        onChange={this.onChange}
        handleStartDate={this.handleStartDate}
        handleEndDate={this.handleEndDate}
        onSubmit={this.onSubmit}
        />
      </div>
    )
  }
}

function mapStateToProps({ credit }){
  return { credit }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators( { getCreditData }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchRequest)
