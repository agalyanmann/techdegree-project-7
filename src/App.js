import React, { Component } from 'react';
import '../src/treehouse.css';
import axios from 'axios';
import apiKey from './config';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Search from './component/Search';
import Nav from './component/Nav';
import Photo from './component/Photo';
import NotFound from './component/NotFound';


import Kingfishers from './component/NavRequest/Kingfishers';
import Motmots from './component/NavRequest/Motmots';
import Owls from './component/NavRequest/Owls';

class App extends Component {

  constructor() {
    super();
    this.state = {
      photos: []
    };
  }

  componentDidMount() {
    this.preformSearch();
  }

  preformSearch = (query = 'sunsets') => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          photos: response.data.photos.photo
        })
      })
      .then(error => {
        console.log('Error fetching ad parsing data', error);
      });
  }

  render() {
    console.log(this.state.photos);
    return (
      <BrowserRouter>
        <div className="container">
          <Search onSearch={this.preformSearch} />
          <Nav />
          <Switch>
            <Route exact path='/' render={() => <Photo data={this.state.photos} />} />
            <Route path='/search/:search' render={() => <Photo data={this.state.photos} />} />
            <Route path='/kingfishers' component={Kingfishers} />
            <Route path='/motmots' component={Motmots} />
            <Route path='/owls' component={Owls} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
