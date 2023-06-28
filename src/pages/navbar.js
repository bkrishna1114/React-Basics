import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'


const Navbar = () => {
  return (
    <div>
        <ul className='navbar'>
            <Link to='/' ><li>Home</li></Link>
            <Link to='/login' ><li>Login</li></Link>
            <Link to='/register' ><li>Register</li></Link>
            <Link to='/about' ><li>About</li></Link>
        </ul>
    </div>
  )
}

export default Navbar;