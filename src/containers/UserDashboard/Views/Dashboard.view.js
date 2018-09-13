import React from 'react'
import { Responsive, Container, Grid, Segment, Card, Icon, Header, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import es from 'moment/locale/es'

const DashboardView = props => {
  // console.log(momentES)
  return (
    <Responsive>
      <Container>
        <Grid stackable>
          <Grid.Row columns='2' textAlign='center' style={{ paddingTop: '2.5rem'}}>
            <Grid.Column>
              <Segment raised fluid>
                <Header as='h2'>{props.executiveLogged ? 'Bienvenido ejecutivo' : 'Bienvenido!'}</Header>
                <Card centered color='blue'>
                  <Card.Content>
                    <Card.Header><Icon name='user'/>{props.user.nombre} {props.user.apellido_paterno}  {props.user.apellido_materno}</Card.Header>
                    <Card.Meta>
                      <span className='date'>
                      <br/>
                      Sesión iniciada el {moment().format('LL')}</span>
                    </Card.Meta>
                  </Card.Content>
                  <Card.Content extra>
                    <a>
                      <Icon name='credit card alternative' />
                      Numero de creditos
                    </a>
                  </Card.Content>
                </Card>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment raised fluid style={{ height: '220.717px'}}>
                <Header as='h2'><Icon name='exclamation triangle' />Acciones</Header>
                <Grid textAlign='center'>
                  <Grid.Column>
                    <Button color='facebook' as={Link} to='/protected/create-credit' >Crear solicitud de crédito</Button>
                    { props.executiveLogged && <Button color='google plus' as={Link} to='/protected/get-credit'>Ver solicitudes de crédito</Button>}
                    { props.userLogged && <Button color='google plus' as={Link} to='/protected/show-status-request'>Revisar estado de solicitud</Button>}
                  </Grid.Column>
                </Grid>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Responsive>
  )
}

export default DashboardView
