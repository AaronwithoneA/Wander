import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import * as APIUtil from './util/dwelling_api_util';
import {fetchAllDwellings, fetchDwelling} from './actions/dwelling_actions';

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
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store}/>, root);
});
