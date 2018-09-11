import React from 'react'
import { Grid, Responsive, Container, Form, Button, Segment } from 'semantic-ui-react'
import swal from 'sweetalert2'
import { withSwalInstance } from 'sweetalert2-react'

const SweetAlert = withSwalInstance(swal)

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
                      <Form.Input type='text' placeholder='cotapos' label='Apellido materno' name='apellido_materno' onChange={props.onChange}/>
                    </Form.Field>
                    <Form.Field>
                      <Form.Input type='text' placeholder='01/01/2000' label='Fecha de nacimiento' name='fecha_nacimiento' onChange={props.onChange}/>
                    </Form.Field>
                    <Form.Field>
                      <Form.Input type='password' placeholder='contraseña' label='Contraseña' name='password' onChange={props.onChange}/>
                    </Form.Field>
                    <Form.Field>
                      <Form.Input type='password' placeholder='contraseña' label='Repetir contraseña' name='repeated_password' onChange={props.onChange}/>
                    </Form.Field>
                    <Form.Field>
                      <Button color='facebook'>Registrarse</Button>
                    </Form.Field>
                  </Form>
                  <SweetAlert 
                    show={props.errorSwal}
                    title={'Alguno de los campos no se ingresó correctamente'}
                    onConfirm={() => props.closeSwalError()}
                    type={'error'}
                    />
                    <SweetAlert 
                    show={props.successSwal}
                    title={'Éxito en registrar el usuario'}
                    onConfirm={() => props.closeSwalSuccess()}
                    type={'success'}
                    />
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
