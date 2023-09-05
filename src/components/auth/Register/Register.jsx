import React, { useState } from 'react';
import bgImage from '../../../assets/dashboard_bg.png';
import logo from '../../../assets/logo_blazpay.svg';
import { useNavigate } from 'react-router-dom'; 

const RegisterForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [mobile_num, set_mobile_num] = useState('');
  const [otpSent_m, setOtpSent_m] = useState(false);
  const [otpSent_e, setOtpSent_e] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMobileNumChange = (event) => {
    set_mobile_num(event.target.value);
  };
  const handleGetOtp_m = () => {
    setOtpSent_m(true);
  };

  const handleGetOtp_e = () => {
    setOtpSent_e(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted with', 'email:', email, 'and mobile_num:', mobile_num);
    // next steps ...
    navigate('/user/password');
  };

  return (
    <div style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="w-5/6 min-w-[350px] md:w-1/3 p-4 md:p-5 md:min-w-[500px] rounded-lg shadow-md" style={{ border: '1px solid #FF5500', backgroundColor: '#D9D9D933' }}>

        <div className='rounded-lg' style={{ backgroundColor: '#171717' }}>
          <div className="flex justify-center bg-black rounded-tl-lg rounded-tr-lg p-4">
            <img src={logo} className="rounded-lg w-40 h-10" alt="Logo" />
          </div>
          <div className='p-5'>

            <div className="flex flex-col justify-center items-center text-2xl mb-4">
              <span className="text-[#FF3503]">Create New Account</span>
            </div>

            <div className="flex flex-col justify-center items-center mb-4 relative">
              <div className="relative flex w-full md:w-[64%]">
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-sm text-left"
                  placeholder="Enter Email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
                <button
                  className="absolute right-0 top-0 bottom-0 text-white py-1 px-2 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring focus:ring-orange-300 text-sm"
                  style={{ backgroundColor: '#A19E9E' }}
                  onClick={handleGetOtp_e}
                >
                  Get OTP
                </button>
              </div>
            </div>


            <div className="flex flex-col justify-center items-center mb-6 relative">
              <div className="relative flex w-full md:w-[64%]">
                <input
                  type="text"
                  id="mobile"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-sm text-left"
                  placeholder="Enter Mobile"
                  value={mobile_num}
                  onChange={handleMobileNumChange}
                  required
                />
                <button
                  className="absolute right-0 top-0 bottom-0 text-white py-1 px-2 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring focus:ring-orange-300 text-sm"
                  style={{ backgroundColor: '#A19E9E' }}
                  onClick={handleGetOtp_m}
                >
                  Get OTP
                </button>
              </div>
            </div>

            <div className='flex flex-col items-center'>
              <button
                type="submit"
                className="w-[50%] md:w-[25%] py-1 px-3 rounded-2xl hover:bg-gradient"
                style={{
                  background: 'linear-gradient(90deg, #FF3503 0%, #FF6E01 53.15%, #FFA100 100%)',
                  color: 'white',
                }}
              >
                Verify
              </button>
            </div>

          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
