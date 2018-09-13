import React from 'react'
import { Responsive, Container, Grid, Segment, Header, Form, Button } from 'semantic-ui-react'

const SearchRequestView = props => {
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
