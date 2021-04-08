import React, { Fragment, useEffect, useState } from 'react';
import AvailableComicsList from '../../components/AvailableComicsList';
import { marvel } from '../../services/marvel';

function Comics() {

    const [comics, setComics] = useState(undefined);

    useEffect(() => {

        const loadComics = async () => {
            const response = await marvel.comics();
            setComics(response.data.data.results);
        };


        if (!comics) {
            loadComics();
        }

        console.log(comics);

    }, [comics]);

    return (
        <Fragment>
            {/* <AvailableComicsList
                comics={comics ?? []}
            /> */}
        </Fragment>
    );
}

export default Comics;