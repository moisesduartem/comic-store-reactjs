import React from "react";

function ComicDetail({ match }) {

    const { comicId } = match.params;
    
    return (
        <div>
            {comicId}
        </div>
    );
}

export { ComicDetail };