import React from 'react';
import {MainLayout} from "../components/";

const NotFound = () => {
    return (
        <React.Fragment>
            <div className="max-w-2xl mx-8 sm:mx-auto py-20 flex flex-col items-center justify-center fit">
                <h1 className="">
                    Not Found
                </h1>
                <p className="">
                    The requested page doesn&apos;t exist or you don&apos;t have access to it.
                </p>
            </div>
        </React.Fragment>
    );
}
NotFound.Layout = MainLayout;
export default NotFound;