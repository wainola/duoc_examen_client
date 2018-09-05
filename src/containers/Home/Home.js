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

import GetCreditRequest from '../CreditRequest/GetCreditRequest'
import CreateCreditRequest from '../CreateCreditRequest/CreateCreditRequest'
import EditarCredit from '../EditCredit/EditCredit'
import ViewRequest from '../ViewRequest/ViewRequest'

import { successGoogleLogin, getCreditData, sendDataToView } from '../../actions/index'

export class Home extends Component {
  constructor(){
    super()
    this.state = {
      credentials: {
        rut: '',
        password: ''
      },
      editar: false,
      ver: false,
      eliminar: false,
      main: true,
      crear: false
    }
  }
  componentWillMount(){
    this.props.getCreditData()
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
  clickActionButtons = e => {
    e.preventDefault()
    
    console.log('e.target.value', e.target.value)
    if(e.target.value === 'crear'){
      this.setState({
        crear: !this.state.crear,
        editar: this.state.editar,
        main: !this.state.main,
        eliminar: this.state.eliminar,
        ver: this.state.ver
      })
    }
    if(e.target.value === 'editar'){
      this.setState({
        crear: this.state.crear,
        editar: !this.state.editar,
        main: !this.state.main,
        eliminar: this.state.eliminar,
        ver: this.state.ver 
      })
    }
    if(e.target.value === 'ver'){
      this.setState({
        crear: this.state.crear,
        editar: this.state.editar,
        main: !this.state.main,
        eliminar: this.state.eliminar,
        ver: !this.state.ver
      })
    }
  }
  render() {
    console.log('this.props home', this.props)
    console.log('this.state', this.state)
    const { REACT_APP_GOOGLE_CLIENT_ID } = process.env
    const { google_auth } = this.props.google
    let creditData
    if(this.props.credit.data !== undefined){
      creditData = this.props.credit.data
    }
    const { main, ver, eliminar, editar, crear } = this.state
    return (
      <div>
        <Responsive>
          <Container>
            { !google_auth && (
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
            )}
            {
              google_auth && main && (
                <GetCreditRequest creditData={creditData} clickActionButtons={this.clickActionButtons} triggerDataToView={this.triggerDataToView}/>
              )
            }
            {
              crear && (
                <CreateCreditRequest clickActionButtons={this.clickActionButtons}/>
              )
            }
            {
              editar && (
                <EditarCredit clickActionButtons={this.clickActionButtons}/>
              )
            }
            {
              ver && (
                <ViewRequest clickActionButtons={this.clickActionButtons} creditData={creditData}/>
              )
            }
          </Container>
        </Responsive>
     </div>
    )
  }
}

function mapStateToProps({ google, credit }){
  return { google, credit }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ successGoogleLogin, getCreditData, sendDataToView }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
