import React from 'react'
import { Grid, Header, Button, Table } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import swal from 'sweetalert2'
import { withSwalInstance } from 'sweetalert2-react'

const SweetAlert = withSwalInstance(swal)

const GetCreditRequestView = props => {
  console.log('props', props)
  return (
    <div>
      <Grid verticalAlign='middle' textAlign='center' column='1'>
        <Grid.Row style={{ marginTop: '2.5rem' }}>
          <Grid.Column>
            <Header as='h3'>Estado de solicitudes</Header>
            <Button color='facebook' onClick={props.clickActionButtons} value='crear' as={Link} to='/protected/create-credit'>Crear solicitud de credito</Button>
            <Button color='google plus' as={Link} to='/protected/executive/search-credit'>Buscar solicitud</Button>
          </Grid.Column>
        </Grid.Row>
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
                {props.creditData instanceof Array ? 
                  props.creditData.map(item => 
                    <Table.Row>
                      <Table.Cell>{item.rut}</Table.Cell>
                      <Table.Cell>{item.nombre}</Table.Cell>
                      <Table.Cell>{item.estado}</Table.Cell>
                      <Table.Cell>
                        <Button color='facebook' as={Link} to={`/protected/executive/show-credit-request/${item.id}`} onClick={() => props.sendCreditData(item)}>Ver</Button>
                        <Button color='vk' as={Link} to={`/protected/executive/edit-credit/${item.id}`} onClick={() => props.sendToEdit(item)}>Editar</Button>
                        <Button color='red' value='eliminar' onClick={() => props.deleting(item.id)}>Eliminar</Button>
                      </Table.Cell>
                    </Table.Row>
                  )
                  :
                  <div></div>
                }
              </Table.Body>
            </Table>
            <SweetAlert 
              show={props.deleted}
              title={'Solicitud se borro con éxito'}
              onConfirm={() => props.closeSwal()}
              type={'success'}
              />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}

export default GetCreditRequestView
