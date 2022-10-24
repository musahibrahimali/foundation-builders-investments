import React from 'react';
import { MainLayout, InvestmentPlanSection, DepositModal } from "../../components";
import { useSession } from "next-auth/react";
import { usePaystackPayment } from 'react-paystack';
import { useRouter } from "next/router";

const depositMoney = async (amount) => {
    const values = {
        email: session?.user?.email,
        amount: amount,
    }
    const options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(values),
    }
    return await fetch('http://localhost:3000/api/auth/deposit', options)
        .then(res => res.json())
        .then((data) => {
            // console.log("some data returned ", data.data)
            if (data) {
                return true;
            }
            return false;
        })
}


const PaystackHook = (props) => {
    const {
        email,
        currency,
        amount,
    } = props;

    const router = useRouter();

    const config = {
        reference: (new Date()).getTime().toString(),
        email: email,
        amount: amount * 100,
        currency: currency,
        publicKey: process.env.NEXT_PUBLIC_PAYSTACT_PUBLIC_KEY,
    };

    const onSuccess = (reference) => {
        console.log(reference);
        const response = depositMoney(amount);
        if (response) {
            router.push('/');
        }
    };

    const onClose = () => {
        console.log('closed')
    }

    const initializePayment = usePaystackPayment(config);
    return (
        <div>
            <button className='text-white bg-blue-500 px-8 py-2 rounded-md hover:border-gray-100 hover:text-gray-600 hover:bg-transparent focus:border-none font-bold uppercase border border-transparent' onClick={() => {
                initializePayment(onSuccess, onClose)
            }}>
                Deposit
            </button>
        </div>
    );
};

const Deposit = () => {

    const { data: session } = useSession();
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
                            {session?.user?.email}
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
                            email={session?.user?.email}
                            currency="GHS"
                            amount={amount}
                        />
                    </div>
                </div>
            </div>

            <InvestmentPlanSection />
        </React.Fragment>
    );
}

Deposit.Layout = MainLayout;

export default Deposit;