import { configureAxiosDefaultHeaders } from './initHeader';
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.thecatapi.com/v1/',
  headers: configureAxiosDefaultHeaders(),
  withCredentials:true
});

export default api;
