import React from 'react';
import PropTypes from 'prop-types';

function Property(props) {
  return(
    <div>
      <div>
        <img src={props.image}/>
      </div>
      <h2>{props.title}</h2>
      <h4>{props.city}, {props.state}</h4>
      <h4>From {props.price} per night</h4>
    </div>
  );

}

Property.propTypes = {
  city: PropTypes.string,
  state: PropTypes.string,
  type: PropTypes.string,
  price: PropTypes.number,
  bedrooms: PropTypes.number,
  title: PropTypes.string,
  image: PropTypes.string
};

export default Property;