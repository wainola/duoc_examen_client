import React, { Component } from 'react'
import EditForm from './EditForm'
import { Grid, Button } from 'semantic-ui-react';

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
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Button color='facebook' value='editar' onClick={this.props.clickActionButtons}>Volver</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <EditForm />
      </div>
    )
  }
}

export default EditCredit
