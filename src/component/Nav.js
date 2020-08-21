import React from 'react';
import { NavLink, Route } from 'react-router-dom';


import Kingfishers from './NavRequest/Kingfishers'
import Motmots from './NavRequest/Motmots';
import Owls from './NavRequest/Owls';


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
            <Route path='/kingfishers' component={Kingfishers} />
            <Route path='/motmots' component={Motmots} />
            <Route path='/owls' component={Owls} />
        </div>
    )
}

export default Nav;