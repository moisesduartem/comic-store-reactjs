import React, { useEffect, useState } from "react";
import { DetailedComic } from "../../../components/app/DetailedComic";
import { GoBackArrow } from "../../../components/core/Arrow/GoBack";
import { marvel } from "../../../services/marvel";

function ComicDetail({ match }) {

    const { comicId } = match.params;

    const [comic, setComic] = useState();
    const [comicExists, setComicExists] = useState(true);

    useEffect(() => {

        const loadComic = async () => {

            const response = await marvel.getComic({ comicId });

            if (!response.data.data.results[0]) {
                setComicExists(false);
            }

            setComic(response.data.data.results[0]);
        };

        if (!comic) {
            loadComic();
        }

        console.log(comic);

    }, [comic]);

    return (
        <div>
            <GoBackArrow to="/comics" />
            {!!comicExists ? <DetailedComic comic={comic} /> : <h1>O quadrinho buscado não foi encontrado :(</h1>}
        </div>
    );
}

export { ComicDetail };