import React from 'react';
import MainHeader from "../header/MainHeader";
import MainFooter from "../footer/MainFooter";
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

// Create a client
const queryClient = new QueryClient();

const MainLayout = (props) => {
    const { children } = props;
    return (
        <React.Fragment>
            <QueryClientProvider client={queryClient}>
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
                {/* query dev tools */}
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </React.Fragment>
    );
};

export default MainLayout;
