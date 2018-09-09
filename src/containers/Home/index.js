import React from 'react'
import Home from './Components/Home'
import { Redirect} from 'react-router-dom'
import { connect } from 'react-redux'

const IndexHome = props => {
  console.log('home comp', props)
  return (
    <div>
      <Home />
    </div>
  )
}

function mapStateToProps({ auth }){
  return { auth }
}

export default connect(mapStateToProps)(IndexHome)
