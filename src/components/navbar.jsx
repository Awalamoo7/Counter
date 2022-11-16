import React from 'react';

const NavBar = ({totalCounters}) => {
    return (
        <nav className="navbar bg-light">
            <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">
                Navbar 
                <span className='badge badge-pill badge-secondary m-2'>{totalCounters}</span>
            </span>
            </div>
        </nav> 
     );
}
 
export default NavBar; 

