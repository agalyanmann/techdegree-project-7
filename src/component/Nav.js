import React from 'react';
import { NavLink, Route } from 'react-router-dom';

import PhotoContainer from './PhotoContainer';

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
            <Route exact path='/kingfishers' render={() => <PhotoContainer data={kingfishers} />} />
            <Route exact path='/motmots' render={() => <PhotoContainer data={motmots} />} />
            <Route exact path='/owls' render={() => <PhotoContainer data={owls} />} />
        </div>
    )
}

export default Nav;