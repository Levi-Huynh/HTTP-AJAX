import React from "react";
import ErrorMessage from "./ErrorMessage";
import SuccessMessage from "./SuccessMessage";
import axios from 'axios';
import { Route } from 'react-router-dom';

class UpdateFriendForm extends React.Component {
constructor(props) {
    super(props);
    this.state={
        newFriend: {
            name: "Billy",
            age: 25,
            email: "Bill@aol.com"

        },
   

    };
}




handleChange = e => {
this.setState({
    newFriend: {
        ...this.state.newFriend,
        [e.target.name]: e.target.value
    }
});

};


putMessage = e => {
    e.preventDefault();
    this.props.updateFriend(this.state.newFriend, 2);
};



render() {

    return (
    <div className='friend-form'>
    <h2>Update (Put) A Friend</h2>
    <form>
        <input
        type="text"
        name="name"
        placeholder="name"
        onChange={this.handleChange}
        value={this.state.newFriend.name} />

        <input
        type="text"
        name="age"
        placeholder="age"
        onChange={this.handleChange}
        value={this.state.newFriend.age} />

        <input
        type="text"
        name="email"
        placeholder="email"
        onChange={this.handleChange}
        value={this.state.newFriend.email}/>
         {this.props.putError ? (
            <ErrorMessage message={this.props.putError} />
          ) : null}
         
          {this.props.putSuccessMessage ? (
            <SuccessMessage message={this.props.putSuccessMessage} />
          ) : null}
         
          <button type="submit"  onClick={this.putMessage.bind(this)}> Update Friend</button>

    </form>
    
    </div>
    );
}
};


export default UpdateFriendForm;