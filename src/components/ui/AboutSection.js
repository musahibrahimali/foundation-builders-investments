import React from 'react';
import Image from "next/image";
import { Logo } from "../../assets/images";

const AboutSection = () => {
    return (
        <React.Fragment>
            <div className="bg-white px-8 py-16 w-full">
                <div className="container">
                    <div className="grid grid-cols-1 md:flex flex-row justify-between items-center">
                        <div className="w-full md:w-1/2 md:px-12 md:flex flex-col justify-between items-center">
                            <div className="mb-4 flex flex-col justify-center items-center w-full">
                                <h1 className='font-bold text-lg md:text-2xl uppercase text-gray-700 text-center'>
                                    About Future Builders Investments
                                </h1>
                                <div className="w-[80px] md:w-[180px] bg-blue-700 h-1 mt-2"></div>
                            </div>
                            <div className="text-gray-700 text-lg md:text-xl mt-12">
                                <p className="text-justify">
                                    Future Builders Investments Ltd is one of the leading trading companies who are serving their
                                    profit share policy to all investors. Yes, this is the time to invest with us to make
                                    you confirm the profit share. There are more than millions of people who are connected
                                    with us. And all they are gaining equal profit from our company.
                                    Our business criteria possibly turn on the profit return policy. So we can easily
                                    share our profit with you. You can invest your funds without any risk. We are a top
                                    and trustworthy company that is registered in the United Kingdom. A professional
                                    analytic team, some best trading corporates, and the best survey team ensure the
                                    profit. All this setup is made up of our own company construction system. So that you
                                    can measure the best outcome from the trade. Some of the top company agents and
                                    policymakers also joined with us. Some Of them have already made a huge profit by
                                    investing with us. And some are joining in a periodical way.
                                </p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 mt-4 md:mt-0 md:px-20">
                            <div className="bg-blue-500 py-4 md:py-8 px-4 grid grid-cols-1 md:flex flex-col justify-between items-start space-y-8">
                                <div className=" w-full flex flex-col md:flex-row justify-between items-center text-gray-50 space-y-2 md:space-x-8">
                                    <Image className="rounded-full bg-gray-200 p-20 shadow-md" src={Logo} alt="logo" width={100} height={100} />
                                    <div className="flex flex-col w-full justify-start items-start">
                                        <h1 className="text-lg md:text-xl font-bold mb-2 md:mb-1">
                                            Future Builders Investments
                                        </h1>
                                        <p className='mb-4 md:mb-0'>
                                            Registration number is <br />
                                            <span className='font-bold'>
                                                17936798A
                                            </span>
                                        </p>
                                    </div>
                                    <div className="bg-blue-700 w-[150px] flex flex-row justify-center text-center items-center px-4 rounded-md py-4 md:space-x-8">
                                        <p className='font-bold'>
                                            view certificate
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <h1 className='text-gray-50 font-bold text-lg md:text-xl'>
                                        Three Level Commission Program
                                    </h1>
                                    <div className="bg-blue-900 cursor-pointer px-4 py-2 rounded-br-2xl rounded-tl-2xl shadow-md text-gray-50 mt-4">
                                        <p className="text-lg md:text-xl text-center">
                                            WE OFFER YOU THE OPPORTUNITY TO GENERATE ADDITIONAL INCOME
                                            THROUGH OUR AFFILIATE PROGRAM
                                        </p>
                                    </div>

                                    <div className="flex md:flex-row justify-center space-x-4 md:space-x-12 mt-6 items-center">
                                        <div className="cursor-pointer flex flex-col justify-center items-center bg-blue-900 px-4 py-2 rounded-br-2xl rounded-tl-2xl shadow-md text-gray-50 mt-4">
                                            <p className="text-lg md:text-xl">
                                                5%
                                            </p>
                                            <h1 className="font-bold">
                                                Level 1
                                            </h1>
                                        </div>
                                        <div className="cursor-pointer flex flex-col justify-center items-center bg-blue-900 px-4 py-2 rounded-br-2xl rounded-tl-2xl shadow-md text-gray-50 mt-4">
                                            <p className="text-lg md:text-xl">
                                                10%
                                            </p>
                                            <h1 className="font-bold">
                                                Level 2
                                            </h1>
                                        </div>
                                        <div className="cursor-pointer flex flex-col justify-center items-center bg-blue-900 px-4 py-2 rounded-br-2xl rounded-tl-2xl shadow-md text-gray-50 mt-4">
                                            <p className="text-lg md:text-xl">
                                                15%
                                            </p>
                                            <h1 className="font-bold">
                                                Level 3
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default AboutSection;
