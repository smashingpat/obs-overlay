import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Admin from './pages/admin';
import Render from './pages/render';


export const routes = [
    { path: '/', exact: true, component: Admin },
    { path: '/render', exact: true, component: Render },
];

export const Routes = () => (
    <Switch>
        {routes.map(route => (
            <Route key={route.path} {...route} />
        ))}
    </Switch>
)

export default Routes;
