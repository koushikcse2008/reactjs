import React from 'react';
import { Link } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

const Header = () => {
  return (
    <>
            <Link to="/" className="btn btn-success mr-2">Home</Link> 
            <Link to="/inline-style" className="btn btn-primary mr-2">Inline Style</Link>  
            <Link to="/internal-style" className="btn btn-warning mr-2">Internal Style</Link>
            <Link to="/external-style" className="btn btn-danger">External Style</Link>
            <hr />
    </>
  )
}

export default Header;