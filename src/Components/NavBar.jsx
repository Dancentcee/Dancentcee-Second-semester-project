import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return(
    <div className="navbar">
    <ul className="nav-links">
        <Link to="/">Home</Link> <br /> <br />
        <Link to="Users">Users</Link>
    </ul>
    </div>
  );
}