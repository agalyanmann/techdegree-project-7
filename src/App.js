import React, { Component } from 'react';
import '../src/treehouse.css';
import axios from 'axios';
import apiKey from './config';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Search from './component/Search';
import Nav from './component/Nav';
import Photo from './component/Photo';

class App extends Component {

  constructor() {
    super();
    this.state = {
      photos: [],
      kingfishers: [],
      motmots: [],
      owls: [],
      loading: true
    };
  }

  componentDidMount() {

    //inistial api call through search function
    this.preformSearch();

    //kingfisher page data
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=kingfisher&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          kingfishers: response.data.photos.photo
        })
      })
      .catch(error => {
        console.log('Error fetching ad parsing data', error);
      });

    //motmot page data
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=motmots&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          motmots: response.data.photos.photo
        })
      })
      .catch(error => {
        console.log('Error fetching ad parsing data', error);
      });

    //owl page data
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=owls&per_page=24&format=json&nojsoncallback=1`)
      .catch(response => {
        this.setState({
          owls: response.data.photos.photo
        })
      })
      .catch(error => {
        console.log('Error fetching ad parsing data', error);
      });
  }

  preformSearch = (query = 'sunsets') => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&tag_mode=all&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          photos: response.data.photos.photo,
          loading: false
        })
      })
      .catch(error => {
        console.log('Error fetching ad parsing data', error);
      });
  }

  //application dom rendering
  render() {

    const loading = this.state.loading;

    return (
      <BrowserRouter>
        <div className="container">
          <Search onSearch={this.preformSearch} />
          <Nav kingfishers={this.state.kingfishers} motmots={this.state.motmots} owls={this.state.owls} />
          {
            (loading)
              ? <h3>Loading...</h3>
              :
              <Switch>
                <Route exact path='/' render={() => <Photo data={this.state.photos} />} />
                <Route path='/search/:search' render={() => <Photo data={this.state.photos} />} />
              </Switch>
          }
        </div>
      </BrowserRouter>
    );
  }
}


export default App;
