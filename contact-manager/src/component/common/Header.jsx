import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
            <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
            <NavLink className="navbar-brand" to="/">Contact Manager</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink to='/contact-list' className="nav-link">Contact List</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/add-contact' className="nav-link">Add Contact</NavLink>
                </li>
                </ul>
            </div>
            </nav>
            </>
  )
}

export default Header