import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  authentication,
  registration,
  form: formReducer,
});

export default rootReducer;
