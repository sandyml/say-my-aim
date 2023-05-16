import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import messagesReducer from './messagesReducer';

export default combineReducers({
 usersReducer,
 messagesReducer
})