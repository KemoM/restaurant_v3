import Immutable from 'immutable';
import { userConstants } from '../constants/userConstants';

let user = JSON.parse(localStorage.getItem('user'));
//const initialState = user ? { loggedIn: true, user } : {};

// The initial state
const initialState = Immutable.Map({
  loggedIn: user ? true: false,
  loggingIn: false,
  user: user,
  error: null,
});

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return state.merge({
        loggedIn: false,
        loggingIn: true,
        user: null,
      });
    case userConstants.LOGIN_SUCCESS:
      return state.merge({
        loggedIn: true,
        loggingIn: false,
        user: action.user,
      });
    case userConstants.LOGIN_FAILURE:
      return state.merge({
        loggedIn: false,
        loggingIn: false,
        user: null,
        error: action.error,
      });
    case userConstants.LOGOUT:
      return state.merge({
        loggedIn: false,
        loggingIn: false,
        user: null,
      });
    default:
      return state;
  }
}