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
      },
      executiveLogged: false,
      userLogged: false
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
    if(localStorage.executive){
      const user = JSON.parse(localStorage.getItem('executive'))
      this.setState({
        user:{
          ...user
        },
        executiveLogged: !this.state.executiveLogged
      })
    }
  }
  render() {
    return (
      <div>
        <DashboardView user={this.state.user} executiveLogged={this.state.executiveLogged} userLogged={this.state.userLogged}/>
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
