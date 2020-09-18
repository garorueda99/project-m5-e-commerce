import { combineReducers } from 'redux';

//CREATE INDEPENDENT STATES FOR NEW THINGS ARE NOT CREATED. if doubts ask Andres Rueda
import example from './example-reducer';
import modal from './modal';
import items from './items';

export default combineReducers({ example, modal, items });
