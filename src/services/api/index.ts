import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.staging.aca.so',
});
