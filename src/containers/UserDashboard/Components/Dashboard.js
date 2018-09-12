import React, { Component } from 'react'
import DashboardView from '../Views/Dashboard.view'

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
    // console.log(JSON.parse(localStorage.getItem('user')))
    return (
      <div>
        <DashboardView user={this.state.user}/>
      </div>
    )
  }
}

export default Dashboard
