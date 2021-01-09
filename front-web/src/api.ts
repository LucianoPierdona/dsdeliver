import axios from 'axios';

const API_URL = 'https://luciano-dsdeliver.herokuapp.com';

export function fetchProducts() {
  return axios.get(`${API_URL}/products`);
}
