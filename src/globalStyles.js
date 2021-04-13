import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    
    :root {
        --grey1: #bfbfbf;
        --dark1: #212121;
    }

    * {
        margin: 0;
        padding: 0;
    }

    &, body, html, #root {
        height: 100%;
    }
    
`;