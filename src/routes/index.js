import React from 'react';

import { useAuth } from '../store/context/auth';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { ComicDetail } from '../pages/Comics/Detail';

import { PageContent } from './styles';

import { Home } from '../pages/Home';
import { Comics } from '../pages/Comics';
import { AppFooter } from '../components/app/AppFooter';
import { AppHeader } from '../components/app/AppHeader';

import { ProtectedRoutes } from "./protected.routes";

function Routes() {

    const { signed } = useAuth();

    return (
        <BrowserRouter>
            <AppHeader />
            <PageContent>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/comics' component={Comics} />
                    <Route exact path="/comics/:comicId" component={ComicDetail} />
                    {!!signed && <ProtectedRoutes />}
                </Switch>
            </PageContent>
            <AppFooter />
        </BrowserRouter>
    );
}

export default Routes;