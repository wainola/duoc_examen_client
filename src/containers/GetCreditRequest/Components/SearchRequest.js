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
      searchResultByRut: [],
      orderListByDate: [],
      searchResultByDate: []
    }
  }
  componentWillMount(){
    this.props.getCreditData().then(() => {
      this.setState({
        orderListByDate: this.props.credit.data.map(item => ({
          id: item.id, fecha_creacion: moment(item.fecha_creacion).format('YYYY-MM-DD')
        }))
      })
    })
  }
  onChange = e => {
    e.preventDefault()
    this.setState({
      rut: e.target.value
    })
  }
  handleStartDate = e => {
    e.preventDefault()
    console.log('startDate', moment(e.target.value).format('DD/MM/YYYY'))
    this.setState({
      startDate: moment(e.target.value).format('YYYY-MM-DD')
    })
  }
  handleEndDate = e => {
    e.preventDefault()
    this.setState({
      endDate: moment(e.target.value).format('YYYY-MM-DD')
    })
  }
  onSubmit = e => {
    e.preventDefault()
    console.log('e.target', e.target)
    if(this.state.rut !== ''){
      // console.log('this.state rut', this.state.rut)
      this.searchByRut(this.state.rut)
    }
    if(this.state.startDate !== '' && this.state.endDate !== ''){
      this.searchByDate(this.state.startDate, this.state.endDate)
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
  searchByDate = (startDate, endDate) => {
    console.log('searchByDate')
    if(this.props.credit.data){

      const r = this.state.orderListByDate.filter(item => moment(item.fecha_creacion).isBetween(startDate, endDate)).map(item => item.id)

      const rDefinitive = this.props.credit.data.filter((item, idx) => item.id === r[idx])

      console.log('rDefinitive', rDefinitive)
      this.setState({
        searchResultByDate: rDefinitive
      })
      
    }
  }
  BorrarFiltros = e => {
    e.preventDefault()
    this.setState({
      rut: '',
      startDate: '',
      endDate: '',
      searchResultByRut: [],
      searchResultByDate: []
    })
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
        searchResultByDate={this.state.searchResultByDate}
        BorrarFiltros={this.BorrarFiltros}
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
