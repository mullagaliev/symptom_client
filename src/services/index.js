import {camelizeKeys} from 'humps';
const request = require('superagent');

const API_PATH = '/api/v1';
const API_ROOT = `http://localhost:5050${API_PATH}`;


function callApi(endpoint, method, data = {}) {
  const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint;
  let apiRequest = request;
  switch (method) {
    case 'POST' :
      apiRequest = apiRequest
        .post(fullUrl)
        .send(data);
      break;
    case 'PUT' :
      apiRequest = apiRequest
        .put(fullUrl)
        .send(data);
      break;
    case 'DELETE' :
      apiRequest = apiRequest
        .delete(fullUrl)
        .send(data);
      break;
    case 'GET' :
      apiRequest = apiRequest
        .get(fullUrl)
        .query(data);
      break;
    default :
      apiRequest = apiRequest
        .get(fullUrl)
        .query(data);
  }

  return apiRequest
    .set('Content-Type', 'application/json')
    .set('accept', 'json')
    .withCredentials()
    .then(
      response => {
        if (!response.ok)
          throw {message: 'Status error'};
        if (response.body.code === 200) {
          return camelizeKeys(response.body.result);
        }
        else
          throw {code: response.body.code, message: response.body.error};
      },
      error => {
        // throw {code: 0, message: error.message || 'Something bad happened'};
        throw {code: 0, message: 'Connection error'}
      }
    );
}

/* AUTH */
export const loginAdmin = (login, password) => callApi('/login', 'POST', {login, password});
export const logoutAdmin = () => callApi('/logout', 'POST', {});

export const sendPhoto = (photo) => callApi('/photos', 'POST', {photo});
