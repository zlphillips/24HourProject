import React from 'react';
import { Link } from 'react-router-dom'
import doo  from '../assets/doo.png';
import './Navbar.css'
 
 const SimpleMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);

  };


  return (
    <div>
      <ul>
        
        <li onClick={handleClose}><Link to = '/'>Home</Link></li>
        <li onClick={handleClose}><Link to = '/Books'>Books</Link></li>
        <li onClick={handleClose}><Link to = '/Characters'>Characters</Link></li>
        <li onClick={handleClose}><Link to = '/Houses'>Houses</Link></li>
        <li onClick={handleClose}>App Created By:</li>
        
        <img className='doo'src={doo}/>
        </ul>
    </div>
  );
}

export default SimpleMenu;


