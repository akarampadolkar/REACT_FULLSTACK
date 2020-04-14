// /client/App.js
import React, { Component } from 'react';
const axios = require('axios').default;

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      users: null
    };
  }
  componentDidMount(){
    axios.get('http://localhost:5000/users')
      .then(data => {
        console.log("Data", data.data.user);
        this.setState({
          users: data.data.user[0].username
        });
      })
      .catch(error => {
      this.setState = error
      });
}
  render() {
    return <div>{this.state.users}</div>
  }
}

export default App;