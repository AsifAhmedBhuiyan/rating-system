import React from 'react';
import { FaStar } from 'react-icons/fa';
import '../styles/Star.css';

const Star = ({ index, selected, onClick }) => {
  return (
    <FaStar
      className={`star-icon ${selected ? 'selected' : ''}`} // Add the CSS classes
      onClick={() => onClick(index)}
    />
  );
};

export default Star;
