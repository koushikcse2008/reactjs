import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
    <NavLink className="navbar-brand" to="/">React Hooks</NavLink>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
        <li className="nav-item">
            <NavLink to='use-state' className="nav-link">Use State </NavLink>
        </li>
        <li className="nav-item">
            <NavLink to='/use-effect' className="nav-link">Use Effect</NavLink>
        </li>
        <li className="nav-item">
            <a className="nav-link">Use Effect</a>
        </li>
        <li className="nav-item">
            <a className="nav-link">Use Effect</a>
        </li>
        <li className="nav-item">
            <a className="nav-link">Use Effect</a>
        </li>
        <li className="nav-item">
            <a className="nav-link">Use Effect</a>
        </li>
        <li className="nav-item">
            <a className="nav-link">Use Effect</a>
        </li>
        </ul>
    </div>
    </nav>
    </>
  )
}

export default Header;