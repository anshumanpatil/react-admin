import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import FooterComponent from '../../components/footer/FooterComponent'
import Topbar from '../../components/topbar/Topbar'

import HomeConnected from '../../components/homeConnected/HomeConnected'

class Content extends PureComponent {
    render() {
        return (
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <Topbar/>
                    <div className="container-fluid">
                        <Switch>
                            <Route exact path="/dashboard/" component={HomeConnected} />
                        </Switch>
                    </div>
                </div>
                <FooterComponent/>
            </div>
        );

    }
}

export default Content;
