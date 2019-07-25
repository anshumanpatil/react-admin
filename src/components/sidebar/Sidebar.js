import React, { PureComponent } from 'react';
import Heading from './heading/Heading'
import Interface from './interface/Interface'
import Addons from './addons/Addons'
class Sidebar extends PureComponent {
    render() {
        return (
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                <Heading/>

                <hr className="sidebar-divider my-0" />

                <li className="nav-item">
                    <a className="nav-link" href="index.html">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span></a>
                </li>

                <hr className="sidebar-divider" />

                <Interface/>

                <hr className="sidebar-divider" />

                <Addons/>

                <hr className="sidebar-divider d-none d-md-block" />

                <div className="text-center d-none d-md-inline">
                    <button className="rounded-circle border-0" id="sidebarToggle"></button>
                </div>

            </ul>
        );

    }
}

export default Sidebar;
