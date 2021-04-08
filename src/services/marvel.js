import axios from 'axios';

const marvelApi = axios.create({
    baseURL:  'https://gateway.marvel.com',
});

const marvelQueryString = 'ts=1&hash=59a40e00f0a0f92c0285772d2f7b8aca&apikey=27b4d86ddb9329c6c5cad7f2d60860e1';

export const marvel = {
    api: marvelApi,
    queryString: marvelQueryString,
};