import React, { Component } from 'react'
import GoogleLogin from 'react-google-login';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
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
  constructor(){
    super()
    this.state = {
      credentials: {
        rut: '',
        password: ''
      }
    }
  }
  onChange = e => {
    e.preventDefault()
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    })
  }
  onSubmit = e => {
    e.preventDefault()
    if(this.state.credentials.rut !== '' && this.state.credentials.password !== ''){
      this.props.localLogin(this.state.credentials)
    }
  }
  responseGoogle = response => {
    if(response.profileObj){
      this.props.successGoogleLogin(true)
    }
  }
  failureGoogle = response => {

  }
  render() {
    console.log('this.props', this.props)
    if(this.props.google.google_auth){
      this.props.history.push('/dashboard')
    }
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
                        <Form.Input fluid label='Rut' placeholder='ingrese su rut 11.111.111-7' onChange={this.onChange} name='rut'/>
                      </Form.Field>
                      <Form.Field>
                        <Form.Input fluid label='Contraseña' placeholder='ingrese su contraseña' onChange={this.onChange} name='password'/>
                      </Form.Field>
                      <Form.Field>
                        <Button color='green' onClick={() => this.responseGoogle({a: 'b'})}>Ingresar</Button>
                      </Form.Field>
                      <Form.Field>
                      <GoogleLogin
                        clientId={`${REACT_APP_GOOGLE_CLIENT_ID}`}
                        buttonText="Ingrese con Google"
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

function mapStateToProps({ google }){
  return { google }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ successGoogleLogin, failGoogleLogin, localLogin }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
