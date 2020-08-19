import React from 'react';
import { NavLink, Route } from 'react-router-dom';

import Cats from './NavRequest/Cats';
import Dogs from './NavRequest/Dogs';
import Birds from './NavRequest/Birds';

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

            <Route path='/cats' component={Cats} />
            <Route path='/dogs' component={Dogs} />
            <Route path='/birds' component={Birds} />
        </div>
    )
}

export default Nav;