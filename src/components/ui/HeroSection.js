import { HeroImage } from '../../assets/images/index';
import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import { useSession } from "next-auth/react";

const HeroSection = () => {

    const { data: session } = useSession();

    return (
        <React.Fragment>
            <section className="text-gray-600 bg-hero-bg">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="hidden md:block lg:max-w-lg lg:w-full md:w-1/2 w-full mb-10 md:mb-0">
                        <Image className="object-cover object-center rounded" alt="hero" src={HeroImage} />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-100">
                            Take 10% profit Daily
                            <br className="hidden lg:inline-block" />
                            & get referral commission
                        </h1>
                        <div className="rounded-full cursor-pointer w-[50px] h-[50px] bg-gray-900 p-12 md:p-14 mb-4 flex justify-center items-center">
                            <p className="text-white font-bold text-2xl md:text-4xl">
                                10%
                            </p>
                        </div>
                        <p className="mb-8 leading-relaxed text-lg md:text-2xl text-gray-50 py-4 px-4 flex text-left">
                            Earnings only on Monday-Friday
                        </p>
                        <div className="flex justify-center">
                            <Link href={session?.user != null ? "/deposit" : "/login"}>
                                <a className="inline-flex text-white bg-gray-900 border border-gray-300 py-4 hover:border-transparent shadow-md px-20 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                    Start Making Profit
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default HeroSection;
