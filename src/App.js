import React from 'react';
import '../src/treehouse.css';
import apiKey from './config';

import Search from './component/Search';
import Nav from './component/Nav';
import Photo from './component/Photo';
import NotFound from './component/NotFound';

function App() {
  return (
    <div className="container">
      <Search />
      <Nav /> 
      <Photo />
      <NotFound />
    </div>
  );
}

export default App;
