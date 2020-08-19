import React from 'react';

function PhotoItem({ url }) {
    return (
        <li>
            <img src={url} alt="" />
        </li>
    )
}

export default PhotoItem;