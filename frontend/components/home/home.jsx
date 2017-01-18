import React from 'react';
import SearchContainer from '../search/search_container';

const Home = (props) => {
  return (
    <div className= "home-content">

      <div className="home-image">
        <h1 className="title-text"></h1>
      </div>
      <div>
        <SearchContainer />
      </div>
    </div>
  );
};
export default Home;
