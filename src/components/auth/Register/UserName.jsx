import React, { useState } from 'react';
import bgImage from '../../../assets/dashboard_bg.png';
import logo from '../../../assets/logo_blazpay.svg';
import { useNavigate } from 'react-router-dom';

const UsernameForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [isUsernameAvailable, setIsUsernameAvailable] = useState(false);

  const handleUsernameChange = (event) => {
    const newUsername = event.target.value;
    setUsername(newUsername);
    checkUsernameAvailability(newUsername);
  };

  const checkUsernameAvailability = (newUsername) => {
    setIsUsernameAvailable(newUsername.length > 0 && newUsername !== 'takenUsername');
  };

  const handleGetUsername = (event) => {
    event.preventDefault();
    console.log('Username:', username);
    // next...
    navigate('/user/wallet');
  };

  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="flex justify-center items-center h-screen bg-gray-100"
    >
      <form
        onSubmit={handleGetUsername}
        style={{
          border: '1px solid #FF5500',
          backgroundColor: '#D9D9D933',
        }}
        className="md:w-1/3 w-5/6 min-w-[350px] p-4 md:p-5 rounded-lg shadow-md"
      >
        <div className="rounded-lg" style={{ backgroundColor: '#171717' }}>
          <div className="flex justify-center bg-black rounded-tl-lg rounded-tr-lg p-4">
            <img
              src={logo}
              className="rounded-lg w-40 h-10"
              alt="Logo"
            />
          </div>
          <div className="p-4">
            <div className="flex flex-col justify-center items-center text-2xl mb-4">
              <span className="text-[#FF3503]">Get Username</span>
            </div>

            <div className="flex flex-col justify-center items-center mb-6 relative">
              <div className="relative flex w-[80%] md:w-[65%]">
                <input
                  type="text"
                  id="username"
                  className={`w-full md:w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-sm text-left ${
                    isUsernameAvailable ? 'border-green-500' : ''
                  }`}
                  maxLength={14}
                  placeholder="Enter Username"
                  value={username}
                  onChange={handleUsernameChange}
                  required
                />
                <span className="absolute right-0 top-1/2 transform -translate-y-1/2 pr-3">
                  @blazpay
                </span>
              </div>
              {isUsernameAvailable && (
                <span className="text-green-500 text-xs mt-1 md:text-sm absolute top-full left-1/2 transform -translate-x-1/2">
                  &#10004; Username Available
                </span>
              )}
              {!isUsernameAvailable && username.length > 0 && (
                <span className="text-red-500 absolute top-full left-1/2 transform -translate-x-1/2">
                  &#10008; Not Available
                </span>
              )}
            </div>

            <div className="flex flex-col items-center">
              <button
                type="submit"
                className="min-w-[50%] md:w-[45%] py-1 px-3 rounded-2xl hover:bg-gradient"
                style={{
                  background:
                    'linear-gradient(90deg, #FF3503 0%, #FF6E01 53.15%, #FFA100 100%)',
                  color: 'white',
                }}
              >
                Get Username
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UsernameForm;
