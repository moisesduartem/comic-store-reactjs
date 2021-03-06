import React, { Fragment } from 'react';

import { Card, Icon, Image } from 'semantic-ui-react';

import unkownHeroPathImage from '../../../../assets/images/unknown_hero.jpg';
import { getModifiedAt, limitText } from '../../../../utils/functions';

function ComicListCard({ data }) {

    const comicPrice = (data?.prices[0]?.price !== 0 ? data?.prices[0]?.price : "FREE");

    const marvelImagePath = data?.images[0]?.path;
    const cardImage = marvelImagePath ? `${marvelImagePath}/standard_incredible.jpg` : unkownHeroPathImage;

    return (
        <Fragment>
            <Card>
                <Image src={cardImage} wrapped ui={false} />
                <Card.Content>
                    <Card.Header as="a" href={`comics/` + data.id}>
                        {data.title}
                    </Card.Header>
                    <Card.Meta>
                        <span className='date'>{getModifiedAt({ date: data?.modified })}</span>
                    </Card.Meta>
                    <Card.Description>
                        {limitText({ value: data?.description, charLimit: 120 })}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Icon name='dollar' />
                    {comicPrice}
                </Card.Content>
            </Card>
        </Fragment>
    );
}

export default ComicListCard;