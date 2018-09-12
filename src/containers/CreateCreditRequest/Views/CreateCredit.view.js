import React from 'react'
import { Responsive, Container, Grid, Form, Segment, Header, Checkbox, Dropdown, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import swal from 'sweetalert2'
import { withSwalInstance } from 'sweetalert2-react'

const SweetAlert = withSwalInstance(swal)

const CreateCreditView = props => {
  console.log('props', props.handleHijosWasTouched)
  return (
    <div>
      <Responsive>
        <Container>
          <Grid>
           <Grid.Row columns={2} textAlign='center' style={{ paddingTop: '2.5rem' }}>
            <Grid.Column>
              <Button color='facebook' as={Link} to='/protected/get-credit'>Ver créditos</Button>
            </Grid.Column>
            <Grid.Column>
              <Button color='google plus' as={Link} to='/protected/user-info'>Ver datos de usuarios</Button>
            </Grid.Column>
           </Grid.Row>
            <Grid.Row columns={1}>
              <Grid.Column>
                <Segment raised>
                  <Form onSubmit={props.onSubmit} style={{ heigth: '1500px' }}>
                    <Header as='h3'>Crear solicitud</Header>
                    <Form.Field>
                      {/* RUT */}
                      <Form.Input type='text' placeholder='rut' label='Rut' name='rut' onChange={props.onChange}/>
                    </Form.Field>
                    <Form.Field>
                      {/* NOMBRE */}
                      <Form.Input type='text' placeholder='nombre' label='Nombre' name='nombre' onChange={props.onChange}/>
                    </Form.Field>
                    <Form.Field>
                      {/* APELLIDO PATERNO */}
                      <Form.Input type='text' placeholder='apellido paterno' label='Apellido Paterno' name='apellido_paterno' onChange={props.onChange}/>
                    </Form.Field>
                    <Form.Field>
                      {/* APELLIDO MATERNO */}
                      <Form.Input type='text' placeholder='apellido materno' label='Apellido Materno' name='apellido_materno' onChange={props.onChange}/>
                    </Form.Field>
                    <Form.Field>
                      {/* FECHA NACIMIENTO */}
                      <Form.Input type='date' placeholder='DD/MM/YYYY' label='Fecha de Nacimiento' name='fecha_nacimiento' onChange={props.onChange}/>
                    </Form.Field>
                    <Form.Field>
                      {/* SEXO */}
                      <label>Sexo</label>
                      <Checkbox
                        radio
                        label='F'
                        value='F'
                        onChange={props.handleSex}
                      />
                      <br/>
                      <Checkbox
                      radio
                      label='M'
                      value='M'
                      onChange={props.handleSex}
                      />
                    </Form.Field>
                    <Form.Field>
                      {/* ESTADO CIVIL */}
                      <Dropdown placeholder='Estado civil' fluid selection options={props.estadoCivil} label='Estado Civil' pointing='bottom' onChange={props.handleEstadoCivil}/>
                    </Form.Field>
                    <Form.Field>
                      {/*  HIJOS */}
                      <label>Hijos</label>
                      <Checkbox
                      toggle
                      onChange={props.handleHijos}
                      />
                      <br/>
                      {/* HIJOS INPUT */}
                      { props.handleHijosWasTouched && (<Form.Input type='text' placeholder='cantidad hijos' name='hijos' label='Cantidad de hijos' onChange={props.onChange}/>)}
                    </Form.Field>
                    <Form.Field>
                      {/* TELEFONO */}
                      <Form.Input type='text' placeholder='telefono' label='Teléfono' name='telefono' onChange={props.onChange}/>
                    </Form.Field>
                    <Form.Field>
                      {/* CORREO */}
                      <Form.Input type='text' placeholder='email@mail.com' label='Correo electrónico' name='email' onChange={props.onChange}/>
                    </Form.Field>
                    <Form.Field>
                      {/* DIRECCION */}
                      <Form.Input type='text' label='Dirección' name='direccion' placeholder='ingrese dirección' onChange={props.onChange}/>
                    </Form.Field>
                    <Form.Field>
                      {/* COMUNAS */}
                      <Dropdown placeholder='Comuna' fluid selection options={props.comunas} search label='Comunas' pointing='bottom' onChange={props.handleComunas}/>
                    </Form.Field>
                    <Form.Field>
                      {/* EDUCACION */}
                      <Dropdown placeholder='Educación' fluid selection options={props.educacion} onChange={props.handleEducacion}/>
                    </Form.Field>
                    <Form.Field>
                      {/* RENTA */}
                      <Dropdown placeholder='Renta' fluid selection options={props.renta} onChange={props.handleRenta}/>
                    </Form.Field>
                    <Form.Field>
                      {/* SUELDO LIQUIDO */}
                      <Form.Input type='text' placeholder='sólo números' label='Sueldo líquido' name='sueldo_liquido' onChange={props.onChange}/>
                    </Form.Field>
                    <Form.Field>
                      {/* ENFERMEDAD CRONICA */}
                      <label>Pacede alguna enfermedad</label>
                      <Checkbox
                        onChange={props.handleEnfermedad}
                        />
                    </Form.Field>
                    <Form.Field>
                      <Button color='blue'>Guardar</Button>
                    </Form.Field>
                  </Form>
                  <SweetAlert 
                    show={props.errorSwal}
                    title={'Alguno de los campos no se ingresó correctamente'}
                    onConfirm={() => props.closeSwalError()}
                    type={'error'}
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

export default CreateCreditView
