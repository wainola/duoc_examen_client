import React from 'react'
import { Grid, Segment, Header, Button } from 'semantic-ui-react'

const ViewRequest = props => {
  const { creditData } = props
  console.log(creditData)
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Segment raised>
              <Button color='facebook' onClick={props.clickActionButtons} value='ver'>Volver</Button>
              <Header as='h3'>Ver Solicitud</Header>
              
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}

export default ViewRequest
