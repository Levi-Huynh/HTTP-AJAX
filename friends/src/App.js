import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Home from './home';
import FriendForm from './FriendForm';


import {
  BrowserRouter as Router,
  NavLink,
  Route,
  withRouter
} from 'react-router-dom';


class App extends Component {
  signal = axios.CancelToken.source();

  constructor() {
    super();
    this.state ={
     
     friends: [],
     error: "",
     postSuccessMessage: "",
     postError: "",
     putSuccessMessage: "",
     putError: "",
     deleteSuccessMessage: "",
     deleteError: "",
    };
  }


  componentDidMount() {
    console.log('CDM now running');
    // http://localhost:3333 is the address to the server doorstep
    // /items is the "endpoint"
    axios
      .get('http://localhost:5000/friends')
      .then(res => {
        console.log(res);
        console.log(res.data);
        this.setState({ friends: res.data });
      })
      .catch(err => {
        console.log(err);
        this.setState({ error: err });
      });
  }

  postFriendToServer = data => {
      axios
      .post('http://localhost:5000/friends', data)
      .then(response => {
        console.log("resolved:", response);
        this.setState({
          postSuccessMessage: "you posted!",
          postError: ""
        });
      })
      .catch(err => {
        console.log("Rejected:", err );
        this.setState({
          postError: "Could not add friend",
          postSuccessMessage: ""
        });
      });
  };


  updateFriendOnServer = (data, id) => {
    axios
    .put(`http://localhost:5000/friends/${id}`, data)
    .then(response => {
      this.setState({
        putSuccessMessage: "you updated!",
        putError: ""
      });
    })
    .catch(err => {
      this.setState({
        putSuccessMessage: "",
        putError: "Error updating friends"
      });
});
};
 
  render() {
    console.log('rendering App:', this.state.friends)
    return (
      
      <div className="App">
    <Route exact path="/" render={ props => <Home {...props} friends={this.state.friends}/>}/>
    
   <Route exact path="/" render={props => <FriendForm {...props} postFriendToServer={this.postFriendToServer} 
      postSuccessMessage={this.state.postSuccessMessage} postError={this.state.postError}/>}/>
         </div>
    );
  }
}


export default App;
