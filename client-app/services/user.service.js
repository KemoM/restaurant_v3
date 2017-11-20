import request from '../helpers/httpClient';

export const userService = {
  login,
  logout,
  register,
  getAll,
  getById,
  update,
  delete: _delete,
};

//OPTION 2 - fetch
//function login(username, password) {
//  const requestOptions = {
//    method: 'POST',
//    headers: { 'Content-Type': 'application/json' },
//    body: JSON.stringify({ username, password }),
//  };

//  return fetch(config.apiUrl + '/authentication/authenticate', requestOptions) // eslint-disable-line
//    .then(handleResponse, handleError)
//    .then((user) => {
//      // login successful if there's a jwt token in the response
//      if (user && user.token) {
//        // store user details and jwt token in local storage to keep user logged in between page refreshes
//        localStorage.setItem('user', JSON.stringify(user));
//      }

//      return user;
//    });
//}

function login(username, pwd) {
  return request({
    url:    '/authentication/authenticate',
    method: 'POST',
    data:   {
      username: username,
      password: pwd,
    },
  })
    .then((response) => {
      // login successful if there's a jwt token in the response
      if (response && response.token) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(response));
      }

      return response;
    });
}

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
