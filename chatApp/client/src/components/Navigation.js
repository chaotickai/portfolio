import React from 'react';
import { NavLink } from 'react-router-dom'

class Navigation extends React.Component {
  render(){
    return(
        <ul className="navbarList">
            <li className="navbarItem"><NavLink className="navbarLink" activeClassName="activeLink" to="/chat">Come Chat!</NavLink></li>
        </ul>
    )
  }
}

export default Navigation;