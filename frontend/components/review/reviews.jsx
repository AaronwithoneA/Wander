import React from 'react';

class Reviews extends React.Component {

  render () {
  return (
    <div className="reviews-box">
      <div className="reviews-title">
        {this.props.dwelling.reviews.length} Reviews
      </div>
      <ul>
        {this.props.dwelling.reviews.map(review => (
          <li className="extra-dwelling-section">
            <div className="review-user-info">
              Hagrid
            </div>
            <div className="extra-dwelling-section-content">
              {review.body}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
  }
}


export default Reviews;
