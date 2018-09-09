import React from 'react'
import Home from './Components/Home'
import { Redirect} from 'react-router-dom'

const IndexHome = props => {
  console.log('home comp', props)
  return (
    <div>
      <h2>Home view!</h2>
      {/* <Redirect to='/login' /> */}
    </div>
  )
}

export default IndexHome
