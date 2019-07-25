import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
const Interface = ({data}) => {
    console.log("data", data)
    return (
        <Fragment>
            <div className="sidebar-heading">
                {data.blockTitle}
            </div>
            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                    <i className={data.iconClass}></i>
                    <span>{data.dropDownTitle}</span>
                </a>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">{data.innerTitle}</h6>
                        {
                            data.list.map((element, i) => {
                                return (<Link className="collapse-item" key={i} to={element.to}>{element.title}</Link>) 
                            })
                        }
                    </div>
                </div>
            </li>
        </Fragment>
    );
};
export default Interface;
