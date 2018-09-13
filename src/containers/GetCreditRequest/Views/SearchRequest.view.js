import React from 'react'
import { Responsive, Container, Grid, Segment, Header, Form, Button, Table, Label, Message } from 'semantic-ui-react'

const SearchRequestView = props => {
  console.log('props', props.searchResultByRut)
  return (
    <div>
      <Responsive>
        <Container>
          <Grid stackable>
            <Grid.Row columns='2'>
              <Grid.Column>
                <Segment raised textAlign='left'>
                  <Header as='h3'>Búsqueda por rut</Header>
                  <Form onSubmit={props.onSubmit}>
                    <Form.Field>
                      <Form.Input type='text' placeholder='11.111.111-1' label='Ingrese rut' onChange={props.onChange} name='rut'/>
                    </Form.Field>
                    <Form.Field>
                      <Button color='facebook'>Buscar</Button>
                    </Form.Field>
                  </Form>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment raised textAlign='left'>
                  <Header as='h3'>Búsqueda por fecha</Header>
                  <Form>
                    <Form.Field>
                      <Form.Input type='date' label='Fecha de Inicio' onChange={props.handleStartDate} />
                    </Form.Field>
                    <Form.Field>
                      <Form.Input type='date' label='Fecha de Término'  onChange={props.handleEndDate}/>
                    </Form.Field>
                    <Form.Field>
                      <Button color='facebook'>Buscar</Button>
                    </Form.Field>
                  </Form>
                </Segment>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns='1'>
              <Grid.Column>
                <Segment raised>
                  <Header as='h3'>Resultado</Header>
                  { props.searchResultByRut.length !== 0 ?
                  (
                    <Table celled selectable>
                      <Table.Header>
                        <Table.Row>
                          <Table.HeaderCell>
                            Nombre
                          </Table.HeaderCell>
                          <Table.HeaderCell>
                            Email
                          </Table.HeaderCell>
                          <Table.HeaderCell>
                            Sexo
                          </Table.HeaderCell>
                          <Table.HeaderCell>
                            Estado Civil
                          </Table.HeaderCell>
                          <Table.HeaderCell>
                            Hijos
                          </Table.HeaderCell>
                          <Table.HeaderCell>
                            Telefono
                          </Table.HeaderCell>
                          <Table.HeaderCell>
                            Direccion
                          </Table.HeaderCell>
                          <Table.HeaderCell>
                            Comuna
                          </Table.HeaderCell>
                          <Table.HeaderCell>
                            Educacion
                          </Table.HeaderCell>
                          <Table.HeaderCell>
                            Renta
                          </Table.HeaderCell>
                          <Table.HeaderCell>
                            Sueldo Líquido
                          </Table.HeaderCell>
                          <Table.HeaderCell>
                            Enfermedad crónica
                          </Table.HeaderCell>
                        </Table.Row>
                      </Table.Header>
                      <Table.Body>
                        { props.searchResultByRut.map(item => 
                          <Table.Row>
                            <Table.Cell>
                            {item.nombre} {item.apellido_paterno} {item.apellido_materno}
                            </Table.Cell>
                            <Table.Cell>
                              {item.correo}
                            </Table.Cell>
                            <Table.Cell>
                              {item.sexo === 'M' ? 'Masculino': 'Femenino'}
                            </Table.Cell>
                            <Table.Cell>
                              {item.estado_civil}
                            </Table.Cell>
                            <Table.Cell>
                              {item.hijos}
                            </Table.Cell>
                            <Table.Cell>
                              {item.telefono}
                            </Table.Cell>
                            <Table.Cell>
                              {item.direccion}
                            </Table.Cell>
                            <Table.Cell>
                              {item.comuna}
                            </Table.Cell>
                            <Table.Cell>
                              {item.educacion}
                            </Table.Cell>
                            <Table.Cell>
                              {item.renta}
                            </Table.Cell>
                            <Table.Cell>
                              {item.sueldo_liquido}
                            </Table.Cell>
                            <Table.Cell>
                              {item.enfermedad_cronica === 'no' ? <Label color='green' horizontal>Sin enfermedad Crónica</Label> : <Label color='red' horizontal>Con enfermedad crónica</Label> }
                            </Table.Cell>
                          </Table.Row>
                          )}
                      </Table.Body>
                    </Table>
                  )
                  :
                  <Message negative>
                    <Message.Header>No hay solicitudes buscadas</Message.Header>
                  </Message>
                  }
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Responsive>
    </div>
  )
}

export default SearchRequestView
