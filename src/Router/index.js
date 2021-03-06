import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, Route, Redirect } from 'react-router-dom'
import {
  Grid,
  Container,
  Responsive,
  Menu,
  Sidebar,
  Icon
} from 'semantic-ui-react'

import Protected from './Protected/Protected'
import UnProtected from './UnProtected/UnProtected'

import Navbar from '../components/Navbar'
import IndexHome from '../containers/Home/index'
import IndexLogin from '../containers/Login/index'
import IndexSignin from '../containers/Signin/index'
import CreateCredit from '../containers/CreateCreditRequest/index'
import GetCredit from '../containers/GetCreditRequest/index'
import EditCreditComp from '../containers/EditCredit/index'
import DashboardComp from '../containers/UserDashboard/index'

import ExecutiveComponent from '../containers/Executive/index'
import HomeExecutive from '../containers/Executive/Components/HomeExecutive'
import SearchRequest from '../containers/GetCreditRequest/Components/SearchRequest'
import ShowCreditRequest from '../containers/GetCreditRequest/Components/ShowCreditRequest'

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
            <Menu.Item as={Link} to='/signin' onClick={this.handleVisible}>
              <Icon name='user' /> Crear usuario
            </Menu.Item>
            <Menu.Item as={Link} to='/executive' onClick={this.handleVisible}>
              <Icon name='user plus' /> Ingreso ejecutivos
            </Menu.Item>
          </Sidebar>
            <Sidebar.Pusher>
              <Navbar visible={visible} handleVisible={this.handleVisible}/>

              {/* GENERIC ROUTES */}

              <UnProtected location={location} exact path='/' component={IndexHome} />
              <UnProtected location={location} exact path='/login' component={IndexLogin} />
              <UnProtected location={location} exact path='/signin' component={IndexSignin} />
              <UnProtected location={location} exact path='/executive' component={ExecutiveComponent} />
              
              {/* LOCATION IS THE KEY */}
              <Protected location={location} exact path='/protected/dashboard' component={DashboardComp} />

              <Protected location={location} exact path='/protected/get-credit' component={GetCredit} />

              <Protected location={location} exact path='/protected/create-credit' component={CreateCredit} />
              
              <Protected location={location} exact path='/protected/executive/edit-credit/:idCredit' component={EditCreditComp} />

              <Protected location={location} exact path='/protected/executive' component={HomeExecutive} />
              
              <Protected location={location} exact path='/protected/executive/show-credit-request/:idRequest' component={ShowCreditRequest} />

              <Protected location={location} exact path='/protected/executive/search-credit' component={SearchRequest} />


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
 