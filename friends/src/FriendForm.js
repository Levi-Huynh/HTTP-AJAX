import React from "react";
import ErrorMessage from "./ErrorMessage";
import SuccessMessage from "./SuccessMessage";

class FriendForm extends React.Component {
    constructor(props) {
        super(props);
        this.state={
        newFriend: {
            name: "",
            age: "",
            email: ""
        }

        };

    }


handleChange = e => {
    e.persist();
    let value = e.target.value;
    this.setState(prevState => ({
        newFriend: {
            ...prevState.newFriend,
            [e.target.name]: value
        }
      }));
};

postMessage = e => {
 e.preventDefault();
    this.props.postFriendToServer(this.state.newFriend);
    this.setState({
        newFriend: {
            name: "",
            age: "",
            email: ""
        }
    });
   
  
};

render() {
 return (
    <div className="friend-form">
    <h2>Post (add) a new friend </h2>
    <form >
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
  
    {this.props.postError? ( 
        <ErrorMessage message={this.props.postError} />) :null}
          
          {this.props.postSuccessMessage ? (
            <SuccessMessage message={this.props.putSuccessMessage} />
          ) : null}
        <button onClick={this.postMessage} type="submit"> Add Friend</button>
      
        </form>
        </div>
    )}

}

export default FriendForm;