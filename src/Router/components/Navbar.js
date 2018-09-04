import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
  constructor(props){
    super(props)
    this.state = {
        activeItem: 'home',
        visible: false,
    }
  }
  handleItemClick = (e, { name }) => {
    console.log('e.target.text', e.target.text)
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
  render() {
    const { isAuthenticated } = this.props
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
                  onClick={this.handleItemClick}
                      />
              :
              <Menu.Item
                  as={Link}
                  to='/'
                  position='right'
                  color='blue'
                  name='Cerrar Sesión'
                  active={activeItem === 'Signin'}
                  onClick={this.handleItemClick} />
              }
        </Menu>
      </div>
    )
  }
}

export default Navbar
