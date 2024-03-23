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
      const response = await axios.put("https://tomtomed-3nrb.onrender.com/api/v1/user/verify-email", { userId: userId, token: token });

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
      {loading ? (
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
      )}
    </div>
  );
};

export default EmailVerify;