import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    
    :root {
        --grey1: #bfbfbf;
    }

    * {
        margin: 0;
        padding: 0;
    }

    &, body, html, #root {
        height: 100%;
    }
    
`;