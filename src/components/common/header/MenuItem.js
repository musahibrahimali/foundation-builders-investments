import React from 'react';
import Link from "next/link";

const MenuItem = (props) => {
    const { title, url } = props;
    return (
        <React.Fragment>
            <Link href={url}>
                <a className="md:mr-5 h-[80px] flex justify-center items-center border-b-4 border-b-transparent hover:border-b-gray-700 px-1 md:px-2 py-2 hover:text-gray-700 font-bold capitalize md:tracking-wider transition-all duration-200">
                    {title}
                </a>
            </Link>
        </React.Fragment>
    );
};

export default MenuItem;
