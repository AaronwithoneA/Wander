import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import * as APIUtil from './util/review_api_util';
import {fetchAllDwellings, fetchDwelling} from './actions/dwelling_actions';
import {fetchReviews, createReview, receiveReviews} from './actions/review_actions';
import {fetchBookings, receiveBookings} from './actions/booking_actions';



document.addEventListener('DOMContentLoaded', () => {
    if (window.currentUser) {
      const preloadedState = { session: { currentUser: window.currentUser } };
      var store = configureStore(preloadedState);
    } else {
      store = configureStore();
    }
    window.store = store;
    window.APIUtil = APIUtil;
    window.fetchAllDwellings = fetchAllDwellings;
    window.fetchDwelling = fetchDwelling;
    window.fetchReviews = fetchReviews;
    window.createReview = createReview;
    window.fetchBookings = fetchBookings;
    window.receiveBookings = receiveBookings;
    window.receiveReviews = receiveReviews;
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store}/>, root);
});
