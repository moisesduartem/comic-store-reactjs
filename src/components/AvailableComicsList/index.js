import React from 'react';
import ComicListCard from './ComicListCard';
import { ComicGallery } from './styles';

function AvailableComicsList({ comics }) {
    return (
        <ComicGallery>
            {(
                comics.map((comic, index) => (
                    <ComicListCard
                        data={comic}
                        key={comic?.id}
                    />
                ))
            )}
        </ComicGallery>
    );
}

export default AvailableComicsList;