import React, { Fragment } from 'react';
const FooterComponent = ({copyright}) => {
    return (
        <Fragment>
            <footer className="sticky-footer bg-white">
                <div className="container my-auto">
                    <div className="copyright text-center my-auto">
                        <span>Copyright &copy; {copyright}</span>
                    </div>
                </div>
            </footer>
        </Fragment>
    );
};
export default FooterComponent;