import React from 'react';
import UpdateFriendForm from './UpdateFriendForm';

function UpdateFriendContainer(props) {


return (
<div>
   {props.friends.map(friend => (
    <div>
       
       <UpdateFriendForm name={friend.name}
      age={friend.age}
      email={friend.email}
      id={friend.id}
      key={friend.id}
      updateFriend={props.updateFriend}
       putSucessMessage={props.putSucessMessage}
        putError={props.putError}
        delete={props.delete} />
    
      

</div>
 ) )} 



</div>
)

}

export default UpdateFriendContainer;