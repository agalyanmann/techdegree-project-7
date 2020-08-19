import React from 'react';
import PhotoItem from '../component/PhotoItem';

function Photo({ data }) {

    let photos = data.map(photo => 
        <PhotoItem url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} key={photo.id} />
    )

    return (
        <div className='photo-container'>
            <h2>Results</h2>
            <ul>
                {photos}
            </ul>
        </div>
    )
}

export default Photo;