import React from 'react';
import {hashHistory} from 'react-router';

class ReviewForm extends React.Component {
  constructor (props) {

    super(props);
    this.state = {
    body: "",
    rating: "",
    dwelling_id: this.props.dwellingId
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clickedStar = this.clickedStar.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    console.log(this.state.rating);
    e.preventDefault();
    const review = Object.assign({}, this.state);
    this.props.createReview(review);
  }


  clickedStar (num) {
    if (num <= this.state.rating) {
      return "clicked-star";
    }
    else {
      return "unclicked-star";
    }
  }

  render () {
    return (
      <div className="review-form-container" >
        <form onSubmit={this.handleSubmit} className="review-form">
          <div className="review-rating-box">
              <img src='http://res.cloudinary.com/dg8v2pvxf/image/upload/v1484359474/star-icon_cqaeqo.png'
                            className={this.clickedStar(1)}
                            onClick={() => this.setState({rating: 1})}/>
              <img src='http://res.cloudinary.com/dg8v2pvxf/image/upload/v1484359474/star-icon_cqaeqo.png'
                           className={this.clickedStar(2)}
                           onClick={() => this.setState({rating: 2})}/>
              <img src='http://res.cloudinary.com/dg8v2pvxf/image/upload/v1484359474/star-icon_cqaeqo.png'
                            className={this.clickedStar(3)}
                            onClick={() => this.setState({rating: 3})}/>
              <img src='http://res.cloudinary.com/dg8v2pvxf/image/upload/v1484359474/star-icon_cqaeqo.png'
                           className={this.clickedStar(4)}
                           onClick={() => this.setState({rating: 4})}/>
              <img src='http://res.cloudinary.com/dg8v2pvxf/image/upload/v1484359474/star-icon_cqaeqo.png'
                          className={this.clickedStar(5)}
                          onClick={() => this.setState({rating: 5})}/>
            </div>
          <textarea
            type="text"
            value={this.state.body}
            onChange={this.update("body")}
            className="review-input"></textarea>
          <input
            className="review-form-button"
            type="submit"
            value="Sonorus" />
        </form>
      </div>
    );
  }
}

// <label> 1
//   <input className="review-rating" type="radio" name="rating"
//     value="1" onChange={this.update("rating")}/>
// </label>
// <label>2
//   <input className="review-rating" type="radio" name="rating"
//     value="2" onChange={this.update("rating")}/>
// </label>
//
// <label>3
//   <input className="review-rating" type="radio" name="rating"
//     value="3" onChange={this.update("rating")}/>
// </label>
//
// <label>4
//   <input className="review-rating" type="radio" name="rating"
//     value="4" onChange={this.update("rating")}/>
// </label>
//
// <label>5
//   <input className="review-rating" type="radio" name="rating"
//     value="5" onChange={this.update("rating")}/>
// </label>
export default ReviewForm;
