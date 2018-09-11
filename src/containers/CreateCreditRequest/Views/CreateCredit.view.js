import React from 'react'
import { Responsive, Container, Grid, Form, Segment, Header, Checkbox, Dropdown, Button } from 'semantic-ui-react'

const CreateCreditView = props => {
  return (
    <div>
      <Responsive>
        <Container>
          <Grid>
            <Grid.Row>
              <Grid.Column>
                <Segment raised>
                  <Form style={{ heigth: '1500px' }}>
                    <Header as='h3'>Crear solicitud</Header>
                    <Form.Field>
                      <Form.Input type='text' placeholder='rut' label='Rut' name='rut' onChange={props.onChange}/>
                    </Form.Field>
                    <Form.Field>
                      <Form.Input type='text' placeholder='nombre' label='Nombre' name='nombre' onChange={props.onChange}/>
                    </Form.Field>
                    <Form.Field>
                      <Form.Input type='text' placeholder='apellido paterno' label='Apellido Paterno' name='apellido_paterno' onChange={props.onChange}/>
                    </Form.Field>
                    <Form.Field>
                      <Form.Input type='text' placeholder='apellido materno' label='Apellido Materno' name='apellido_materno' onChange={props.onChange}/>
                    </Form.Field>
                    <Form.Field>
                      <Form.Input type='date' placeholder='DD/MM/YYYY' label='Fecha de Nacimiento' name='fecha_nacimiento' onChange={props.onChange}/>
                    </Form.Field>
                    <Form.Field>
                      <label>Sexo</label>
                      <Checkbox
                        radio
                        label='F'
                        name='checkboxRadioGroup'
                        value='F'
                        onChange={props.handleSex}
                      />
                      <br/>
                      <Checkbox
                      radio
                      label='M'
                      name='checkboxRadioGroup'
                      value='M'
                      onChange={props.handleSex}
                      />
                    </Form.Field>
                    <Form.Field>
                      <Dropdown placeholder='Estado civil' fluid selection options={props.estadoCivil} label='Estado Civil' pointing='bottom' onChange={props.handleEstadoCivil}/>
                    </Form.Field>
                    <Form.Field>
                      <label>Hijos</label>
                      <Checkbox
                      radio
                      name='checkboxRadioGroup'
                      value='M'
                      onChange={props.handleHijos}
                      />
                      <br/>
                      <Form.Input type='text' placeholder='cantidad hijos' name='hijos' onChange={props.onChange}/>
                    </Form.Field>
                    <Form.Field>
                      <Form.Input type='text' placeholder='telefono' label='Teléfono' name='telefono' onChange={props.onChange}/>
                    </Form.Field>
                    <Form.Field>
                      <Form.Input type='text' placeholder='email@mail.com' label='Correo electrónico' name='email' onChange={props.onChange}/>
                    </Form.Field>
                    <Form.Field>
                      <Form.Input type='text' label='Dirección' name='direccion' placeholder='ingrese dirección' onChange={props.onChange}/>
                    </Form.Field>
                    <Form.Field>
                      <Dropdown placeholder='Estado civil' fluid selection options={props.comunas} label='Comunas' pointing='bottom' onChange={props.handleComunas}/>
                    </Form.Field>
                    <Form.Field>
                      <Dropdown placeholder='Educación' fluid selection options={props.educacion} onChange={props.handleEducacion}/>
                    </Form.Field>
                    <Form.Field>
                      <Dropdown placeholder='Renta' fluid selection options={props.renta} onChange={props.handleRenta}/>
                    </Form.Field>
                    <Form.Field>
                      <Form.Input type='text' placeholder='sólo números' label='Sueldo líquido' name='sueldo_liquido' onChange={props.onChange}/>
                    </Form.Field>
                    <Form.Field>
                      <label>Pacede alguna enfermedad</label>
                      <Checkbox
                        onChange={props.handleEnfermedad}
                        />
                    </Form.Field>
                    <Form.Field>
                      <Button color='blue'>Guardar</Button>
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

export default CreateCreditView
