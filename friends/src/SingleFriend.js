import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';


export default class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friend: null,
     
    };
  }

  componentDidMount() {
    // change this line to grab the id passed on the URL
    let id;
    if (this.props.match && this.props.match.params.id) {
      id = this.props.match.params.id;
    } else {
      id = this.props.id;
    }
    this.fetchFriend(id);
  }





  fetchFriend = id => {
    axios
      .get(`http://localhost:5000/friends/${id}`)
      .then(response => {
          console.log('fetchfriend:', reponse)
        this.setState(() => ({ friend: response.data }));
      })
      .catch(error => {

        console.error(error);
      });
  };
 
  // Uncomment this code when you're ready for the stretch problems
  componentWillReceiveProps(newProps){
    if(this.props.match.params.id !== newProps.match.params.id){
      this.fetchFriend(newProps.match.params.id);
    }
  }


  render() {
    if (!this.state.friend) {
      return <div>Loading friend information...</div>;
    }

   
    return (
      <div >
        
          <h2>{friend.name}</h2>
        <h2>{friend.age}</h2>
        <h2>{friend.email}</h2>
      
      </div>
    );
  }
}
