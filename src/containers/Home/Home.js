import React, { Component } from 'react'
import {
  Responsive,
  Container,
  Grid,
  Form,
  Button,
  Segment
} from 'semantic-ui-react'

export class Home extends Component {
  onChange = e => {
    e.preventDefault()
  }
  onSubmit = e => {
    e.preventDefault()
  }
  render() {
    return (
      <div>
        <Responsive>
          <Container>
            <Grid textAlign='center' style={{ height: '100%', paddingTop: '5rem' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                  <Segment raised>
                    <Form onSubmit={this.onSubmit}>
                      <Form.Field>
                        <Form.Input fluid label='Rut' placeholder='ingrese su rut 11.111.111-7' onChange={this.onChange}/>
                      </Form.Field>
                      <Form.Field>
                        <Form.Input fluid label='Contraseña' placeholder='ingrese su contraseña' onChange={this.onChange}/>
                      </Form.Field>
                      <Form.Field>
                        <Button color='green'>Ingresar</Button>
                      </Form.Field>
                    </Form>
                  </Segment>
                </Grid.Column>
            </Grid>
          </Container>
        </Responsive>
     </div>
    )
  }
}

export default Home
