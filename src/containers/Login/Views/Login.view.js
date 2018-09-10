import React from 'react'
import { Button, Form, Grid, Container, Responsive } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const LoginView = props => {
  return (
    <div>
      <Responsive>
        <Container>
          <Grid>
            <Grid.Row textAlign='center' columns='1' style={{ paddingTop: '2rem' }}>
              <Grid.Column>
                <Button color='google plus' as={Link} to='/'>Volver al Home</Button>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row textAlign='left' columns='1'>
              <Grid.Column>
                <Form onSubmit={props.onSubmit}>
                  <Form.Field>
                    <Form.Input type='text' name='rut' placeholder='11111111-1' label='Ingrese su rut' onChange={props.onChange}/>
                  </Form.Field>
                  <Form.Field>
                    <Form.Input type='password' name='password' placeholder='my password' label='Ingrese su contraseña' onChange={props.onChange}/>
                  </Form.Field>
                  <Form.Field>
                    <Button color='facebook'>Ingresar</Button>
                  </Form.Field>
                </Form>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Responsive>
    </div>
  )
}

export default LoginView
