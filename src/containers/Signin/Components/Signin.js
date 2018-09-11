import React, { Component } from 'react'
import SigninView from '../Views/Signin.view'
import Joi from 'joi'
import { signinUserSchema } from '../../../validators/index'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { postUser } from '../../../actions/index'

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
      },
      errorSwal: false,
      successSwal: false,
      passwordMatch: false
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
    } 
    else if(e.target.name === 'password_repeated' && this.state.user.password !== ''){
      this.setState({
        passwordMatch: e.target.value === this.state.user.password
      }, () => {
        console.log('passwordMatched? ', this.state.passwordMatch)
      })
    }
    else {
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
    Joi.validate(this.state.user, signinUserSchema, (error, value) => {
      if(error !== null){
        this.setState({
          errorSwal: !this.state.errorSwal
        })
      }

      console.log('error::::::::::::::::', error)
      console.log('VALUE', value)
    })
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
  closeSwalError = () => {
    this.setState({
      errorSwal: !this.state.errorSwal
    })
  }
  closeSwalSuccess = () => {
    this.setState({
      successSwal: !this.state.successSwal
    })
  }
  render() {
    return (
      <div>
        <SigninView
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        closeSwalError={this.closeSwalError}
        errorSwal={this.state.errorSwal}
        closeSwalSuccess={this.closeSwalSuccess}
        successSwal={this.state.successSwal}
         />
      </div>
    )
  }
}

function mapStateToProps({ user }){
  return { user }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ postUser }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin)
