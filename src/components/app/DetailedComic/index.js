import React, { Fragment } from "react";
import { Container } from "semantic-ui-react";
import { DetailsTab } from "./Tabs/Details";

function DetailedComic({ comic }) {
    return (
        <Fragment>
            <Container>
                <DetailsTab comic={comic} />
            </Container>
        </Fragment>
    );
}

export { DetailedComic };