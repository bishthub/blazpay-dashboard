import React, { useState } from 'react';
import bgImage from '../../assets/dashboard_bg.png';
import logo from '../../assets/logo_blazpay.svg';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted with email:', email, 'and password:', password);
    // logic not implemented
  };

  return (
    <div style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} style={{ border: '1px solid #FF5500', backgroundColor: '#D9D9D933' }} className="md:w-1/3 w-5/6 min-w-[350px] p-4 md:p-5 rounded-lg shadow-md">

        <div className='rounded-lg' style={{ backgroundColor: '#171717' }}>
          <div className="flex justify-center bg-black rounded-tl-lg rounded-tr-lg p-4">
            <img src={logo} className="rounded-lg w-40 h-10" alt="Logo" />
          </div>
          <div className='p-4'>

            <div className="flex flex-col justify-center items-center text-2xl mb-4">
              <span className="text-[#FF3503]">Login</span>
            </div>

            <div className="flex flex-col justify-center items-center mb-4">
              <input
                type="email"
                id="email"
                className="w-[85%] md:w-[70%] px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-sm text-left"
                placeholder="Enter Email or Mobile or Username"
                value={email}
                onChange={handleEmailChange}
                required
              />

            </div>

            <div className="flex flex-col justify-center items-center mb-6">
              <input
                type="password"
                id="password"
                className="w-[85%] md:w-[70%] px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-sm text-left"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            
            <div className='flex flex-col items-center'>
              <button
                type="submit"
                className="w-[45%] md:w-[30%] py-1 px-3 rounded-2xl hover:bg-gradient"
                style={{
                  background: 'linear-gradient(90deg, #FF3503 0%, #FF6E01 53.15%, #FFA100 100%)',
                  color: 'white',
                }}
              >
                Login
              </button>
            </div>


            <div className='flex flex-col items-center mt-2'>
              <Link to="/user/register" className='text-white text-xs md:text-sm hover:underline'>
                Create New Account
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
