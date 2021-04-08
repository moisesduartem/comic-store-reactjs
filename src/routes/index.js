import React from 'react';

import { BrowserRouter, Switch } from 'react-router-dom';

import { PageContent } from './styles';

import AppFooter from '../components/AppFooter';
import AppHeader from '../components/AppHeader';

import ProtectedRoutes from './protected.routes';
import GuestRoutes from './guest.routes';
import CommmonRoutes from './common.routes';

function Routes() {

    const isLogged = false;
    const ApplicationRoutes = isLogged ? ProtectedRoutes : GuestRoutes;

    return (
        <BrowserRouter>
            <AppHeader />
            <PageContent>
                <Switch>
                    <CommmonRoutes />
                    <ApplicationRoutes />
                </Switch>
            </PageContent>
            <AppFooter />
        </BrowserRouter>
    );
}

export default Routes;