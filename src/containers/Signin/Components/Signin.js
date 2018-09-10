import React, { Component } from 'react'
import SigninView from '../Views/Signin.view'

export class Signin extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: {
        rut: '',
        dv: '',
        nombre: '',
        apellido_paterno: '',
        apellido_materno: '',
        fecha_nacimiento: '',
        password: ''
      }
    }
  }
  onChange = e => {
    e.preventDefault()
    this.setState({
      ...this.state,
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value
      }
    })
  }
  onSubmit = e => {
    e.preventDefault()
    console.log('submit', this.state.user)
  }
  render() {
    return (
      <div>
        <SigninView />
      </div>
    )
  }
}

export default Signin
