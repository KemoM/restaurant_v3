import axios from 'axios';
//import { authHeader } from '../helpers/auth-header';
import { config } from '../config/config.dev';


export const userService = {
  login,
  logout,
  register,
  getAll,
  getById,
  update,
  delete: _delete,
};

function login(username, password) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  };

  return fetch(config.apiUrl + '/authentication/authenticate', requestOptions) // eslint-disable-line
    .then(handleResponse, handleError)
    .then((user) => {
      // login successful if there's a jwt token in the response
      if (user && user.token) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(user));
      }

      return user;
    });
}

//TODO
//function login(username, pwd) {
//  let data = {
//    username: username,
//    password: pwd,
//  };
//  return axios.post('${config.apiUrl}/authentication/authenticate', data)
//    .then((response) => {
//      handleResponse(response);
//    })
//    .then((user) => {
//      // login successful if there's a jwt token in the response
//      if (user && user.token) {
//        // store user details and jwt token in local storage to keep user logged in between page refreshes
//        localStorage.setItem('user', JSON.stringify(user));
//      }

//      return user;
//    })
//    .catch((error) => {
//      handleError(error);
//    });
//}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('user');
}

function getAll() {
  
}

function getById(id) { // eslint-disable-line
  
}

function register(user) { // eslint-disable-line
  
}

function update(user) { // eslint-disable-line
  
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) { // eslint-disable-line
  
}

function handleResponse(response) {
  return new Promise((resolve, reject) => {
    if (response.ok) {
      // return json if it was returned in the response
      let contentType = response.headers.get("content-type");

      if (contentType && contentType.includes("application/json")) {
        response.json().then((json) => resolve(json));
      } else {
        resolve();
      }
    } else {
      // return error message from response body
      response.text().then((text) => reject(text));
    }
  });
}

function handleError(error) {
  return Promise.reject(error && error.message);
}
