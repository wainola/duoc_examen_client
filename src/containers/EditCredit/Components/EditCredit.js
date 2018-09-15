import React, { Component } from 'react'
import EditCreditView from '../Views/EditCredit.view'
import { estadoCivil, c, educacion, renta } from '../../CreateCreditRequest/Components/CreateCreditRequest'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { isEmpty } from 'lodash'

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
    console.log('this.props', this.props)
    if(isEmpty(this.props.credit)){
      this.props.history.goBack()
    }
    return (
      <div>
        <EditCreditView 
        estadoCivil={estadoCivil}
        comunas={c}
        educacion={educacion}
        renta={renta}
        creditToEdit={this.props.credit.data_received}
        dataToDisplay={this.props.credit.data_to_display}
        />
      </div>
    )
  }
}

function mapStateToProps({ credit }){
  return { credit }
}

export default connect(mapStateToProps)(EditCredit)
