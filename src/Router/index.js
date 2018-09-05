import React, { Component } from 'react'
import AuthRoute from './AuthRoute/AuthRoute'
import GuestRoute from './GuestRoute/GuestRoute'
import { connect } from 'react-redux'
import { Link, Router as Route } from 'react-router-dom'
import {
  Grid,
  Container,
  Responsive,
  Menu,
  Sidebar,
  Icon
} from 'semantic-ui-react'

import Navbar from '../components/Navbar'
import Home from '../containers/Home/Home'
import Dashboard from '../containers/Dashboard/Dashboard'

export class Router extends Component {
  constructor(props){
    super(props)
    this.state = {
      visible: false
    }
  }
  handleVisible = () => {
    this.setState({ visible: !this.state.visible })
  }
  render() {
    console.log('this.props', this.props)
    const { location, match, history } = this.props
    const { visible } = this.state
    return (
      <div>
        <Sidebar.Pushable style={{ minHeight: window.innerHeight }}>
          <Sidebar as={Menu} animation='push' visible={visible} width='wide' icon='labeled' vertical inverted>
            <Menu.Item header>
              <p>
                <Icon name='user'/>
                {/* TODO: poner email role */}
              </p>
            </Menu.Item>
            <Menu.Item as={Link} to='/' name='home' onClick={this.handleVisible}>
              <Icon name='home'/>
                Home
            </Menu.Item> 
          </Sidebar>
          <Sidebar.Pusher>
            <Navbar visible={visible} handleVisible={this.handleVisible}/>
            <Home location={location} history={history} match={match} />
            <Route location={location} history={history} match={match} path='/dashboard' component={Dashboard} />
          </Sidebar.Pusher>
        </Sidebar.Pushable>
</div>
    )
  }
}

function mapStateToProps({ google }){
  return { google }
}

export default Router
