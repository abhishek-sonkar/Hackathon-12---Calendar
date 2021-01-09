import React from 'react';
import '../styles/App.css';
import Heading from './Heading';
import MonthnYear from './MonthnYear';
import Dates from './Dates';
import Buttons from './Buttons';

const App = () => {
  return (
    <div id="main">
      <Heading/>
      <MonthnYear/>
      <Dates/>
      <Buttons/>
    </div>
  )
}


export default App;
