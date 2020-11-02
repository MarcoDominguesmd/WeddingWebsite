import React, { useState } from 'react';
import {Link} from 'react-router-dom'

function Nav() {
  const [menuopt, setMenuopt] = useState('nav-opt hide');
  const [toggleMenu, setToggleMenu] = useState(false);


  const menuToggle = (e)=>{
    e.preventDefault();
    if(toggleMenu){
      setMenuopt('nav-opt');
      setToggleMenu(false);
     }
    else{
      setMenuopt('nav-opt show');
      setToggleMenu(true);
    }
  }



 

  return (
    <div className="App">
      <nav className="nav">
        <div id="logo">Mónika & Marco</div>
        <div className='menubtn hide' onClick={menuToggle}>Menu</div>
        <ul className={menuopt}>
            <li className="menu-opt" id="welcome"><Link to="/">Welcome</Link></li>
            <li className="menu-opt" id="story"><Link to="/story">Story</Link></li>
            <li className="menu-opt" id="rsvp"><Link to="/rsv">RSVP</Link></li>
            <li className="menu-opt" id="whenwhere"><Link to="/info">When & Where</Link></li>
            <li className="menu-opt" id="qa"><Link to="/qa">Q&A</Link></li>
         </ul>
    </nav>
    </div>
  );
}

export default Nav;