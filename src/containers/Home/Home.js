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
  componentWillReceiveProps(nextProps){
    console.log('nextProps', nextProps)
  }
  onChange = e => {
    e.preventDefault()
  }
  onSubmit = e => {
    e.preventDefault()
  }
  responseGoogle = response => {
    console.log('response', response)
    if(response.profileObj){
      this.props.successGoogleLogin()
    }
  }
  failureGoogle = response => {

  }
  render() {
    console.log('this.props', this.props)
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
                        <Button color='green' onClick={() => this.responseGoogle({a: 'b'})}>Ingresar</Button>
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

function mapStateToProps({ google }){
  return { google }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ successGoogleLogin, failGoogleLogin, localLogin }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
