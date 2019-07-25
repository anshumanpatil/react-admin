import React, { PureComponent } from 'react';
import Heading from './heading/Heading'
import Interface from './interface/Interface'
class Sidebar extends PureComponent {
    render() {
        return (
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                <Heading title="Health Builder"/>
                <hr className="sidebar-divider my-0" />

                <li className="nav-item">
                    <a className="nav-link" href="index.html">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span></a>
                </li>

                <hr className="sidebar-divider" />

                <Interface data={{
                    blockTitle : "Member area",
                    dropDownTitle : "Members",
                    innerTitle : "Member Register",
                    iconClass : "fas fa-fw fa-cog",
                    list : [
                        {title: "Add Member", to: "/dashboard/buttons"},
                        {title: "Delete Member", to: "/dashboard/cards"}
                    ]
                }}/>

                <hr className="sidebar-divider" />

            </ul>
        );

    }
}

export default Sidebar;
