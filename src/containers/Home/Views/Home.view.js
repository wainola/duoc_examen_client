import React from 'react'
import { Responsive, Grid, Container, Image, Segment, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import creditImage from '../../../assets/credit.jpg'

const HomeView = props => {
  return (
    <div>
      <Responsive>
        <Container>
          <Grid stackable>
            <Grid.Row columns='2'>
              <Grid.Column>
                <Segment raised>
                  <Image src={creditImage} />
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Button color='facebook' as={Link}to='/login'>Ingresar</Button>
                <Button color='google plus' as={Link} to='/signin'>Registrarse</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Responsive>
    </div>
  )
}

export default HomeView
