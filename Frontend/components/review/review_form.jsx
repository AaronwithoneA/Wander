import React from 'react';

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
        <div className="review-form-box">
          <form onSubmit={this.handleSubmit} className="review-form">
            <input
              type="text"
              value={this.state.body}
              onChange={this.update("body")}
              className="review-input"/>
            <input
              className="review-form-button"
              type="submit"
              value="Sonorus" />
          </form>
        </div>
      </div>
    );
  }
}

export default ReviewForm;
