import React from 'react'
import { Grid, Table, Button } from 'semantic-ui-react'

const GetCreditRequest = props => {
  console.log('props get credit', props)
  return (
    <div>
      <Grid verticalAlign='middle' textAlign='center' column='1'>
        <Grid.Row>
          <Grid.Column>
            <Table celled selectable>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>
                    Rut
                  </Table.HeaderCell>
                  <Table.HeaderCell>
                    Nombre
                  </Table.HeaderCell>
                  <Table.HeaderCell>
                    Estado
                  </Table.HeaderCell>
                  <Table.HeaderCell>
                    Acciones
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {props.creditData !== undefined ? 
                  props.creditData.usuarios.map(item => 
                    <Table.Row>
                      <Table.Cell>{item.rut}</Table.Cell>
                      <Table.Cell>{item.nombre}</Table.Cell>
                      <Table.Cell>{item.estado}</Table.Cell>
                      <Table.Cell>
                        <Button color='blue' onClick={props.clickActionButtons}value='ver'>Ver</Button>
                        <Button color='green' onClick={props.clickActionButtons} value='editar'>Editar</Button>
                        <Button color='red' onClick={props.clickActionButtons}value='eliminar'>Eliminar</Button>
                      </Table.Cell>
                    </Table.Row>
                  )
                  :
                  <div></div>
                }
              </Table.Body>
            </Table>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}

export default GetCreditRequest
