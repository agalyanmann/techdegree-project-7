import React from 'react';
import { NavLink, Route } from 'react-router-dom';

import Photo from './Photo';

function Nav({ kingfishers, motmots, owls }) {
    return (
        <div className="main-content">
            <nav className="main-nav">
                <ul>
                    <li><NavLink to='/kingfishers'>Kingfishers</NavLink></li>
                    <li><NavLink to='/motmots'>Motmots</NavLink></li>
                    <li><NavLink to='/owls'>Owls</NavLink></li>
                </ul>
            </nav>
            <Route exact path='/kingfishers' render={() => <Photo data={kingfishers} />} />
            <Route exact path='/motmots' render={() => <Photo data={motmots} />} />
            <Route exact path='/owls' render={() => <Photo data={owls} />} />
        </div>
    )
}

export default Nav;