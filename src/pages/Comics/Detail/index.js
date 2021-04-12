import React from "react";
import { GoBackArrow } from "../../../components/core/Icons";

function ComicDetail({ match }) {

    const { comicId } = match.params;
    
    return (
        <div>
            <GoBackArrow to="/comics" />
            {comicId}
        </div>
    );
}

export { ComicDetail };