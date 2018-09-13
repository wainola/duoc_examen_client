import React, { Component } from 'react'
import DashboardView from '../Views/Dashboard.view'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { postCreditRequest } from '../../../actions/index'

export class Dashboard extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: {
        nombre:'',
        apellido_paterno:'',
        apellido_materno:'',
        rut:''
      }
    }
  }
  componentWillMount(){
    if(localStorage.user){
      const user = JSON.parse(localStorage.getItem('user'))
      this.setState({
        user:{
          ...user
        }
      })
    }
  }
  render() {
    console.log('dashboard', this.props)
    return (
      <div>
        <DashboardView user={this.state.user}/>
      </div>
    )
  }
}

function mapStateToProps({ credit }){
  return { credit }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ postCreditRequest }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
