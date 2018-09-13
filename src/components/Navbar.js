import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { logout } from '../actions/index'

export class Navbar extends Component {
  constructor(props){
    super(props)
    this.state = {
        activeItem: 'home',
        visible: false,
    }
  }
  handleItemClick = (e, { name }) => {
    if(e.target.text === 'Logout'){
        this.props.logout()
    }
    else{
        this.setState({activeItem: name})
    }
  }
  toggleVisibility = () => {
      this.setState({visible: !this.state.visible});
      this.props.sidePusher(!this.props.visible)
  }
  logout = () => {
      this.props.logout()
  }
  render() {
    const { auth: { isAuthenticated } } = this.props
    const { activeItem } = this.state
    const { handleVisible } = this.props
    return (
      <div>
        <Menu>
          <Menu.Item
              position='left'
              active={activeItem === 'Menu'}
              onClick={handleVisible}
              icon='bars'
          />
          {isAuthenticated ? 
              <Menu.Item 
                  name='Cerrar Sesión'
                  position='right'
                  active={activeItem === 'Logout'}
                  onClick={this.logout}
                      />
              :
              <Menu.Item
                  as={Link}
                  to='/signin'
                  position='right'
                  name='Registrarse'
                  active={activeItem === 'Signin'}/>
              }
        </Menu>
      </div>
    )
  }
}

function mapStateToProps({ auth }){
    return { auth }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ logout }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
