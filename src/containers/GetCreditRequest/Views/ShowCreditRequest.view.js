import React from 'react'
import { Responsive, Container, Grid, Segment, Header, Card, Label, Button} from 'semantic-ui-react'
import { isEmpty } from 'lodash'
import { Link } from 'react-router-dom'

const ShowCreditRequestView = props => {
  console.log('show props', props)
  const data = !isEmpty(props.credit) ? props.credit.data : {}
  return (
    <div>
      <Responsive>
        <Container>
          <Grid>
            <Grid.Row textAlign='center' columns='1'>
              <Grid.Column>
                <Segment raised>
                  <Header as='h2'>Solicitud de crédito</Header>
                  <Button as={Link} to='/protected/dashboard' color='facebook'>Volver a la página principal</Button>
                  <Card fluid>
                    <Card.Content textAlign='left'>
                      <h3>
                        Nombre: {data.nombre !== undefined ? data.nombre : ''}
                      </h3>
                      <h3>
                        Rut: { data.rut !== undefined ? data.rut : ''}
                      </h3>
                      <h3>
                        {data.estado && (
                          <Label color={data.estado !== 'PENDIENTE' ? 'green' : 'red'} horizontal>
                            {data.estado}
                          </Label>
                        )}
                      </h3>

                    </Card.Content>
                  </Card>
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Responsive>
    </div>
  )
}

export default ShowCreditRequestView
