import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { PageContent } from './styles';

import AppFooter from '../components/AppFooter';
import AppHeader from '../components/AppHeader';

import ProtectedRoutes from './protected.routes';
import GuestRoutes from './guest.routes';

import Home from '../pages/Home';

function Routes() {

    const isLogged = false;
    const ApplicationRoutes = isLogged ? ProtectedRoutes : GuestRoutes;

    return (
        <BrowserRouter>
            <AppHeader />
            <PageContent>
                <Switch>
                    <Route path='/' component={Home} />
                    <ApplicationRoutes />
                </Switch>
            </PageContent>
            <AppFooter />
        </BrowserRouter>
    );
}

export default Routes;