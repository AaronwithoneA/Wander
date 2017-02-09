import React from 'react';

class Reviews extends React.Component {


  rating () {
    const stars = [];
    for (var i = 0; i < parseInt(review.rating); i++) {
      stars.push(
        <img key={i} className="stars" src="http://res.cloudinary.com/dg8v2pvxf/image/upload/v1484359474/star-icon_cqaeqo.png"/>
      );
    }
    return stars;
  }

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
             <img className ="review-image"src={review.guest.image_url} />
             <div>{review.guest.fname}</div>
             {this.rating}
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
