import React, {Component} from 'react';
import axios from 'axios';

import Photo from '../Photo';
import apiKey from '../../config';

class Owls extends Component {
    
    constructor() {
        super();
        this.state = {
          photos: []
        };
      }

      componentDidMount() {
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=owls&per_page=24&format=json&nojsoncallback=1`)
        .then(response => {
          this.setState({
            photos: response.data.photos.photo
          })
        })
        .then(error => {
          console.log('Error fetching ad parsing data', error);
        });
      }

    render () {
        return (
            <Photo data={this.state.photos} />
        )
    }
}

export default Owls;
