import React from 'react';

class Reviews extends React.Component {

  render () {
  return (
    <div className="reviews-box">
      <div className="reviews-title">
        {this.props.dwelling.reviews.length} Review(s)
      </div>
      <ul>
        {this.props.dwelling.reviews.map((review, idx)=> (
          <li key={idx} className="extra-dwelling-section">
            <div className="review-user-info">
              {review.guest.fname}
             <img src={review.guest.image_url} />
            </div>
            <div className="extra-dwelling-section-content">
              <div>{review.body}</div>
             <div className='review-date'>
               <div className='review-date-section'>{review.month}</div>
               <div className='review-date-section'>{review.year}</div>
             </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
  }
}


export default Reviews;
