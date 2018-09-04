import React, { Component } from 'react'
import GoogleLogin from 'react-google-login';
import { connect } from 'react-redux'
import { bindActionCreatros } from 'redux'
import {
  Responsive,
  Container,
  Grid,
  Form,
  Button,
  Segment
} from 'semantic-ui-react'

import { successGoogleLogin, failGoogleLogin, localLogin } from '../../actions/index'

export class Home extends Component {
  onChange = e => {
    e.preventDefault()
  }
  onSubmit = e => {
    e.preventDefault()
  }
  responseGoogle = response => {
    console.log('response', response)
  }
  failureGoogle = response => {

  }
  render() {
    const { REACT_APP_GOOGLE_CLIENT_ID } = process.env
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
                      <Form.Field>
                      <GoogleLogin
                        clientId={`${REACT_APP_GOOGLE_CLIENT_ID}`}
                        buttonText="Ingrese con google"
                        onSuccess={this.responseGoogle}
                        onFailure={this.failureGoogle}
                      />
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
