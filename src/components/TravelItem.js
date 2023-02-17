import React from 'react';
import pinpoint from '../images/pinpoint.png';

const TravelItem = (props) => {
  console.log(props);
  return (
    <section className='travel--item'>
      <img
        src={props.locationImg}
        alt={props.location}
        className='travel--img'
      />

      <div className='travel--info'>
        <div className='info-head'>
          <img src={pinpoint} alt='' />
          <p>{props.country}</p>
          <a href={props.mapLink} target='_blank' rel='noreferrer'>
            View on Google Maps
          </a>
        </div>

        <h1>{props.location}</h1>
        <p className='travel--dates'>
          {props.startDate} - {props.endDate}
        </p>
        <p className='travel--desc'>{props.description}</p>
      </div>
    </section>
  );
};

export default TravelItem;
