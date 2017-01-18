import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app.jsx';
import SessionFormContainer from "./session/session_form_container";
import Home from './home/home';
import DwellingContainer from './dwelling/dwelling_container';
import DwellingFormContainer from './dwelling/dwelling_form_container';
import BookingIndexContainer from './booking/booking_index_container';
import DwellingMap from './search/dwelling_map';
import SearchContainer from './search/search_container';


const Root = ({ store }) => {


  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  };

  return(
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <IndexRoute component={Home}/>
          <Route path="/login" component={ SessionFormContainer } onEnter={_redirectIfLoggedIn}/>
          <Route path="/signup" component={ SessionFormContainer } onEnter={_redirectIfLoggedIn}/>
          <Route path="/dwelling-form" component={ DwellingFormContainer } onEnter={_ensureLoggedIn}/>
          <Route path="/dwellings/:dwellingId" component={ DwellingContainer } />
          <Route path="/bookings" component={ BookingIndexContainer } onEnter={_ensureLoggedIn}/>
          <Route path="/map" component={ DwellingMap } />
          <Route path="/search" component={ SearchContainer } />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
