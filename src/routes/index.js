import React from 'react';

import { BrowserRouter, Switch } from 'react-router-dom';

import { PageContent } from './styles';

import AppFooter from '../components/app/AppFooter';
import AppHeader from '../components/app/AppHeader';

import ProtectedRoutes from './protected.routes';
import GuestRoutes from './guest.routes';
import CommmonRoutes from './common.routes';
import { useAuth } from '../store/context/auth';

function Routes() {

    const { signed } = useAuth();
    const ApplicationRoutes = signed ? ProtectedRoutes : GuestRoutes;

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