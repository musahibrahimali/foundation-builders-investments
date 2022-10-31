import React, { useEffect, useState } from "react";
import { setCookie, removeCookie } from '../../lib/provider';
import { MainLayout, InvestmentPlanSection } from "../../components";
import { usePaystackPayment } from 'react-paystack';
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';

const depositMoney = async (amount, user) => {
    const values = {
        email: user?.email,
        amount: amount,
    }

    const response = await axios({
        url: `${process.env.NEXT_PUBLIC_DEPOSIT}/${user?._id}`,
        method: "Post",
        withCredentials: true,
        headers: {
            "Accept": "application/json",
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        data: JSON.stringify(values)
    });
    if (response) {
        return true;
    }
    return false;
}

const inCreaseBalance = async (amount, user) => {
    const values = {
        amount: amount,
    }

    const response = await axios({
        url: `${process.env.NEXT_PUBLIC_BALANCE}/${user?._id}`,
        method: "Post",
        withCredentials: true,
        headers: {
            "Accept": "application/json",
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        data: JSON.stringify(values)
    });
    if (response) {
        return true;
    }
    return false;
}


const PaystackHook = (props) => {
    const {
        user,
        currency,
        amount,
    } = props;
    const [error, setError] = useState(false);
    const router = useRouter();

    const config = {
        reference: (new Date()).getTime().toString(),
        email: user?.email,
        amount: amount * 100,
        currency: currency,
        publicKey: process.env.NEXT_PUBLIC_PAYSTACT_PUBLIC_KEY,
    };

    const onSuccess = (reference) => {
        console.log(reference);
        const balance = inCreaseBalance(amount, user);
        if (balance) {
            const response = depositMoney(amount, user);
            if (response) {
                router.push('/');
            }
        }
    };

    const onClose = () => {
        console.log('closed')
    }

    const initializePayment = usePaystackPayment(config);

    return (
        <div>
            {
                error &&
                <div className="absolute top-0 left-0 right-0 z-50 h-screen w-screen flex flex-col justify-center items-center bg-white bg-opacity-80" role="alert">
                    <div className="flex flex-col justify-center items-center bg-white px-8 py-4 shadow-lg rounded-md">
                        <h1 className='text-blue-400 font-extrabold uppercase text-lg md:text-xl lg:text-2xl'>
                            Please Login
                        </h1>
                        <div className="my-4 w-10 h-[1px] bg-red-500"></div>
                        <p className='text-gray-700 text-lg md:text-xl lg:text-4xl'>
                            You must be logged in <br /> to make a deposit.
                        </p>
                        <button onClick={() => {
                            setError(false);
                            router.push('/login');
                        }} className='bg-blue-400 py-2 px-4 mt-4 text-white font-bold rounded-lg shadow-md'>
                            continue
                        </button>
                    </div>
                </div>
            }
            <button className='text-white bg-blue-500 px-8 py-2 rounded-md hover:border-gray-100 hover:text-gray-600 hover:bg-transparent focus:border-none font-bold uppercase border border-transparent' onClick={() => {
                if (user) {
                    initializePayment(onSuccess, onClose)
                } else {
                    setError(true);
                }
            }}>
                Deposit
            </button>
        </div>
    );
};

const Deposit = (props) => {

    const { cookie } = props;
    // create an instance of dispatch to pass to the footer
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user);

    useEffect(() => {
        // console.log('cookie', cookie);
        const handleIsCookie = () => {
            if (cookie) {
                dispatch(setCookie(true));
            } else {
                dispatch(removeCookie(false));
            }
        }
        handleIsCookie();
    }, [cookie, dispatch]);

    const [amount, setAmount] = React.useState(100);

    const onSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <React.Fragment>
            <div className="flex flex-col justify-between items-center">
                <div className="flex flex-col justify-center items-center">
                    <h1 className='text-gray-900 font-normal text-xl md:text-2xl lg:text-4xl my-6 capitalize'>
                        Let&apos;s get you your financial freedom
                    </h1>
                    <div className="w-[100px] h-[1px] bg-gray-900 mb-4"></div>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <p className='text-gray-900 text-sm md:text-base lg:text-lg text-center'>
                        We are a team of financial experts who are passionate about helping you achieve your financial goals.
                    </p>
                    <div className='flex flex-col justify-center items-center bg-gray-900 shadow-lg px-24 py-6 my-8 rounded-md space-y-4'>
                        <p
                            className='bg-gray-400 px-12 py-2 my-2 rounded-md text-sm md:text-base lg:text-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                        >
                            {user?.email}
                        </p>
                        <div className="flex bg-gray-100 px-2 py-2 my-1 rounded-md text-sm md:text-base lg:text-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                            <span className='mr-2 text-sm md:text-base lg:text-lg'>
                                GHS
                            </span>
                            <input
                                type="number"
                                className='bg-transparent outline-none'
                                placeholder='Enter Amount'
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                            />
                        </div>
                        <PaystackHook
                            currency="GHS"
                            amount={amount}
                            user={user}
                        />
                    </div>
                </div>
            </div>

            <InvestmentPlanSection />
        </React.Fragment>
    );
}

// get serverside props (this returns the api key)
export const getServerSideProps = async ({ req }) => {
    let user = false;
    const cookie = req.cookies['access_token'];
    if (cookie !== undefined) {
        user = true;
    }

    return {
        props: {
            cookie: user,
        }
    }
}

Deposit.Layout = MainLayout;

export default Deposit;