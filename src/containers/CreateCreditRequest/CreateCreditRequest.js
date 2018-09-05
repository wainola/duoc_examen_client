import React, { Component } from 'react'
import { comunas } from './comunas'
import { flattenDeep } from 'lodash'
import CreditForm from './CreditForm'

const estadoCivil = [
  { key: 1, value: 'Soltero', text:'Soltero'},
  { key: 2, value: 'Casado', text: 'Casado'},
  { key: 3, value: 'Viudo', text: 'Viudo'},
  { key: 4, value: 'Divorciado', text: 'Divorciado'}
]

const c = flattenDeep(comunas.regiones.filter(item => item.nombre === 'Región Metropolitana de Santiago').map(item => item.comunas)).map((item, idx) => ({ key: idx, value: item, text: item}))

const educacion = [
  {
    key: 1, value:'Profesional'
  },
  {
    key: 2, value: 'Técnico'
  },
  {
    key: 3, value: 'Media'
  },
  {
    key: 4, value: 'Básica'
  },
  {
    key: 5, value: 'No posee'
  }
]

const renta = [
  { key: 1, value: 'Fija'},
  { key: 2, value: 'Variable'},
  { key: 3, value: 'Boleta de Honorarios'}
]

export class CreateCreditRequest extends Component {
  onChange = e => {
    e.preventDefault()
  }
  handleSex = e => {
    e.preventDefault()
  }
  handleEstadoCivil = e => {
    e.preventDefault()
  }
  handleHijos = e => {
    e.preventDefault()
  }
  handleComunas = e => {
    e.preventDefault()
  }
  handleEducacion = e => {
    e.preventDefault()
  }
  handleRenta = e => {
    e.preventDefault()
  }
  handleEnfermedad = e => {
    e.preventDefault()
  }
  render() {
    return (
      <div>
        <CreditForm 
        renta={renta}
        educacion={educacion}
        comunas={c}
        estadoCivil={estadoCivil}
        onChange={this.onChange}
        handleSex={this.handleSex}
        handleEstadoCivil={this.handleEstadoCivil}
        handleHijos={this.handleHijos}
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
