import React, { PureComponent } from 'react';
import HomeConnected from '../../components/homeConnected/HomeConnected'
import Sidebar from '../../components/sidebar/Sidebar'
import Content from '../Content/Content'
class Dashboard extends PureComponent {
    componentDidMount() {
        window.jQuery("#AppComponent").removeClass("container")
    }
    render() {
        return (
            <div id="wrapper">
                <Sidebar/>
                <Content/>
            </div>
        );
    }
}

export default Dashboard;
