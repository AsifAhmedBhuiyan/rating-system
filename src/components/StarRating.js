import React, { useState } from 'react';
import Star from './Star';
import '../styles/StarRating.css';


const StarRating = () => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  const stars = Array(5).fill(null).map((_, index) => (
    <Star
      key={index}
      index={index}
      selected={index < rating}
      onClick={handleStarClick}
    />
  ));

  const word = rating === 1 ? 'Poor' :
    rating === 2 ? 'Fair' :
    rating === 3 ? 'Good' :
    rating === 4 ? 'Very Good' :
    rating === 5 ? 'Excellent' :
    '';

  return (
    <div className="star-rating-container"> 
      <div className="stars">{stars}</div>
      <div className="rating">
        <h2>{word}</h2>
      </div>
    </div>
  );
};

export default StarRating;

