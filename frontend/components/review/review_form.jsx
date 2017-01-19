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
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const review = Object.assign({}, this.state);
    this.props.createReview(review);
  }

  render () {
    return (
      <div className="review-form-container" >
        <form onSubmit={this.handleSubmit} className="review-form">
          <div className="review-rating-box">
            <h4 className="rating-title">Rating:   </h4>
              <label> 1
                <input className="review-rating" type="radio" name="rating"
                  value="1" onChange={this.update("rating")}/>
              </label>
              <label>2
                <input className="review-rating" type="radio" name="rating"
                  value="2" onChange={this.update("rating")}/>
              </label>

              <label>3
                <input className="review-rating" type="radio" name="rating"
                  value="3" onChange={this.update("rating")}/>
              </label>

              <label>4
                <input className="review-rating" type="radio" name="rating"
                  value="4" onChange={this.update("rating")}/>
              </label>

              <label>5
                <input className="review-rating" type="radio" name="rating"
                  value="5" onChange={this.update("rating")}/>
              </label>
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

export default ReviewForm;
