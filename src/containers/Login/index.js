import React from 'react'
import Login from './Components/Login'

const IndexLogin = props => {
  console.log('props login', props)
  return (
    <div>
      <Login {...props}/>
    </div>
  )
}

export default IndexLogin
