import { combineReducers } from 'redux';

//CREATE INDEPENDENT STATES FOR NEW THINGS ARE NOT CREATED. if doubts ask Andres Rueda
import example from './example-reducer';
import modal from './modal';

export default combineReducers({ example, modal });
