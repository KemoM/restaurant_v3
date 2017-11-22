import { userConstants } from '../constants/user.constants';
import { userService } from '../services/user.service';
import { history } from '../store/configureStore';

export const userActions = {
  login,
  logout,
  //register,
  //getAll,
  //delete: _delete,
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