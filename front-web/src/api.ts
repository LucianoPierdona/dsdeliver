import axios from 'axios';
import { OrderPayload } from './types';

const API_URL = 'https://luciano-dsdeliver.herokuapp.com';
const mapboxToken = process.env.REACT_APP_ACCESS_TOKEN_MAPBOX;

export function fetchProducts() {
  return axios.get(`${API_URL}/products`);
}

export function fetchLocalMapBox(local: string) {
  return axios(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapboxToken}`
  );
}

export function saveOrder(payload: OrderPayload) {
  return axios.post(`${API_URL}/orders`, payload);
}
