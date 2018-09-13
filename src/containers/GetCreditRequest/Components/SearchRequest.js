import React, { Component } from 'react'
import SearchRequestView from '../Views/SearchRequest.view'
import { connect } from 'react-redux'
import moment from 'moment'

import { getCreditData } from '../../../actions/index'
import { bindActionCreators } from 'redux'

export class SearchRequest extends Component {
  constructor(props){
    super(props)
    this.state = {
      rut: '',
      startDate: '',
      endDate: '',
      searchResultByRut: []
    }
  }
  componentWillMount(){
    this.props.getCreditData().then(() => {
      console.log(this.props.credit.data[0].fecha_creacion)
    })
  }
  onChange = e => {
    e.preventDefault()
    console.log(e.target.value)
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
      // console.log('this.state rut', this.state.rut)
      this.searchByRut(this.state.rut)
    }
    if(this.state.startDate !== '' && this.state.endDate !== ''){
      this.searchByDate(this.atate.startDate, this.state.endDate)
    }
  }
  searchByRut = rut => {
    if(this.props.credit.data){
      const searchResult = this.props.credit.data.filter(item => item.rut === rut.split('.').join(''))
      this.setState({
        searchResultByRut: searchResult
      })
    }
  }
  render() {
    // console.log('search props')
    return (
      <div>
        <SearchRequestView 
        onChange={this.onChange}
        handleStartDate={this.handleStartDate}
        handleEndDate={this.handleEndDate}
        onSubmit={this.onSubmit}
        searchResultByRut={this.state.searchResultByRut}
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
