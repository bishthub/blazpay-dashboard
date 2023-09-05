import React, { useState } from 'react';
import bgImage from '../../../assets/dashboard_bg.png';
import logo from '../../../assets/logo_blazpay.svg';
import { useNavigate } from 'react-router-dom';

const Password = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatchError, setPasswordMatchError] = useState(false);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordMatchError(false);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    setPasswordMatchError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setPasswordMatchError(true);
      return;
    }

    console.log('Form submitted with password:', password);
    navigate('/user/username');
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
        onSubmit={handleSubmit}
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
              <span className="text-[#FF3503]">Confirm Password</span>
            </div>

            <div className="flex flex-col justify-center items-center mb-4">
              <input
                type="password"
                id="password"
                className="w-[85%] md:w-[70%] px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-sm text-left"
                placeholder="Enter Password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>

            <div className="flex flex-col justify-center items-center mb-6">
              <input
                type="password"
                id="confirmPassword"
                className={`w-[85%] md:w-[70%] px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-sm text-left ${
                  passwordMatchError ? 'border-red-500' : ''
                }`}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                required
              />
              {passwordMatchError && (
                <p className="text-red-500 text-xs mt-1">
                  Passwords do not match
                </p>
              )}
            </div>

            <div className='flex flex-col items-center'>
              <button
                type="submit"
                className="min-w-[50%] md:w-[45%] py-1 px-3 rounded-2xl hover:bg-gradient"
                style={{
                  background: 'linear-gradient(90deg, #FF3503 0%, #FF6E01 53.15%, #FFA100 100%)',
                  color: 'white',
                }}
              >
                Confirm Password
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Password;
