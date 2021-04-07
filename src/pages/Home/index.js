import React, { Fragment } from 'react'
import { Header } from 'semantic-ui-react'
import { HomeContainer } from './styles';

function Home() {
    return (
        <Fragment>
            <HomeContainer text>
                <Header as='h1'>Bem-vindo(a) à Comic Store!</Header>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that.</p>
            </HomeContainer>
        </Fragment>
    );
}
export default Home;