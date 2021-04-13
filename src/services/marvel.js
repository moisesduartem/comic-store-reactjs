import axios from 'axios';

const marvelApi = axios.create({
    baseURL: 'https://gateway.marvel.com',
});

const marvelAuth = {
    queryString: 'ts=1&hash=319febba2e471400e044de81d6805b97&apikey=ba4be53e060ec62dd1e5fc33169745a2',
};

const marvelRoutes = {
    comics: {
        listAll: `/v1/public/comics?${marvelAuth.queryString}`,
        getOne: comicId => `/v1/public/comics/${comicId}?${marvelAuth.queryString}`,
        getCharsByComic: comicId => `/v1/public/comics/${comicId}/characters?${marvelAuth.queryString}`,
    },
};

const marvel = {
    api: marvelApi,
    authStrings: marvelAuth,
    routes: marvelRoutes,
    async comics() {
        return await this.api.get(this.routes.comics.listAll);
    },
    async getComic({ comicId }) {
        return await this.api.get(this.routes.comics.getOne(comicId))
    },
    async getComicCharacters({ comicId }) {
        return await this.api.get(this.routes.comics.getCharsByComic(comicId))
    }
};

export {
    marvel,
};