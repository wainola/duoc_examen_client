import React, { Component } from 'react';

class App extends Component {
  componentWillMount(){
    fetch(
      'http://localhost:5000/user'
    )
    .then(
      res => res.json()
    )
    .then(data => console.log(data))
    .catch(err => console.log(err))
  }
  render() {
    return (
      <div className="App">
        <h1>App culia</h1>
        <a href="http://localhost:5000/signin">Signin</a>
      </div>
    );
  }
}

export default App;
