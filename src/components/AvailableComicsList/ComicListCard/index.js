import React, { Fragment } from 'react';
import { Card, CardContent, CardDescription, FeedExtra, FeedMeta, Header, Icon, Image } from 'semantic-ui-react';

function ComicListCard({ data }) {

    const unkownHeroPathImage = '../../../assets/images/unknown_hero.jpg';
    
    const comicPrice = (data?.prices[0]?.price != 0 ? data?.prices[0]?.price : "FREE");
    
    const marvelImagePath = data?.images[0]?.path;
    const cardImage = marvelImagePath ? `${marvelImagePath}/portrait_incredible.jpg` : unkownHeroPathImage;

    return (
        <Fragment>

            <Card>
                <Image src={cardImage} wrapped ui={false} />
                <Card.Content>
                    <Card.Header as="a">{data.title}</Card.Header>
                    <Card.Meta>
                        <span className='date'>{data?.modified}</span>
                    </Card.Meta>
                    <Card.Description>
                        {data?.description}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon name='dollar' />
                        {comicPrice}
                    </a>
                </Card.Content>
            </Card>
        </Fragment>
    );
}

export default ComicListCard;