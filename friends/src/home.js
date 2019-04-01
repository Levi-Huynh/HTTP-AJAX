import React from 'react';

function Home(props) {




return (
<div>
   {props.friends.map(friends => (
       <ul>
       <li>{friends.name}</li>
       <li>{friends.age}</li>
       <li>{friends.email}</li>
       </ul>
   ) )} 
</div>
)

}

export default Home;