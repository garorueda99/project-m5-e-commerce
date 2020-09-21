// Libraries
import { combineReducers } from 'redux';

// CREATE INDEPENDENT STATES FOR NEW THINGS ARE NOT CREATED. if doubts ask Andres Rueda
import example from './example-reducer';
import modal from './modal';
import items from './items';
import cart from './cart';

export default combineReducers({ example, modal, items, cart });
