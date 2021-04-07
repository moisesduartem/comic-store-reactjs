import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    
    * {
        margin: 0;
        padding: 0;
    }

    &, body, html, #root {
        height: 100%;
    }
    
`;