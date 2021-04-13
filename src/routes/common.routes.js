import React, { Fragment } from 'react';

import { Route } from 'react-router';
import { ComicDetail } from '../pages/Comics/Detail';


import Comics from '../pages/Comics';
import Home from '../pages/Home';

function CommmonRoutes() {
    return (
        <Fragment>
            <Route exact path='/' component={Home} />
            <Route exact path='/comics' component={Comics} />
            <Route exact path="/comics/:comicId" component={ComicDetail} />
        </Fragment>
    );
}

export default CommmonRoutes;