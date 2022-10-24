import React from 'react';
import Image from "next/image";
import { Logo } from "../../../assets/images";
import MenuItem from "./MenuItem";
import Link from 'next/link';
import { useSession } from "next-auth/react";
import MobileNav from './MobileNav';

const MainHeader = () => {

    const { data: session } = useSession();

    return (
        <React.Fragment>
            <header className="text-gray-700 bg-white h-[80px] shadow-md w-full">
                <div className="container mx-auto flex flex-wrap px-2 md:px-5 flex-row md:flex-row items-start md:items-center justify-between">
                    <Link href="/">
                        <a className="flex title-font font-medium items-start text-gray-900 mb-4 md:mb-0">
                            <Image src={Logo} height={80} width={100} alt="fb investments graphics" />
                        </a>
                    </Link>
                    <nav className="md:ml-auto flex flex-row md:flex flex-wrap items-center text-base justify-center">
                        <MenuItem title="Support" url="/support" />
                        {session?.user && <MenuItem title="Deposit" url="/deposit" />}
                        {session?.user && <MenuItem title="Profile" url="/profile" />}
                    </nav>
                    {
                        !session?.user && <Link href="/login">
                            <a className="md:inline-flex justify-center transition-all duration-150 items-center bg-blue-600 text-white uppercase font-bold border-0 py-1 md:py-2 px-2 md:px-6 md:mr-4 focus:outline-none hover:bg-transparent hover:text-gray-700 hover:border hover:border-gray-100 rounded text-base mt-5 md:mt-0">
                                login
                            </a>
                        </Link>
                    }
                    {
                        !session?.user && <Link href='/register'>
                            <a className="flex md:inline-flex transition-all duration-150 items-center bg-light-blue text-gray-50 uppercase font-bold border py-1 md:py-2 px-2 md:px-3 focus:outline-none hover:bg-blue-600 hover:bg-transparent hover:text-white hover:border border-gray-100 hover:border-transparent rounded text-base mt-5 md:mt-0">
                                sign up
                            </a>
                        </Link>
                    }
                </div>
            </header>
        </React.Fragment>
    );
};

export default MainHeader;
