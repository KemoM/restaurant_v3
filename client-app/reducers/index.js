import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { authentication } from './authentication';
import { registration } from './registration';

const rootReducer = combineReducers({
  routing: routerReducer,
  authentication,
  registration,
  form: formReducer,
});

export default rootReducer;
