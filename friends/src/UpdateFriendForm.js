import React from "react";
import ErrorMessage from "./ErrorMessage";
import SuccessMessage from "./SuccessMessage";
import axios from 'axios';
import { Route } from 'react-router-dom';
import FriendList from "./FriendList";

class UpdateFriendForm extends React.Component {
constructor(props) {
    super(props);
    this.state={
      
        editing: false,
      
        // nameInput: this.props.name,
        // ageInput: this.props.age,
        // emailInput: this.props.email
         name1: this.props.name,
        age1: this.props.age,
        email1: this.props.email

    };
}




// handleChange = (e, input) => {
//     const key = input + 'Input';
//     this.setState({
        
//         [key]: e.target.value
       
//     });
    
//     };
    

    handleChange = (e, input) => {
    const key = input+"1";
    this.setState({
        
        [key]: e.target.value
       
    });
    
    };
    


// putMessage = e => {
//     e.preventDefault();
//     this.props.updateFriend(this.state.nameInput, this.state.ageInput, 
//         this.state.emailInput, this.props.id);
// };

putMessage = e => {
    e.preventDefault();
    this.props.updateFriend(this.state.name1, this.state.age1, 
        this.state.email1, this.props.id);
};

//must put () with event inside parenth for onChange so that it only invokes
//the method when event occurs on it..& also passes allows you to pass through 
//specific parameters in string form (can't really pass through e.target.name)

render() {

    return (
        <div>
  
    <div className='friend-form'>
    <h2>Update A Friend (put)</h2>
    <form >
        <input
        type="text"
        name="name"
        placeholder="name"
        onChange={(e) =>this.handleChange(e, 'name')}
        // value={this.state.nameInput} 
          value={this.state.name1} 
        />

        <input
        type="text"
        name="age"
        placeholder="age"
        onChange={(e) =>this.handleChange(e, 'age')}
        // value={this.state.ageInput}
        value={this.state.age1}
        />

        <input
        type="text"
        name="email"
        placeholder="email"
        onChange={(e) =>this.handleChange(e, 'email')}
        // value={this.state.emailInput}
        value={this.state.email1}
        
        />
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