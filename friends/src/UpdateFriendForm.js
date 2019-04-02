import React from "react";
import ErrorMessage from "./ErrorMessage";
import SuccessMessage from "./SuccessMessage";
import axios from 'axios';
import { Route } from 'react-router-dom';

class UpdateFriendForm extends React.Component {
constructor(props) {
    super(props);
    this.state={
      
        editing: false,
        nameInput: this.props.name,
        ageInput: this.props.age,
        emailInput: this.props.email,

    };
}




handleChange = (e, type) => {
    const key = type + 'Input';
    this.setState({
        
         [key]: e.target.value
       
    });
    
    };
    


putMessage = e => {
    e.preventDefault();
    this.props.updateFriend(this.state.nameInput, this.state.ageInput, 
        this.state.emailInput, this.props.id);
};



render() {

    return (
        <div>
            <ul>
                <li>{this.props.name}</li>
                <li>{this.props.age}</li>
                <li>{this.props.email}</li>
            </ul>
    
    <div className='friend-form'>
    <h2>Update A Friend (put)</h2>
    <form >
        <input
        type="text"
        name="name"
        placeholder="name"
        onChange={(e) => this.handleChange(e, 'name')}
        value={this.state.nameInput} />

        <input
        type="text"
        name="age"
        placeholder="age"
        onChange={(e) => this.handleChange(e, 'age')}
        value={this.state.ageInput} />

        <input
        type="text"
        name="email"
        placeholder="email"
        onChange={(e) => this.handleChange(e, 'email')}
        value={this.state.emailInput}/>
         {this.props.putError ? (
            <ErrorMessage message={this.props.putError} />
          ) : null}
         

          {this.props.putSuccessMessage ? (
            <SuccessMessage message={this.props.putSuccessMessage} />
          ) : null}
         
          <button onClick={this.putMessage.bind(this)}> Update Friend</button>
          <button onClick={() =>this.props.delete(this.props.id) }>Delete Friend</button>

    </form>
    
    </div>
    </div>
    );
}
};


export default UpdateFriendForm;