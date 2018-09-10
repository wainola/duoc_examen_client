import React, { Component } from 'react'
import SigninView from '../Views/Signin.view'
import Joi from 'joi'
import { signinUserSchema } from '../../../validators/index'

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
    if((e.target.name === 'rut') && (e.target.value.split('.').length === 3 || e.target.value.split('.').length === 1)){
      const { rut, dv } = this.cleanID(e.target.value)
      this.setState({
        ...this.state,
        user: {
          ...this.state.user,
          rut,
          dv
        }
      })
    } else {
      this.setState({
        ...this.state,
        user: {
          ...this.state.user,
          [e.target.name]: e.target.value
        }
      })
    }
  }
  onSubmit = e => {
    e.preventDefault()
    console.log('submit', this.state.user)
    const error = Joi.validate(this.state.user, signinUserSchema)
    console.log('error', error)
  }
  cleanID = rut => {
    if (rut.search('-') !== -1){
        const r = rut.substring(0, rut.search('-')).split('.').join('')
        const d = rut.substring(rut.search('-')+1)
        return { rut: r, dv: d }
    } else {
        return { rut: '', dv: '' }
    }
  }
  render() {
    return (
      <div>
        <SigninView
        onSubmit={this.onSubmit}
        onChange={this.onChange}
         />
      </div>
    )
  }
}

export default Signin
