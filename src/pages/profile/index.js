import React, { useEffect } from 'react';
import { MainLayout } from "../../components/";
import { AccountImage } from '../../assets/images';
import Image from 'next/image';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { setUser, setCookie, removeCookie } from "../../lib/provider";
import { useRouter } from 'next/router';


const Profile = (props) => {
    const user = useSelector((user) => user.user.user);
    const [showReffer, setShowReffer] = React.useState(false);
    const dispatch = useDispatch();
    const router = useRouter();


    const { cookie } = props;

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

    // handle log out
    const handleSignOut = async () => {
        await axios({
            url: process.env.NEXT_PUBLIC_LOGOUT,
            method: "GET",
            withCredentials: true,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
        }).then(() => {
            dispatch(setUser(null));
            dispatch(removeCookie(false));
            router.reload(window.location.pathname);
        }).catch(error => console.log(error));
    }

    const onReffer = () => {
        setShowReffer(!showReffer);
    }

    return (
        <React.Fragment>
            {
                showReffer &&
                <div className="absolute top-0 left-0 right-0 z-50 h-screen w-screen flex flex-col justify-center items-center bg-white bg-opacity-80" role="alert">
                    <div className="flex flex-col justify-center items-center bg-white px-8 py-4 shadow-lg rounded-md">
                        <h1 className='text-blue-400 font-extrabold uppercase text-lg md:text-xl lg:text-2xl'>
                            Share your referral Code with friends
                        </h1>
                        <div className="my-4 w-10 h-[1px] bg-blue-400"></div>
                        <p className='text-gray-700 text-lg md:text-xl lg:text-4xl'>
                            {user?.refferalCode ?? "No refferal code"}
                        </p>
                        <button onClick={() => { setShowReffer(false) }} className='bg-blue-400 py-2 px-4 mt-4 text-white font-bold rounded-lg shadow-md'>
                            Close
                        </button>
                    </div>
                </div>
            }
            <section className="container mx-auto text-center">
                <section className="relative block h-500-px">
                    <div className="absolute top-0 w-full h-full bg-center bg-cover">
                        <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-black"></span>
                    </div>
                    <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px">
                        <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                            <polygon className="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
                        </svg>
                    </div>
                </section>
                <section className="relative py-16 bg-blueGray-200">
                    <div className="container mx-auto px-4">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg">
                            <div className="px-6">
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center rounded-full">
                                        <div className="relative">
                                            <Image src={AccountImage} alt="some content" className="shadow-xl rounded-full h-auto align-middle border-none" />
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                                        <div className="py-6 px-3 space-x-4 mt-32 sm:mt-0">
                                            <button onClick={() => handleSignOut()} className="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150" type="button">
                                                Logout
                                            </button>
                                            <button onClick={() => onReffer()} className="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150" type="button">
                                                Refer a friend
                                            </button>
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-4/12 px-4 lg:order-1">
                                        <div className="flex justify-center py-4 lg:pt-4 pt-8">
                                            <div className="mr-4 p-3 text-center">
                                                <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">{user?.deposits ?? "0"}</span><span className="text-sm text-blueGray-400">Deposits</span>
                                            </div>
                                            <div className="mr-4 p-3 text-center">
                                                <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">{user?.withdrawals ?? "0"}</span><span className="text-sm text-blueGray-400">Withdrawals</span>
                                            </div>
                                            <div className="lg:mr-4 p-3 text-center">
                                                <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">{user?.refferals ?? "0"}</span><span className="text-sm text-blueGray-400">Refferals</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-between items-center py-4 px-8">
                                    <div className='text-gray-700 font-bold flex flex-col justify-between items-center'>
                                        <div className="flex justify-center items-center">
                                            <h1 className='text-gray-700 font-bold mr-4'>UserName: </h1>
                                            <h1 className='text-gray-700 font-extrabold'>{user?.username ?? "Unkown"}</h1>
                                        </div>
                                        <div className="flex justify-center items-center">
                                            <h1 className='text-gray-700 font-bold mr-4'>Balance: </h1>
                                            <h1 className='text-gray-700 font-extrabold'>{`GH₵ ${user?.balance ?? "0"}` ?? "0"}</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                                    <div className="flex flex-wrap justify-center">
                                        <div className="w-full lg:w-9/12 px-4">
                                            <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                                                You can maximize your income by referring friends with your refferal link or code, you will get 10% bonus for every deposit made by your refferal.
                                            </p>
                                            <button onClick={() => onReffer()} className="font-normal text-pink-500">
                                                Reffer
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </React.Fragment>
    )
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

Profile.Layout = MainLayout;

export default Profile;
