import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';
import storage from '../utils/storage';

axios.defaults.adapter = httpAdapter;

let baseUrl;
let env = window.__env || {};

if (process.env.NODE_ENV === 'test') {
  baseUrl = 'http://example.com';
} else if (process.env.NODE_ENV === 'development') {
  baseUrl = env.REACT_APP_API_PREFIX || 'http://localhost:8080';
} else {
  baseUrl = env.REACT_APP_API_PREFIX;
}

const fetcher = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json'
  }
});

fetcher.interceptors.request.use(function (config) {
  const token = storage.getItem("token") || null;
  config.headers['Authorization'] = `${token}`;
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

fetcher.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  console.log(arguments);
  if (error && error.response && error.response.status === 401) {
    storage.removeItem("token");
  }
  return Promise.reject(error);
});

export const login = (username, password) => {
  return fetcher.post(`/auth`, {
    username,
    password
  }).then(res => {
    return Promise.resolve(res.data.token);
  });
};

export const register = (values) => {
  return fetcher.post(`/users`, values).then(res => {
    return Promise.resolve({});
  });
};

export const createOrder = (username, values) => {
  return fetcher.post(`/users/${username}/orders`, { items: values });
};

export const fetchOrders = (username) => {
  return fetcher.get(`/users/${username}/orders?sort=orderedDate,desc`).then(res => res.data._embedded && res.data._embedded.orders || []);
};

export const fetchPets = () => {
  return fetcher.get('/pets').then(res => res.data._embedded.pets);
};

export const fetchPet = (petId) => {
  return fetcher.get('/pets/' + petId).then(res => res.data);
};
