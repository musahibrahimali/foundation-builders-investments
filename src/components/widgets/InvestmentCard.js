import React from 'react';

const InvestmentCard = (props) => {
    const { amount, amountDolars, title, percentage, duration } = props;
    return (
        <React.Fragment>
            <div className="h-[450px] flex flex-col justify-center items-center bg-gray-900 rounded-md border border-light-blue w-full">
                <div className="flex justify-between items-center px-4 py-2 h-full">
                    <div className="flex justify-start items-center mx-2">
                        <div className="h4 w-4 p-2 rounded-full bg-light-blue"></div>
                        <div className="h-[0.5px] w-[60px] bg-light-blue"></div>
                    </div>
                    <div className="flex px-4 flex-col justify-center items-center text-gray-50">
                        <h1 className="font-bold text-lg md:text-xl lg:text-2xl text-center">
                            {percentage}%
                        </h1>
                        <p className='font-bold uppercase text-center'>
                            {duration}
                        </p>
                    </div>
                    <div className="flex justify-start items-center mx-2">
                        <div className="h-[0.5px] w-[60px] bg-light-blue"></div>
                        <div className="h4 w-4 p-2 rounded-full bg-light-blue"></div>
                    </div>
                </div>
                <div className="flex flex-row justify-between items-center space-x-8">
                    <div className="flex flex-row justify-center items-center p-2 bg-light-blue rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div className="">
                        <h1 className="font-bold capitalize text-lg md:text-xl lg:text-4xl text-white">
                            {title}
                        </h1>
                    </div>
                </div>
                <div className="bg-light-blue w-full py-4 rounded-b-md mt-4">
                    <div className="flex flex-col justify-center items-center">
                        <p className="font-normal text-gray-50">
                            Mininum Investment is
                        </p>
                        <div className="w-[120px] h-[2px] bg-blue-700 my-2"></div>
                        <div className="flex flex-col justify-center items-center my-2">
                            <h1 className="font-bold text-xl md:text-2xl lg:text-4xl text-white">
                                {amount}
                            </h1>
                            <div className='bg-white w-[100px] h-[1px] my-2'></div>
                            <h1 className="font-normal text-xl md:text-xl lg:text-2xl text-white">
                                {amountDolars}
                            </h1>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center items-center mb-2">
                        <p className="text-white">
                            Earnings only on Monday-Friday
                        </p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default InvestmentCard;