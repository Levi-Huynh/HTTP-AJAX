import React from 'react';

import { NavLink } from 'react-router-dom';
import FriendList from './FriendList';


function Home(props) {




return (
<div>


   {props.friends.map(friend => (
    <div>
       
       <FriendList name={friend.name}
      age={friend.age} email={friend.email}/>

</div>
 ) )} 



</div>
)

}

export default Home;

// <div>
// {this.state.friends.map(friend => (

//    <Route exact path="/form" render= {props => <UpdateFriendForm  name={friend.name}
//      age={friend.age}
//      email={friend.email}
//      id={friend.id}
//      key={friend.id} 
//      updateFriend={this.updateFriendOnServer.bind(this)}
//      putSucessMessage={this.state.putSucessMessage}
//       putError={this.state.putError}
//       delete={this.deleteFriend.bind(this)}/>}


// ))}
//  </div>

 
     {/* <UpdateFriendForm name={friend.name}
      age={friend.age}
      email={friend.email}
      id={friend.id}
      key={friend.id}
      updateFriend={props.updateFriend}
       putSucessMessage={props.putSucessMessage}
        putError={props.putError}
        delete={props.delete} 
     /> */}
