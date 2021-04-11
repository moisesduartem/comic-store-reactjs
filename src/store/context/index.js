import React from "react";

import { ThemeProvider } from "styled-components";
import { ModalProvider } from "./modal";

export function ApplicationContextProvider({ children }) {
    return (
        <ThemeProvider theme={{}}>
            <ModalProvider>
                {children}
            </ModalProvider>
        </ThemeProvider>
    );
}