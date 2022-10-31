import React from 'react';
import { InvestmentCard } from "../widgets";
import Link from 'next/link';

const InvestmentPlanSection = () => {

    const user = false;

    return (
        <React.Fragment>
            <div className="bg-hero-bg w-full h-full">
                <div className="bg-indigo-900 w-full h-full bg-opacity-70 py-10 px-10 flex flex-col justify-between items-center">
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="font-bold text-white text-lg md:text-2xl lg:text-4xl uppercase">
                            Our Invesment Packages
                        </h1>
                        <div className="w-[120px] h-[2px] mt-4 bg-light-blue"></div>
                    </div>
                    <div className="grid grid-cols-1 md:flex flex-row justify-between items-center space-y-6 md:space-x-4 mt-12">
                        <InvestmentCard
                            amount={"¢300 - ¢1000"}
                            amountDolars={"$21.43 - $71.42"}
                            percentage={10}
                            title="Daily Plan"
                            duration={"After 15 days"}
                        />
                        <InvestmentCard
                            amount={"¢1,500 - ¢5,000"}
                            amountDolars={"$107.13 - $357.08"}
                            percentage={15}
                            title="6 Weeks Plan"
                            duration={"After 15 days"}
                        />
                        <InvestmentCard
                            amount={"¢6,000 - ¢15,000"}
                            amountDolars={"$428.50 - $1,071.25"}
                            percentage={20}
                            title="Monthly Plan"
                            duration={"After 15 days"}
                        />
                        <InvestmentCard
                            amount={"¢20,000 - ¢100,000"}
                            amountDolars={"$1,428.34 - $7,141.69"}
                            percentage={30}
                            title="6 Months Plan"
                            duration={"After 15 days"}
                        />
                    </div>
                    {
                        !user && <div className="flex flex-col md:flex-row w-full justify-center items-center space-y-4 md:space-x-8 mt-10">
                            <Link href='/register'>
                                <a className="bg-blue-800 md:w-[250px] text-center lg:w-[400px] bg-opacity-50 transition-all duration-150 text-white font-bold hover:bg-opacity-100 uppercase text-lg md:text-xl lg:text-2xl border border-light-blue py-2 px-4 rounded">
                                    Create an account
                                </a>
                            </Link>
                            <Link href='/login'>
                                <a className="bg-transparent md:w-[250px] text-center lg:w-[400px] hover:bg-light-blue border border-light-blue uppercase text-lg md:text-xl lg:text-2xl w-44 text-white font-bold py-2 px-4 rounded">
                                    Login
                                </a>
                            </Link>
                        </div>
                    }
                </div>
            </div>
        </React.Fragment>
    );
}

export default InvestmentPlanSection;