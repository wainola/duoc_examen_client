import React, { Component } from 'react'
import AuthRoute from './AuthRoute/AuthRoute'
import GuestRoute from './GuestRoute/GuestRoute'
import { connect } from 'react-redux'
import { Link, Route } from 'react-router-dom'
import {
  Grid,
  Container,
  Responsive,
  Menu,
  Sidebar,
  Icon
} from 'semantic-ui-react'

import Navbar from '../components/Navbar'
import indexLogin from '../containers/Login/index'
import IndexHome from '../containers/Home/index'
import IndexGetCredit from '../containers/GetCreditRequest';

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
    const { location, match, history, google: { google_auth}, auth: { isAuthenticated } } = this.props
    const { visible } = this.state
    console.log(this.props)
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
            {/* GENERIC ROUTES */}

            <GuestRoute location={location} match={match} history={history} component={IndexHome} isAuthenticated={isAuthenticated} exact path='/' />

            <GuestRoute location={location} match={match} history={history} component={indexLogin} isAuthenticated={isAuthenticated} exact path='/login' />

            <AuthRoute location={location} match={match} history={history} component={IndexGetCredit} isAuthenticated={isAuthenticated} exact path='/get-credit' />
          </Sidebar.Pusher>
        </Sidebar.Pushable>
</div>
    )
  }
}

function mapStateToProps({ google, auth }){
  return { google, auth }
}

export default connect(mapStateToProps)(Router)
