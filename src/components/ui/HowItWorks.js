import React from 'react';

const HowItWorks = () => {
    return (
        <React.Fragment>
            <div className="flex flex-col justify-center items-center bg-amber-50 py-8">
                <h1 className="text-lg md:text-2xl lg:text-4xl text-gray-900 font-bold uppercase mt-4 mb-12"> How it works </h1>
                <div className="flex flex-col md:flex-row justify-center items-center">
                    <div className="rounded-full p-4 flex flex-col justify-center items-center bg-blue-900 w-[200px] h-[200px]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                        </svg>
                        <p className='text-gray-50 font-bold text-center mt-1'>
                            open an account
                        </p>
                    </div>
                    <div className="w-[1px] md:w-[100px] h-[100px] md:h-[1px] bg-blue-900"></div>
                    <div className="rounded-full p-4 flex flex-col justify-center items-center bg-blue-900 w-[200px] h-[200px]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                        </svg>
                        <p className='text-gray-50 font-bold text-center mt-1'>
                            Login to your account
                        </p>
                    </div>
                    <div className="w-[1px] md:w-[100px] h-[100px] md:h-[1px] bg-blue-900"></div>
                    <div className="rounded-full p-4 flex flex-col justify-center items-center bg-blue-900 w-[200px] h-[200px]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                        </svg>
                        <p className='text-gray-50 font-bold text-center mt-1'>
                            Deposit funds
                        </p>
                    </div>
                    <div className="w-[1px] md:w-[100px] h-[100px] md:h-[1px] bg-blue-900"></div>
                    <div className="rounded-full shadow-md p-4 flex flex-col justify-center items-center bg-blue-900 w-[200px] h-[200px]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                        </svg>
                        <p className='text-gray-50 font-bold text-center mt-1'>
                            Withdraw profits
                        </p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default HowItWorks;