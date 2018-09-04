import React, { Component } from 'react'

export class Router extends Component {
  constructor(props){
    super(props)
  }
  render() {
    console.log('this.props', this.props)
    const { location, match, history } = this.props
    return (
      <div>
        <h1>
          Router
        </h1>
      </div>
    )
  }
}

export default Router
