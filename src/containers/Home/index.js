import React from 'react'
import Home from './Components/Home'
import { Redirect} from 'react-router-dom'
import { connect } from 'react-redux'

const IndexHome = props => {
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
