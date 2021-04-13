import React, { useEffect } from 'react';

import { useAuth } from '../store/context/auth';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { ComicDetail } from '../pages/Comics/Detail';

import { PageContent } from './styles';

import { Home } from '../pages/Home';
import { Comics } from '../pages/Comics';
import { PurchaseHistory } from '../pages/PurchaseHistory';
import { AppFooter } from '../components/app/AppFooter';
import { AppHeader } from '../components/app/AppHeader';

function Routes() {

    const { signed } = useAuth();

    useEffect(() => {
        console.log(signed);
    }, [signed]);

    return (
        <BrowserRouter>
            <AppHeader />
            <PageContent>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/comics' component={Comics} />
                    <Route exact path="/comics/:comicId" component={ComicDetail} />
                    {!!signed ? (
                        <Route exact path="/account/purchases" component={PurchaseHistory} />
                    ) : (
                        <Route path="*" component={() => <h1>404: Página indisponível.</h1>} />
                    )}

                </Switch>
            </PageContent>
            <AppFooter />
        </BrowserRouter>
    );
}

export default Routes;