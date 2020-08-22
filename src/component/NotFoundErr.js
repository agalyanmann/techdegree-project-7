import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <ul>
            <li className="not-found">
                <h3>404: Page Does Not Exist</h3>
                <p> Click <Link to='/'>HERE</Link> to return home.</p>
            </li>
        </ul>
    )
}

export default NotFound;