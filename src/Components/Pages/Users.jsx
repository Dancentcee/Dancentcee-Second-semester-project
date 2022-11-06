import React from 'react'
import { Link, Outlet } from 'react-router-dom';
//import NavBar from './Components/Navbar.jsx'

const Users = () => {
  return(
    <>
    <div className="page">
    <h2>You are in the Users page!</h2>
    <div className="users-nav">
    <nav>
      <Link to="/Users/Login">Login</Link>
      <Link to="/Users/Signup">SignUp</Link>
    </nav>
    </div>
      <Outlet />
    </div>
    </>
  )
}

export default Users;