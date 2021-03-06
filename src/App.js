import React, { Component } from 'react';
import '../src/treehouse.css';
import axios from 'axios';
import apiKey from './config';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Search from './component/Search';
import Nav from './component/Nav';
import PhotoContainer from './component/PhotoContainer';
import NotFound from './component/NotFoundErr';

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
    this.getLinkPhotos();
    this.preformSearch();

  }

  //call and load information for nav links
  getLinkPhotos = () => {
    const links = ['owls', 'motmots', 'kingfisher']

    links.forEach(link => {
      axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${link}&tag_mode=all&per_page=24&format=json&nojsoncallback=1`)
        .then(response => {
          if (link === 'owls') {
            this.setState({
              owls: response.data.photos.photo
            })
          } else if (link === 'motmots') {
            this.setState({
              motmots: response.data.photos.photo
            })
          } else if (link === 'kingfisher') {
            this.setState({
              kingfishers: response.data.photos.photo
            })
          }
        })
        .catch(error => {
          console.log('Error fetching and parsing data', error);
        });
    });
  }

  preformSearch = (query = 'sunsets') => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&sort=interestingness-desc&sort=relevance&per_page=24&format=json&nojsoncallback=1`)
      .then(this.setState({ loading: true }))
      .then(response => {
        this.setState({
          photos: response.data.photos.photo,
          loading: false
        })
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  //application dom rendering
  render() {

    const loading = this.state.loading;

    return (
      <HashRouter>
        <div className="container">
          <Search onSearch={this.preformSearch} />
          <Nav />
          {
            (loading)
              ? <h3>Loading...</h3>
              :
              <Switch>
                <Route exact path='/' render={() => <PhotoContainer data={this.state.photos} />} />
                <Route path='/search/:search' render={() => <PhotoContainer data={this.state.photos} />} />
                <Route exact path='/kingfishers' render={() => <PhotoContainer data={this.state.kingfishers} />} />
                <Route exact path='/motmots' render={() => <PhotoContainer data={this.state.motmots} />} />
                <Route exact path='/owls' render={() => <PhotoContainer data={this.state.owls} />} />
                <Route component={NotFound} />
              </Switch>
          }
        </div>
      </HashRouter>
    );
  }
}


export default App;
