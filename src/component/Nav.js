import React from 'react';
import { NavLink } from 'react-router-dom';


function Nav() {
    return (
        <div className="main-content">
            <nav className="main-nav">
                <ul>
                    <li><NavLink to='/cats'>Cats</NavLink></li>
                    <li><NavLink to='/dogs'>Dogs</NavLink></li>
                    <li><NavLink to='/birds'>Birds</NavLink></li>
                </ul>
            </nav>

        </div>
    )
}

export default Nav;