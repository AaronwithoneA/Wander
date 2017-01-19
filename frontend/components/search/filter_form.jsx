import React from 'react';
import Slider from 'react-rangeslider';

class FilterForm extends React.Component {

 constructor(props) {
   super(props);
   this.handleChange = this.handleChange.bind(this);
   this.state ={
     maxPrice: 150
   };
 }

componentDidMount() {
  this.props.updateFilter("maxPrice", this.state.maxPrice);
}
 handleChange (value) {
  //  return e => {
     this.setState({maxPrice: value});
     this.props.updateFilter("maxPrice", this.state.maxPrice);
  //  } ;
 }

  render () {
    return(
      <div className="filter-container">
        <div className="filter">
          <div className="price-filter-box">
            <h3 className="filter-label">Maximum Price</h3>
            <div className="slider-box">
              <Slider
                min={30}
                max={1000}
                step={5}
                orientation={"horizontal"}
                value={this.state.maxPrice}
                className="rangeslider-horizontal"
                onChange={this.handleChange}/>
              <div className="slider-status">{this.state.maxPrice}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FilterForm;
