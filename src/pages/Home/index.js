import React, { Fragment } from 'react'
import {
    Container,
    Header,
} from 'semantic-ui-react'

import AppHeader from '../../components/AppHeader';
import AppFooter from '../../components/AppFooter';

function Home() {
    return (
        <Fragment>
            <AppHeader />
            <Container text style={styles.container}>
                <Header as='h1'>Bem-vindo(a) à Comic Store!</Header>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that.</p>
            </Container>
            <AppFooter />
        </Fragment>
    );
}

const styles = {
    container: {
        marginTop: '7em',
    },
};

export default Home;