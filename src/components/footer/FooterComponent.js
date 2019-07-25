import React, { Fragment } from 'react';
const FooterComponent = () => {
    return (
        <Fragment>
            <footer className="sticky-footer bg-white">
                <div className="container my-auto">
                    <div className="copyright text-center my-auto">
                        <span>Copyright &copy; Your Website 2019</span>
                    </div>
                </div>
            </footer>
        </Fragment>
    );
};
export default FooterComponent;