import axios from "axios";

const shopApi = axios.create({
    baseURL: "https://localhost:5001/api",
});

const shopRoutes = {
    login: "/v1/account/login"
};

const shop = {
    api: shopApi,
    routes: shopRoutes,
    async login({ email, password }) {
        return await this.api.post(this.routes.login, { email, password });
    }
};

export {
    shop,
};