import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeConnected from '../components/homeConnected/HomeConnected';

const PagesRoutes = () => (
    <Switch>
        <Route exact path="/dashboard/" component={HomeConnected} />
    </Switch>
)
export default PagesRoutes;