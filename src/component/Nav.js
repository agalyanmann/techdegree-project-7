import React from 'react';

function Nav() {

    let url = '';

    return (
        <nav className="main-nav">
            <ul>
                <li><a href={url}>Cats</a></li>
                <li><a href={url}>Dogs</a></li>
                <li><a href={url}>Computers</a></li>
            </ul>
        </nav>
    )
}

export default Nav;