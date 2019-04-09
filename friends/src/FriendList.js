import React from 'react';

function FriendList (props) {


return(
<div>

<ul>
                <li>{props.name}</li>
            <li>{props.age}</li>
                <li>{props.email}</li>
            </ul>

</div>


)


}

export default FriendList;