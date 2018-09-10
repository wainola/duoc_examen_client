import React from 'react'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const LoginView = props => {
  return (
    <div>
      <h1>Login View!</h1>
      <Button color='google plus' as={Link} to='/'>Volver al Home</Button>
      <Button color='instagram' onClick={props.handleChangeAuth}>Change</Button>
    </div>
  )
}

export default LoginView
