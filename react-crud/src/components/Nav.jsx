import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <>
    <div className="container mt-4">
        <div className="row">
            <div className="col-lg-2">&nbsp;</div>
            <div className="col-lg-8">
                <Link className="btn btn-success mr-2" to='/'>List User</Link>
                <Link className="btn btn-success" to='/create-user'>Add New User</Link>
                <hr />
            </div>
            <div className="col-lg-2">&nbsp;</div>
        </div>
    </div>
    </>
  )
}

export default Nav;