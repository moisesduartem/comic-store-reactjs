import React, { Fragment } from "react";

function DetailedComic({ comic }) {
    return (
        <Fragment>
            <div>{comic?.id}</div>
            <div>{comic?.title}</div>
            <div>{comic?.variantDescription}</div>
            <div>{comic?.description}</div>
            <div>{comic?.prices[0]?.price}</div>
        </Fragment>
    );
}

export { DetailedComic };