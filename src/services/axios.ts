import Axios from 'axios';

export const vignettesApi = Axios.create({
  baseURL: process.env.REACT_APP_VIGNETTES_URI,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export const purchasesApi = Axios.create({
  baseURL: process.env.PURCHASES_URI,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
