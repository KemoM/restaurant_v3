import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  authentication: authentication,
  registration : registration,
  users: users,
  form: formReducer,
});

export default rootReducer;
