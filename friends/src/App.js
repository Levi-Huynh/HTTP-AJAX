import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Home from './home';
import FriendForm from './FriendForm';
import UpdateFriendForm from './UpdateFriendForm';


import {
  BrowserRouter as Router,
  NavLink,
  Route,
  withRouter
} from 'react-router-dom';





class App extends Component {


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

    axios
      .get('http://localhost:5000/friends')
      .then(res => {
        console.log('getresolved:',res);
        console.log(res.data);
        this.setState({ friends: res.data });
      })
      .catch(err => {
        console.log('geterror:', err);
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
      postSuccessMessage: "",
      postError: "Could not add friend",
        });
      });
  };

  handleUpdate = (friends) => {
    this.setState({
      friends,
    })
  }


  updateFriendOnServer = (name, age, email, id) => {
  axios
    .put(`http://localhost:5000/friends/${id}`,{name, age:Number(age), email})
    .then(response => {
      console.log("putResolved:", response);
      console.log("putResolved:", response.data);
      this.setState({
        friends: response.data,
        putSuccessMessage: "you updated!",
        putError: "",
   
      });
    
    })
    .catch(err => {
      console.log("putError:", err);
      this.setState({
        putSuccessMessage: "",
        putError: "Error updating friends"
      });
});
};
 

deleteFriend = id => {
  axios
    .delete(`http://localhost:5000/friends/${id}`)
    .then(reponse => {
      this.setState({
        deleteSuccessMessage: "You deleted!",
        deleteError: ""
      });
    })
    .catch(err => {
      this.setState({
        deleteSuccessMessage: "",
        deleteError: "Error deleting!"
      })
    })
};
 
  render() {
    console.log('rendering App:', this.state.friends)
    return (
      
      <div className="App">
    <Route  path="/" render={ props => <Home {...props} friends={this.state.friends} updateFriend={this.updateFriendOnServer} delete={this.deleteFriend} putSuccessMessage={this.state.putSuccessMessage} putError={this.state.putError}/>}/>
    
   <Route  path="/" render={props => <FriendForm {...props} postFriendToServer={this.postFriendToServer} 
      postSuccessMessage={this.state.postSuccessMessage} postError={this.state.postError}/>}/>
         
         {/* <Route  path="/form" render={props => <UpdateFriendForm {...props} updateFriend={this.updateFriendOnServer.bind(this)}
         putSuccessMessage={this.state.putSuccessMessage} putError={this.state.putError} handleUpdate={this.handleUpdate} friends={this.state.friends}/>}/> */}
         
        {/* <Route path="/friends/:id" render={props=> <SingleFriend {...props}/>}/>  */}
         </div>
    );
  }
}


export default App;
