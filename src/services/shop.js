import axios from "axios";
import https from "https";
import { toasts } from "../utils/customToasts";

const shopApi = axios.create({
    httpsAgent: new https.Agent({
        rejectUnauthorized: false,
    }),
    baseURL: "https://localhost:5001/api",
});

shopApi.interceptors.response.use(
    function (response) {
        return response;
    }, async function (err) {

        const status = err?.response?.status;

        if (status >= 400 || !status) {
            toasts.error(err?.response?.data?.message ?? "Ocorreu um erro inesperado.");
            return;
        }
        return Promise.reject(err);
    }
);

const shopRoutes = {
    login: "/v1/account/login",
    register: "/v1/account/register",
};

const shop = {
    api: shopApi,
    routes: shopRoutes,
    async login({ email, password }) {
        return await this.api.post(this.routes.login, { email, password });
    },
    async register({ name, email, username, password }) {
        return await this.api.post(this.routes.register, { name, email, username, password });
    },
};

export {
    shop,
};