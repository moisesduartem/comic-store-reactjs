import React, { Fragment } from 'react';
import ComicListCard from './ComicListCard';

function AvailableComicsList({ comics }) {
    return (
        <Fragment>
            {(
                comics.map((comic, index) => (
                    <ComicListCard
                        data={comic} 
                        key={comic?.id} 
                    />
                ))
            )}
        </Fragment>
    );
}

export default AvailableComicsList;