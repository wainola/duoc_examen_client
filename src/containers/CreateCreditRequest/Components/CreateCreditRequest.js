import React, { Component } from 'react'
import { comunas } from '../../../data/comunas'
import { flattenDeep } from 'lodash'
import uuid from 'uuid'
import moment from 'moment'
import es from 'moment/locale/es'
import CreateCreditView from '../Views/CreateCredit.view'

export const estadoCivil = [
  { key: 1, value: 'Soltero', text:'Soltero'},
  { key: 2, value: 'Casado', text: 'Casado'},
  { key: 3, value: 'Viudo', text: 'Viudo'},
  { key: 4, value: 'Divorciado', text: 'Divorciado'}
]

export const c = flattenDeep(comunas.regiones.filter(item => item.nombre === 'Región Metropolitana de Santiago').map(item => item.comunas)).map((item, idx) => ({ key: idx, value: item, text: item}))

export const educacion = [
  {
    key: 1, value:'Profesional', text: 'Profesional'
  },
  {
    key: 2, value: 'Técnico', text: 'Técnico'
  },
  {
    key: 3, value: 'Media', text: 'Media'
  },
  {
    key: 4, value: 'Básica', text: 'Básica'
  },
  {
    key: 5, value: 'No posee', text: 'No posee'
  }
]

export const renta = [
  { key: 1, value: 'Fija', text: 'Fija'},
  { key: 2, value: 'Variable', text: 'Variable'},
  { key: 3, value: 'Boleta de Honorarios', text: 'Boleta de Honorarios'}
]

export class CreateCreditRequest extends Component {
  constructor(props){
    super(props)
    this.state = {
      credit: {
        id: '',
        rut: '',
        dv: '',
        nombre: '',
        apellido_paterno: '',
        apellido_materno: '',
        fecha_nacimiento: '',
        sexo: '',
        estado_civil: '',
        hijos: '',
        telefono: '',
        email: '',
        direccion: '',
        comuna: '',
        educacion: '',
        renta: '',
        sueldo_liquido: '',
        enfermedad_cronica: 'no'
      },
      handleHijosWasTouched: false
    }
  }
  onChange = e => {
    e.preventDefault()
    console.log('e.target.value', moment(e.target.value).format('l'))
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
    else if (e.target.name === 'fecha_nacimiento') {
      this.setState({
        ...this.state,
        user: {
          ...this.state.user,
          [e.target.name]: moment(e.target.value).format('l')
        }
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
  handleSex = e => {
    e.preventDefault()
    this.setState({
      ...this.state,
      user: {
        ...this.state.user,
        sexo: e.target.textContent
      }
    })
  }
  handleEstadoCivil = (e, { value }) => {
    e.preventDefault()
    
    this.setState({
      ...this.state,
      user: {
        ...this.state.user,
        estado_civil: value
      }
    })
  }
  handleHijos = e => {
    e.preventDefault()
    console.log('handleHijos')
    this.setState({
      ...this.state,
      handleHijosWasTouched: !this.state.handleHijosWasTouched
    })
  }
  handleComunas = (e, { value }) => {
    e.preventDefault()
    this.setState({
      ...this.state,
      user:{
        ...this.state.user,
        comuna: value
      }
    })
  }
  handleEducacion = (e, { value }) => {
    e.preventDefault()
    this.setState({
      ...this.state,
      user:{
        ...this.state.user,
        educacion: value
      }
    })
  }
  handleRenta = (e, { value }) => {
    e.preventDefault()
    this.setState({
      ...this.state,
      user:{
        ...this.state.user,
        renta: value
      }
    })
  }
  handleEnfermedad = e => {
    e.preventDefault()
    this.setState({
      ...this.state,
      user:{
        ...this.state.user,
        enfermedad_cronica: 'si'
      }
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
  onSubmit = e => {
    e.preventDefault()
    const body = this.state.user
    console.log('body to send', body)
  }
  render() {
    return (
      <div>
        <CreateCreditView 
          estadoCivil={estadoCivil}
          comunas={c}
          educacion={educacion}
          renta={renta}
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          handleSex={this.handleSex}
          handleEstadoCivil={this.handleEstadoCivil}
          handleHijos={this.handleHijos}
          handleHijosWasTouched={this.state.handleHijosWasTouched}
          handleComunas={this.handleComunas}
          handleEducacion={this.handleEducacion}
          handleRenta={this.handleRenta}
          handleEnfermedad={this.handleEnfermedad}
        />
      </div>
    )
  }
}

export default CreateCreditRequest
