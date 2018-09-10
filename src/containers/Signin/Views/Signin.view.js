import React from 'react'
import { Grid, Responsive, Container, Form, Button, Segment } from 'semantic-ui-react'

const SigninView = props => {
  return (
    <div>
      <Responsive>
        <Container>
          <Grid>
            <Grid.Row textAlign='left' stackable columns='1'>
              <Grid.Column>
                <Segment raised>
                  <Form onSubmit={props.onSubmit}>
                    <Form.Field>
                      <Form.Input type='text' placeholder='11.111.111-1' label='Rut' name='rut' onChange={props.onChange}/>
                    </Form.Field>
                    <Form.Field>
                      <Form.Input type='text' placeholder='juanito' label='Nombre' name='nombre' onChange={props.onChange}/>
                    </Form.Field>
                    <Form.Field>
                      <Form.Input type='text' placeholder='pérez' label='Apellido Paterno' name='apellido_paterno' onChange={props.onChange}/>
                    </Form.Field>
                    <Form.Field>
                      <Form.Input type='text' placeholder='cotapos' label='Apelliod materno' onChange={props.onChange}/>
                    </Form.Field>
                    <Form.Field>
                      <Form.Input type='text' placeholder='01/01/2000' label='Fecha de nacimiento' name='fecha_nacimiento' onChange={props.onChange}/>
                    </Form.Field>
                    <Form.Field>
                      <Form.Input type='passsword' placeholder='contraseña' label='Contraseña' name='password' onChange={props.onChange}/>
                    </Form.Field>
                    <Form.Field>
                      <Button color='facebook'>Registrarse</Button>
                    </Form.Field>
                  </Form>
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Responsive>
    </div>
  )
}

export default SigninView
