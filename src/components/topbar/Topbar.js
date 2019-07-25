import React, { PureComponent, Fragment } from 'react';
import Search from '../../components/topbar/search/Search'
import Alerts from '../../components/topbar/alerts/Alerts'
import Messages from '../../components/topbar/messages/Messages'
import Profile from '../../components/topbar/profile/Profile'

class Topbar extends PureComponent {
    render() {
        return (
        <Fragment>
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                <ul className="navbar-nav ml-auto">
                    <Alerts />
                    <Messages />
                    <div className="topbar-divider d-none d-sm-block"></div>
                    <Profile />
                </ul>
            </nav>
        </Fragment>
        );
    }
}
export default Topbar;
