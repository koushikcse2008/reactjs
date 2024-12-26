import { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    render() {
        return (
            <>
            <p className='pb-5 menuContainer text-center'>
            <NavLink  to='/' className='p-5 fs-4'>About</NavLink> 
            <NavLink  to='/issues' className='p-5 fs-4'>Issues</NavLink>
            <NavLink  to='/add-issue' className='fs-4'>Add Issue</NavLink>
            </p>
            </>
        );
    }
}

export default Header;
