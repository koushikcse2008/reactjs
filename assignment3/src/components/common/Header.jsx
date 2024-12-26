import { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    render() {
        return (
            <>
            <p className='pb-5 menuContainer'>
            <NavLink  to='/' className='p-5 fs-4'>About</NavLink > 
            <NavLink  to='/issues' className='fs-4'>Issues</NavLink >
            </p>
            </>
        );
    }
}

export default Header;
