import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
 
const Star = (props) => {    
    return (                
      <div>
        <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={props.count}
        />
      </div>
    );
  }
export default Star