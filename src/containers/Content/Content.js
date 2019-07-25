import React, { PureComponent } from 'react';

import FooterComponent from '../../components/footer/FooterComponent'
import Topbar from '../../components/topbar/Topbar'
import PagesRoutes from '../../routes/PagesRoutes'

class Content extends PureComponent {
    render() {
        return (
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <Topbar/>
                    <div className="container-fluid">
                        <PagesRoutes/>
                    </div>
                </div>
                <FooterComponent copyright="Healthbuilder.com 2019"/>
            </div>
        );

    }
}

export default Content;
