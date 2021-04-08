import React, { Fragment } from 'react'
import { Button, Header } from 'semantic-ui-react'
import { HomeContainer } from './styles';

import MarvelHomeWallpaperImg from '../../assets/images/home_wallpaper.jpg';

function Home() {
    return (
        <Fragment>
            <HomeContainer text>
                <div>
                    <Header as='h1'>Bem-vindo(a) à Comic Store!</Header>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that.</p>
                    <Button as="a" color="red" href="/comics">Vamos lá!</Button>
                </div>
                <img width={400} src={MarvelHomeWallpaperImg} />
            </HomeContainer>
        </Fragment>
    );
}
export default Home;