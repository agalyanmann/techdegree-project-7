import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
    return (
        <div className="main-content">
            <nav className="main-nav">
                <ul>
                    <li><NavLink to='/kingfishers'>Kingfishers</NavLink></li>
                    <li><NavLink to='/motmots'>Motmots</NavLink></li>
                    <li><NavLink to='/owls'>Owls</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;