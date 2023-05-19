import { combineReducers } from 'redux';
import errorsReducer from './errorsReducer';
import usersReducer from './usersReducer';
import messagesReducer from './messagesReducer';

export default combineReducers({
 errorsReducer,
 usersReducer,
 messagesReducer
})