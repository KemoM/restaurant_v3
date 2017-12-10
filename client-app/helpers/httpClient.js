import axios from 'axios';
import { config } from '../config/config';
//import { authHeader } from '../helpers/auth-header';

/**
 * Create an Axios Client with defaults
 */
const client = axios.create({
  baseURL: config.apiUrl,
});

/**
 * Request Wrapper with default success/error actions
 */
const request = function(options) {
  const onSuccess = function(response) {
    return response.data;
  };

  const onError = function(error) {

    if (error.response) {
      // Request was made but server responded with something
      // other than 2xx

    } else {
      // Something else happened while setting up the request
      // triggered the error
    }

    return Promise.reject(error.response || error.message);
  };


  return client(options)
    .then(onSuccess)
    .catch(onError);
};


export default request;