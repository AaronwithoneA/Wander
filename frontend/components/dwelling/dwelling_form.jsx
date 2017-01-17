import React from 'react';
import {hashHistory} from 'react-router';

class DwellingForm extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
    about_this: "",
    location: "",
    price: "",
    image_url: "",
    description: "",
    guest_limit: "",
    bedrooms: "",
    beds: "",
    title: "",
    check_in: "",
    check_out: "",
    house_rules: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePhoto = this.handlePhoto.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const dwelling = Object.assign({}, this.state);
    this.props.createDwelling(dwelling).then(dwelling1 => {
      const newDwellingId = Object.keys(dwelling1.dwelling)[0];
      hashHistory.push(`/dwellings/${newDwellingId}`);
    });
  }

  handlePhoto(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(
      {
        cloud_name: 'dg8v2pvxf',
        upload_preset: 'z9nmrinj',
        theme: 'minimal',
      },
      (errors, coverInfo) => {
        if (errors === null) {
          let cover_info = coverInfo[0].url;
          this.setState({image_url: cover_info});
        }
      }
    );
  }
  render () {
    return (
      <div className="dwelling-form-image">
        <div className="dwelling-form-box">
          <form onSubmit={this.handleSubmit} className="dwelling-form">
            <input
              type="text"
              placeholder="Dwelling title"
              value={this.state.title}
              onChange={this.update("title")}
              className="dwelling-input"/>
            <input
              type="text"
              placeholder="About this dwelling"
              value={this.state.about_this}
              onChange={this.update("about_this")}
              className="dwelling-input"/>
            <input
              type="text"
              placeholder="Location"
              value={this.state.location}
              onChange={this.update("location")}
              className="dwelling-input"/>
            <input
              type="text"
              placeholder="Number of bedrooms"
              value={this.state.bedrooms}
              onChange={this.update("bedrooms")}
              className="dwelling-input"/>
            <input
              type="text"
              placeholder="Number of beds"
              value={this.state.beds}
              onChange={this.update("beds")}
              className="dwelling-input"/>
            <input
              type="text"
              placeholder="Type of dwelling"
              value={this.state.description}
              onChange={this.update("description")}
              className="dwelling-input"/>
            <input
              type="text"
              placeholder="Price per night"
              value={this.state.price}
              onChange={this.update("price")}
              className="dwelling-input"/>
            <input
              type="text"
              placeholder="Maximum guests"
              value={this.state.guestLimit}
              onChange={this.update("guest_limit")}
              className="dwelling-input"/>
            <input
              type="text"
              placeholder="Check in time"
              value={this.state.check_in}
              onChange={this.update("check_in")}
              className="dwelling-input"/>
            <input
              type="text"
              placeholder="Check out time"
              value={this.state.check_out}
              onChange={this.update("check_out")}
              className="dwelling-input"/>
            <input
              type="text"
              placeholder="House rules"
              value={this.state.house_rules}
              onChange={this.update("house_rules")}
              className="dwelling-input"/>
            <input
              type="text"
              placeholder="Image url"
              value={this.state.image_url}
              onChange={this.update("image_url")}
              className="dwelling-input"/>
            <input
              className="dwelling-form-button"
              type="submit"
              value="Accio dwelling!" />
          </form>
        </div>
      </div>

    );
  }
}

export default DwellingForm;
