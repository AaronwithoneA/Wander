import React from 'react';

class Dwelling extends React.Component {

  componentDidMount () {
    this.props.fetchDwelling(this.props.dwellingId);
  }

  render () {
    return (
      <div>
          <div>
            <img src={this.props.dwelling.image_url}></img>
          </div>
      </div>
    );
  }
}


export default Dwelling;
