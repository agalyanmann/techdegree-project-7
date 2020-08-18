import React from 'react';
import '../src/treehouse.css';

import Nav from './component/Nav';
import Photo from './component/Photo';
import Search from './component/Search';

function App() {
  return (
    <div className="container">
      <Search />
      <Nav /> 
      <Photo />
    </div>
  );
}

export default App;
