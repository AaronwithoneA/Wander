import React from 'react';
import Slider from 'react-rangeslider';

class FilterForm extends React.Component {

 constructor(props) {
   super(props);
   this.state ={
     maxPrice: 500,
     city: ""
   };
   this.handlePriceChange = this.handlePriceChange.bind(this);
   this.update = this.update.bind(this);
 }

componentDidMount() {
  this.props.updateFilter("maxPrice", this.state.maxPrice);
  this.props.fetchSearchLocations("");
}
 handlePriceChange (value) {
  //  return e => {
     this.setState({maxPrice: value});
     this.props.updateFilter("maxPrice", this.state.maxPrice);
  //  } ;
 }

 update (field) {
   return e => {
     this.setState({
       [field]: e.currentTarget.value
     });
     this.props.updateFilter("letters", e.currentTarget.value);
    };
  }

  componentWillReceiveProps () {

  }
 // handleLocationChange (value) {
 //   this.setState({city: value});
 //   this.props.fetchSearchLocations(value);
 // }


  render () {
    return(
      <div className="filter-container">
        <div className="filter">
          <div className="location-filter-box">
            <div className="filter-label">Where</div>
            <input type="text"
              onChange={this.update("city")}
              value={this.state.city}
              placeholder="Hogwarts School of Witchcraft and Wizardry"
              className="location-filter"/>
          </div>
          <div className="price-filter-box">
            <div className="price-filter-labels">
              <h3 className="filter-label">Maximum Price</h3>
              <div className="slider-status">${this.state.maxPrice}</div>
            </div>
            <div className="slider-box">
              <Slider
                min={30}
                max={1000}
                step={5}
                orientation={"horizontal"}
                value={this.state.maxPrice}
                className="rangeslider-horizontal"
                onChange={this.handlePriceChange}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FilterForm;
