import React, { Fragment } from 'react';
import { PageContent } from './styles';

import AppFooter from '../components/AppFooter';
import AppHeader from '../components/AppHeader';

import Home from '../pages/Home';

function AppRoutes() {
    return (
        <Fragment>
            <AppHeader />
            <PageContent>
                <Home />
            </PageContent>
            <AppFooter />
        </Fragment>
    );
}

export default AppRoutes;