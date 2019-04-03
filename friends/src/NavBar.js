import React from "react";
import { NavLink } from 'react-router-dom'

export default props => {
  return (
   
      <div className='navbar'>
        <ul>
          <li>
            <NavLink exact activeClassName="activeNavButton" to='/'><button>Home</button></NavLink>
            <NavLink exact activeClassName="activeNavButton" to='/AddForm'><button>Add a Friend Form</button></NavLink>
            <NavLink exact activeClassName="activeNavButton" to='/EditForm'><button>Edit/ Delete Friend Form</button></NavLink>
          </li>
        </ul>
      </div>
   
  )
}

