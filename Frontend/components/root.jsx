import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app.jsx';
import SessionFormContainer from "./session/session_form_container";
import Home from './home/home';
import DwellingContainer from './dwelling/dwelling_container';
import DwellingFormContainer from './dwelling/dwelling_form_container';
import BookingIndexContainer from './booking/booking_index_container';

const Root = ({ store }) => (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ App }>
        <IndexRoute component={Home}/>
        <Route path="/login" component={ SessionFormContainer } />
        <Route path="/signup" component={ SessionFormContainer } />
        <Route path="/dwelling-form" component={ DwellingFormContainer } />
        <Route path="/dwellings/:dwellingId" component={ DwellingContainer } />
        <Route path="/bookings" component={ BookingIndexContainer } />
      </Route>
    </Router>
  </Provider>
);

export default Root;
