import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
    <div className="bg-success text-center p-1">
        <NavLink className="text-white font-weight-bold" to="/" style={{"fontSize": "36px"}}>React Hooks</NavLink>
        <blockquote class="blockquote text-center">
            <p class="mb-0">Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.</p>
            <footer class="blockquote-footer text-light font-italic font-weight-bold">R e a c t J S <cite title="Source Title">16.8</cite></footer>
        </blockquote>
    </div>
    </>
  )
}

export default Header;