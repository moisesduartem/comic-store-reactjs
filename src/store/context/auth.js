import React, { createContext, useContext } from "react";

import { shop } from "../../services/shop";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {

    async function signIn() {

        const response = await shop.login({
            email: "moisesduartem@gmail.com", password: "123456"
        });

        console.log(response);
    }

    return (
        <AuthContext.Provider value={{ signed: true, signIn }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    return context;
}