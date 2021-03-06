﻿import { userConstants } from '../constants/userConstants';
import { userService } from '../services/userService';
import { history } from '../store/configureStore';

export const userActions = {
  login,
  logout,
  register,
};

function login(username, password) {
  return (dispatch) => {
    dispatch(request({ username }));

    userService.login(username, password)
      .then(
        (response) => {
          dispatch(success(response));
          history.push('/');
        },
        (error) => {
          dispatch(failure(error));
        }
      );
  };

  function request(user) { return { type: userConstants.LOGIN_REQUEST, user }; }
  function success(user) { return { type: userConstants.LOGIN_SUCCESS, user }; }
  function failure(error) { return { type: userConstants.LOGIN_FAILURE, error }; }
}

function logout() {
  userService.logout();
  return { type: userConstants.LOGOUT };
}

function register(user) {
  return (dispatch) => {
    dispatch(request(user));

    userService.register(user)
      .then(
        () => { 
          dispatch(success());
          history.push('/login');
        },
        (error) => {
          dispatch(failure(error));
        }
      );
  };

  function request(user) { return { type: userConstants.REGISTER_REQUEST, user }; }
  function success(user) { return { type: userConstants.REGISTER_SUCCESS, user }; }
  function failure(error) { return { type: userConstants.REGISTER_FAILURE, error }; }
}