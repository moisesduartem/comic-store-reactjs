import { Tab } from "semantic-ui-react";
import styled from "styled-components";

export const Pane = styled(Tab.Pane)`
    
    img {
        border-radius: 8px;
        border: 1px solid var(--grey1);
        margin-bottom: 0.5rem;
    }

    main {
        padding: 10px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        article {
            font-size: 1.1rem;
        }

        h3 {
            margin-bottom: 1rem;
        }

        div {
            padding: 0.8rem;
        }

        .heroes {
            img {
                margin: auto 2px;
            }
        }
    }

    @media (max-width: 720px) {
        main {
            flex-direction: column;
            img {
                width: 100%;
            }
        }
    }

`;