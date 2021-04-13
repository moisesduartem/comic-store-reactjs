import React, { Fragment, useEffect } from 'react';
import { Route, useLocation } from 'react-router';
import { PurchaseHistory } from '../pages/PurchaseHistory';

function ProtectedRoutes() {

    const { pathname } = useLocation();

    useEffect(() => {
        console.log(pathname);
    }, []);

    return (
        <Fragment>
            <Route exact path="/account/purchases" component={PurchaseHistory} />
        </Fragment>
    );
}

export { ProtectedRoutes };