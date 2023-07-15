import axios from 'axios';

axios.defaults.baseURL = 'https://api.punkapi.com/v2';

export const getBeers = page => axios.get('/beers', { params: { page } });
