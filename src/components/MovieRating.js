import React, { useState} from 'react';
import { GiFlexibleStar } from 'react-icons/gi';

function MovieRating() {

    const[rating, setRating] = useState(null);
    const[hover, setHover] = useState(null);


  return (
    <div>
        {[...Array(5)].map((star, i) => {
            const starRating = i + 1;
            return (
                <label>
                    <input
                        type='radio' 
                        name='rating' 
                        value={starRating} 
                        onClick={() => setRating(starRating)}
                       

                    />
                    <GiFlexibleStar
                        
                        className='star' 
                        color={starRating <= (hover || rating)  ? '#d90429' : '#03045e'}
                        size='25'
                        onMouseEnter={() => setHover(starRating)}
                        onMouseLeave={() => setHover(null)}
                    />
                </label>
            )
        })}
        <span id='star'>{rating}</span>
    </div>
  )
}

export default MovieRating


