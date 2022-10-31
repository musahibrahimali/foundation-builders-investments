import React from 'react';
import { AuthLayout } from "../components";
import Link from 'next/link'
import styles from '../styles/Form.module.css';
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";
import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const initialValues = {
  email: '',
  password: ''
}

const Login = () => {
  const [show, setShow] = useState(false);
  const [values, setValues] = useState(initialValues);
  const [error, setError] = useState(false);
  const router = useRouter();

  // handle on change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    })
  }


  async function onSubmit(e) {
    e.preventDefault();
    const vals = {
      email: values.email,
      password: values.password,
    }
    const response = await axios({
      url: process.env.NEXT_PUBLIC_LOGIN,
      method: "POST",
      withCredentials: true,
      headers: {
        "Accept": "application/json",
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      data: JSON.stringify(vals)
    });

    if (response.data.access_token) {
      setValues(initialValues);
      router.replace('/');
    } else {
      setError(true);
    }
  }


  return (
    <React.Fragment>
      {
        error &&
        <div className="absolute top-0 left-0 right-0 z-50 h-screen w-screen flex flex-col justify-center items-center bg-white bg-opacity-80" role="alert">
          <div className="flex flex-col justify-center items-center bg-white px-8 py-4 shadow-lg rounded-md">
            <h1 className='text-red-500 font-extrabold uppercase text-lg md:text-xl lg:text-2xl'>
              Oops!!!
            </h1>
            <div className="my-4 w-10 h-[1px] bg-red-500"></div>
            <p className='text-gray-700 text-lg md:text-xl lg:text-4xl'>
              Something went wrong! <br /> Try again later.
            </p>
            <button onClick={() => { setError(false) }} className='bg-blue-400 py-2 px-4 mt-4 text-white font-bold rounded-lg shadow-md'>
              continue
            </button>
          </div>
        </div>
      }

      <section className='w-full md:w-3/4 mx-auto flex flex-col px-4 md:px-0 gap-10'>
        <div className="title">
          <Link href='/'>
            <a className='text-gray-800 text-lg md:text-4xl font-bold py-4'>
              Foundation Builders Investments
            </a>
          </Link>
          <p className='w-full md:w-3/4 mx-auto text-gray-400'>
            Providing the means to financial freedom
          </p>
        </div>

        {/* form */}
        <form className='flex flex-col gap-2 md:gap-5' onSubmit={(e) => onSubmit(e)}>
          <div className={`${styles.input_group}`}>
            <input
              type="email"
              name='email'
              placeholder='Email'
              className={styles.input_text}
              onChange={(e) => handleChange(e)}
              value={values.email}
            />
            <span className='icon flex items-center px-4'>
              <HiAtSymbol size={25} />
            </span>
          </div>

          <div className={`${styles.input_group}`}>
            <input
              type={`${show ? "text" : "password"}`}
              name='password'
              placeholder='password'
              className={styles.input_text}
              onChange={(e) => handleChange(e)}
              value={values.password}
            />
            <span className='icon flex items-center px-4' onClick={() => setShow(!show)}>
              <HiFingerPrint size={25} />
            </span>

          </div>

          <div className="input-button">
            <button type='submit' className={styles.button}>
              Login
            </button>
          </div>
        </form>

        {/* bottom */}
        <p className='text-center text-gray-400 '>
          don&apos;t have an account yet? <Link href={'/register'}><a className='text-blue-700'>Sign Up</a></Link>
        </p>
      </section>
    </React.Fragment>
  )
}

Login.Layout = AuthLayout;

export default Login;
