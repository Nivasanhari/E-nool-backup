// components/StarRating.js
"use client"
import { useState } from 'react';

const StarRating = ({ initialValue }) => {
  const [rating, setRating] = useState(initialValue);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  return (
    <div className=' text-xl ml-2 cursor-pointer text-[orange]'>
      {[1, 2, 3, 4, 5].map((index) => (
        <span
          key={index}
          className={`star ${rating >= index ? 'filled' : ''}`}
          onClick={() => handleRatingChange(index)}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
};

export default StarRating;
