import styled from 'styled-components';
import { Container } from 'semantic-ui-react';

export const HomeContainer = styled(Container)`
    
    img {
        margin-top: 2rem;
        border-radius: 5px;
        border: 1px solid var(--grey1);
    }

    @media (max-width: 600px) {
        img {
            width: 100vw;
        }
    }
`;