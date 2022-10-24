import React from 'react';
import { MainLayout } from "../../components/";
import { getSession } from 'next-auth/react';
import { useSession, signOut } from "next-auth/react";
import { AccountImage } from '../../assets/images';
import Image from 'next/image';

const initialState = {
    email: "",
    userName: "",
    deposits: 0,
    withdrawals: 0,
    refferals: 0,
    balance: 0,
}


const Profile = () => {

    const { data: session } = useSession();
    const [state, setState] = React.useState(initialState);

    const onReffer = () => {
        // generate a referral code
        // copy the referral code to clipboard
        // share the referral code
    }

    function handleSignOut() {
        signOut()
    }

    // use memo to fetch profile
    React.useEffect(() => {

        const fetchProfile = async () => {
            const values = {
                email: session.user.email,
            }
            const options = {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values),
            }
            await fetch('http://localhost:3000/api/auth/profile', options)
                .then(res => res.json())
                .then((data) => {
                    // console.log("some data returned ", data.data)
                    if (data) {
                        setState({
                            deposits: data.data.deposits?.length ?? 0,
                            withdrawals: data.data.withdrawals?.length ?? 0,
                            refferals: data.data.refferals?.length ?? 0,
                            email: data.data.email,
                            userName: data.data.username,
                            balance: data.data.balance ?? 0,
                        })
                    }
                })
        }

        fetchProfile();
    }, [session])

    return (
        <React.Fragment>
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
                                            <button onClick={handleSignOut} className="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150" type="button">
                                                Logout
                                            </button>
                                            <button onClick={onReffer} className="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150" type="button">
                                                Refer a friend
                                            </button>
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-4/12 px-4 lg:order-1">
                                        <div className="flex justify-center py-4 lg:pt-4 pt-8">
                                            <div className="mr-4 p-3 text-center">
                                                <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">{state.deposits}</span><span className="text-sm text-blueGray-400">Deposits</span>
                                            </div>
                                            <div className="mr-4 p-3 text-center">
                                                <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">{state.withdrawals}</span><span className="text-sm text-blueGray-400">Withdrawals</span>
                                            </div>
                                            <div className="lg:mr-4 p-3 text-center">
                                                <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">{state.refferals}</span><span className="text-sm text-blueGray-400">Refferals</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-between items-center py-4 px-8">
                                    <div className='text-gray-700 font-bold flex flex-col justify-between items-center'>
                                        UserName: <h1 className='text-gray-700 font-bold'>{state.userName ?? state.email}</h1>
                                        Balance: <h1 className='text-gray-700 font-bold'>{state.balance}</h1>
                                    </div>
                                </div>
                                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                                    <div className="flex flex-wrap justify-center">
                                        <div className="w-full lg:w-9/12 px-4">
                                            <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                                                You can maximize your income by referring friends with your refferal link or code, you will get 10% bonus for every deposit made by your refferal.
                                            </p>
                                            <button onClick={onReffer} className="font-normal text-pink-500">
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

export async function getServerSideProps({ req }) {
    const session = await getSession({ req })

    if (!session) {
        return {
            redirect: {
                destination: "/login",
                premanent: false
            }
        }
    }
    // authorize user return session
    return {
        props: { session }
    }
}

Profile.Layout = MainLayout;

export default Profile;
