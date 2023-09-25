import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

const Card = ({ imageUrl, buttonText, nameText, subText }) => {
  return (
    <div className="card">
        <img src={imageUrl} alt="Card" />
        <h3>{nameText}</h3>
        <h4>{subText}</h4>
        <button>{buttonText}</button>
    </div>
  );
};

Card.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    nameText: PropTypes.string.isRequired,
    subText: PropTypes.string.isRequired,
};

export default Card;
