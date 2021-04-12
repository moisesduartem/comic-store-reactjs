import React, { Fragment } from "react";
import { Container } from "semantic-ui-react";

function DetailedComic({ comic }) {
    return (
        <Fragment>
            <Container>
                <div>{comic?.id}</div>
                <div>{comic?.title}</div>
                <div>{comic?.variantDescription}</div>
                <div>{comic?.description}</div>
                <div>{comic?.prices[0]?.price}</div>
            </Container>
        </Fragment>
    );
}

export { DetailedComic };