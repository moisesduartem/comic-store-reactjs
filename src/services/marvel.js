import axios from 'axios';

const marvelApi = axios.create({
    baseURL: 'https://gateway.marvel.com',
});

const marvelAuth = {
    queryString: 'ts=1&hash=59a40e00f0a0f92c0285772d2f7b8aca&apikey=27b4d86ddb9329c6c5cad7f2d60860e1',
};

const marvelRoutes = {
    comics: {
        listAll: `/v1/public/comics?${marvelAuth.queryString}`,
    },
};

const marvel = {
    api: marvelApi,
    authStrings: marvelAuth,
    routes: marvelRoutes,
    async comics() {
        return await this.api.get(`${this.routes.comics.listAll}`);
    }
};

export {
    marvel,
};