import React from 'react';
import { Link } from 'react-router-dom';
import Register from './user/register';
import Login from './user/login';
import './navbar.css'


const Navbar = () => {
  return (
    <div>
        <ul className='navbar'>
            <Link to='/' ><li>Home</li></Link>
            <Link to='/login' ><li>Login</li></Link>
            <Link to='/register' ><li>Register</li></Link>
        </ul>
    </div>
  )
}

export default Navbar;