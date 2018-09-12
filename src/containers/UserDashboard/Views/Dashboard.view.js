import React from 'react'
import { Responsive, Container, Grid, Segment, Card, Image, Icon } from 'semantic-ui-react'

const DashboardView = props => {
  return (
    <Responsive>
      <Container>
        <Grid>
          <Grid.Row columns='2' stackable textAlign='center'>
            <Grid.Column>
              <Card >
                <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
                <Card.Content>
                  <Card.Header>Matthew</Card.Header>
                  <Card.Meta>
                    <span className='date'>Joined in 2015</span>
                  </Card.Meta>
                  <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name='user' />
                    22 Friends
                  </a>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              Acciones
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Responsive>
  )
}

export default DashboardView
