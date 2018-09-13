import React, { Component } from 'react'
import SearchRequestView from '../Views/SearchRequest.view'
import { connect } from 'react-redux'

import { getCreditData } from '../../../actions/index'
import { bindActionCreators } from 'redux'

export class SearchRequest extends Component {
  constructor(props){
    super(props)
  }
  componentWillMount(){
    this.props.getCreditData()
  }
  render() {
    console.log('search props', this.props)
    return (
      <div>
        <SearchRequestView />
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
