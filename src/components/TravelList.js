import React from 'react';
import data from '../data.js';
import TravelItem from './TravelItem.js';

const travelList = data.map((travelItem) => {
  return <TravelItem key={travelItem.id} {...travelItem} />;
});

const TravelList = () => {
  return <main className='travel--container'>{travelList}</main>;
};

export default TravelList;
