import React, { Fragment } from 'react';
import { Route } from 'react-router';
import { PurchaseHistory } from '../pages/PurchaseHistory';

function ProtectedRoutes() {

    return (
        <Fragment>
            <Route exact path="/account/purchases" component={PurchaseHistory} />
        </Fragment>
    );
}

export { ProtectedRoutes };