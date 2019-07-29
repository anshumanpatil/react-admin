import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeConnected from '../components/homeConnected/HomeConnected';
import Pro from '../containers/PRO/Pro';

const PagesRoutes = () => (
    <Switch>
        <Route exact path="/dashboard/" component={HomeConnected} />
        <Route exact path="/dashboard/buttons" component={Pro} />
    </Switch>
)
export default PagesRoutes;