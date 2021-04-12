import React from "react";

import { ThemeProvider } from "styled-components";

export function ApplicationContextProvider({ children }) {
    return (
        <ThemeProvider theme={{}}>
            {children}
        </ThemeProvider>
    );
}