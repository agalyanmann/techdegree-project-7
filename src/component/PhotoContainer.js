import React from 'react';
import PhotoItem from './PhotoItem';
import NoPhotos from './NoPhotos';

function PhotoContainer({ data }) {

    //check if search returned results.
    const results = data;
    let photos;
    if (results.length > 0) {
        photos = data.map(photo =>
            <PhotoItem url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} key={photo.id} />
        )
    } else {
        photos = <NoPhotos />
    }

    return (
        <div className='photo-container'>
           <h2>Results</h2>
            <ul>
                {photos}
            </ul>
        </div>
    )
}

export default PhotoContainer;