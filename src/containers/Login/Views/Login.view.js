import React from 'react'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const LoginView = props => {
  return (
    <div>
      <h1>Login View!</h1>
      <Button color='google plus' as={Link} to='/'>Volver al Home</Button>

      { !props.isAuthenticated && <Button color='instagram' onClick={props.handleChangeAuth}>Log in</Button>}

      { props.isAuthenticated && <Button color='facebook' as={Link} to='/protected/get-credit'>Protected</Button>}

      { props.isAuthenticated && <Button color='linkedin' onClick={props.handleChangeAuth}>Logout</Button>}
    </div>
  )
}

export default LoginView
