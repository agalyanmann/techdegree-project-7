import React from 'react';
import '../src/treehouse.css';

import Nav from './component/Nav';
import Photo from './component/Photo';

function App() {
  return (
    <div className="container">
      <Nav /> 
      <Photo />
    </div>
  );
}

export default App;
