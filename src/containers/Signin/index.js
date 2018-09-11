import React from 'react'
import Signin from './Components/Signin'

const IndexSignin = props => {
  console.log('index', props)
  return (
    <div>
      <Signin 
      match={props.match}
      location={props.location}
      history={props.history}
      />
    </div>
  )
}

export default IndexSignin
