import {combineReducers} from 'redux';
import userReducers from './userReducers';
import authReducers from './authReducers';
import alertReducers from './alertReducers';

export default combineReducers({
    userReducers,
    authReducers,
    alertReducers
});