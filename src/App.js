import React, { Component } from 'react';
import '../src/treehouse.css';
import apiKey from './config';
import { Route, Link, NavLink, Switch } from 'react-router-dom';

import Search from './component/Search';
import Nav from './component/Nav';
import Photo from './component/Photo';
import NotFound from './component/NotFound';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Search />
        <Nav />
        <Photo />
        <NotFound />
      </div>
    );
  }
}

export default App;
