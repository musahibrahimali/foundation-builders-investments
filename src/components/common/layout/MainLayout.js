import React from 'react';
import MainHeader from "../header/MainHeader";
import MainFooter from "../footer/MainFooter";

const MainLayout = (props) => {
    const { children } = props;
    return (
        <React.Fragment>
            <div className="main_layout">
                <div className="bg-white sticky top-0 left-0 z-40">
                    <MainHeader />
                </div>
                <div className="content">
                    {children}
                </div>
                <div className="footer">
                    <MainFooter />
                </div>
            </div>
        </React.Fragment>
    );
};

export default MainLayout;
