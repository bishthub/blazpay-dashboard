import React, { useState } from 'react';
import bgImage from '../../assets/dashboard_bg.png';
import logo from '../../assets/logo_blazpay.svg';
import { useNavigate, Link } from 'react-router-dom';

const WalletConnect = () => {
  const navigate = useNavigate();
  const [isConnected, setIsConnected] = useState(false);

  const handleConnectWallet = () => {
    setIsConnected(true);
  };

  const handleDisconnectWallet = () => {
    setIsConnected(false);
  };

  const handleGetEntryPass = () => {
    navigate('/user/entrypass');
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
      <div
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
              <span className="text-[#FF3503]">
                {isConnected ? 'Wallet Connected' : 'Connect Your Wallet'}
              </span>
            </div>

            <div className="flex flex-col justify-center items-center mb-6">
              {!isConnected ? (
                <button
                  onClick={handleConnectWallet}
                  className="min-w-[50%] md:w-[45%] py-1 px-3 rounded-2xl hover:bg-gradient"
                  style={{
                    background:
                      'linear-gradient(90deg, #FF3503 0%, #FF6E01 53.15%, #FFA100 100%)',
                    color: 'white',
                  }}
                >
                  Connect Wallet
                </button>
              ) : (
                <button
                  onClick={handleDisconnectWallet}
                  className="min-w-[50%] md:w-[45%] py-1 px-3 rounded-2xl hover:bg-gradient"
                  style={{
                    background:
                      'linear-gradient(90deg, #FF3503 0%, #FF6E01 53.15%, #FFA100 100%)',
                    color: 'white',
                  }}
                >
                  Wallet Connected
                </button>
              )}

              {isConnected && (
                <div>

                  <Link to="/user/entrypass" className="text-white text-xs mt-2">
                    Get Your Entry Pass Here
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletConnect;
