import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink as Link } from "react-router-dom";

const EmailVerify = () => {
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('userId');
    const token = urlParams.get('token');

    if (!token) {
      console.log("No token");
    } else {
      verifyToken(token, userId);
    }
  }, []);

  const verifyToken = async (token, userId) => {
    try {
      const response = await axios.put("https://tomtomed.vercel.app/verify-email", { userId: userId, token: token });
      
      if (response.status === 200 || response.status === 401 || response.status === 500) {
        setLoading(false);
        setMessage(response.data.message);
      }

    } catch (error) {
      console.log("error");
      setLoading(false);
      setMessage("An error occurred while verifying email.");
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      {/* {loading ? (
        <p className='text-white font-bold text-[40px]'>Loading...</p>
      ) : (
        <>
          <p className='text-white font-bold text-[40px]'>{message}</p>
          {message.includes('success') && (
            <div className='mt-4'>
              <Link to='/login' className='text-black px-4 py-2 text-xl bg-white rounded-md inline-block'>
                Login
              </Link>
            </div>
          )}
        </>
      )} */}
       <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <svg
          className="mx-auto h-12 w-auto text-green-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
          Email Verified Successfully!
        </h2>
        <p className="mt-2 text-center text-sm text-white">
          You can now access all features of our platform.
        </p>
        <div className="mt-6">
          <a
            href="/login"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            login
          </a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default EmailVerify;