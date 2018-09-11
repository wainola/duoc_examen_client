import React, { Component } from 'react'
import EditCreditView from '../Views/EditCredit.view'
import { estadoCivil, c, educacion, renta } from '../../CreateCreditRequest/Components/CreateCreditRequest'

export class EditCredit extends Component {
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
        <EditCreditView 
        estadoCivil={estadoCivil}
        comunas={c}
        educacion={educacion}
        renta={renta}
        />
      </div>
    )
  }
}

export default EditCredit
