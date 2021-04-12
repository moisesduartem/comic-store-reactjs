import React from "react";

import { ThemeProvider } from "styled-components";
import { AuthProvider } from "./auth";

export function ApplicationContextProvider({ children }) {
    return (
        <ThemeProvider theme={{}}>
            <AuthProvider>
                {children}
            </AuthProvider>
        </ThemeProvider>
    );
}