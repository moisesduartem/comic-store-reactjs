import { Container } from 'semantic-ui-react';
import styled from 'styled-components';

export const PageFooter = styled(Container)`

    & {
        text-align: center;
        padding: 1.5em 0em;
        position: fixed;
        background: black;
        width: 100% !important;
        bottom: 0;
    }

    @media (max-width: 768px) {
        & {
            visibility: hidden;
        }
    }

`;