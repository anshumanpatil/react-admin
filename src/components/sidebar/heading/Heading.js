import React, { useState } from 'react';
const Heading = ({title}) => {
    return (
        <div className="sidebar-brand d-flex align-items-center justify-content-center">
            {/* <div className="sidebar-brand-icon rotate-n-15">
                <i className="fas fa-laugh-wink"></i>
            </div> */}
            <div className="sidebar-brand-text mx-3">{title}</div>
        </div>
    );
};
export default Heading;
  