import React from 'react';
import Nav from './components/Nav';
import TravelList from './components/TravelList';
import './style.css';

const App = () => {
  return (
    <div className='container'>
      <Nav />
      <TravelList />
    </div>
  );
};

export default App;
