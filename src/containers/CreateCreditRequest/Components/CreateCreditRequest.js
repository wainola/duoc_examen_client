import React, { Component } from 'react'
import { comunas } from '../../../data/comunas'
import { flattenDeep } from 'lodash'
import { Button, Grid } from 'semantic-ui-react';
import CreateCreditView from '../Views/CreateCredit.view';

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
  }
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
        <CreateCreditView 
          estadoCivil={estadoCivil}
          comunas={c}
          educacion={educacion}
          renta={renta}
        />
      </div>
    )
  }
}

export default CreateCreditRequest
