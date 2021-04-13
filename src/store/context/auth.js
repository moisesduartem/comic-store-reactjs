import React, { createContext, useContext, useEffect, useState } from "react";

import { shop } from "../../services/shop";
import { toasts } from "../../utils/customToasts";

export const AuthContext = createContext();

export function AuthProvider({ children }) {

    const [user, setUser] = useState(null);

    useEffect(() => {

        const storagedUser = localStorage.getItem("comicStore:user");
        const storagedToken = localStorage.getItem("comicStore:token");

        if (!!storagedUser && !!storagedToken) {
            setUser(JSON.parse(storagedUser));
            shop.api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
        }

    }, []);

    async function signIn(email, password) {

        const response = await shop.login({
            email,
            password,
        });

        if (!!response?.data?.user && !!response?.data?.token) {
            setUser(response?.data?.user);
            localStorage.setItem("comicStore:user", JSON.stringify(response?.data?.user));
            localStorage.setItem("comicStore:token", response?.data?.token);
            shop.api.defaults.headers.Authorization = `Bearer ${response?.data?.token}`;
            toasts.success(`Bem-vindo(a)${(", " + response.data.user.name.split(" ")[0]) ?? ""}!`);
        }

    }

    return (
        <AuthContext.Provider value={{ signed: Boolean(user), signIn, user }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    return context;
}