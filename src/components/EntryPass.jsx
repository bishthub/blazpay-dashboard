import React, { useState } from 'react';
import bgImage from '../assets/dashboard_bg.png';
import logo from '../assets/logo_blazpay.svg';

const EntryPass = () => {
    const [selectedChain, setSelectedChain] = useState('');
    const [selectedVersion, setSelectedVersion] = useState('');

    const handleChainChange = (event) => {
        setSelectedChain(event.target.value);
    };

    const handleVersionChange = (event) => {
        setSelectedVersion(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Selected Chain:', selectedChain);
        console.log('Selected Version:', selectedVersion);
        // Logic not implemented
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
                className="flex md:flex-row flex-col md:w-1/2 w-5/6 min-w-[350px] p-4 md:p-5 rounded-lg shadow-md"
            >
                <div className="md:w-2/3 w-full rounded-lg h-[460px]" style={{ backgroundColor: '#171717' }}>
                    <div className="flex justify-center h-[90px] bg-black rounded-tl-lg rounded-tr-lg p-4">
                        <div className="text-white font-semibold text-3xl">GET YOUR ENTRY PASS</div>
                    </div>
                    <div className="flex flex-col justify-center items-center p-4 h-[350px]">

                        <div className="w-full md:w-[80%] mb-4">
                            <label htmlFor="chain" className="mb-1 text-sm text-white">
                                Select chain
                            </label>
                            <select
                                id="chain"
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-sm"
                                value={selectedChain}
                                onChange={handleChainChange}
                                required
                            >
                                <option value="ethereum">Polygon</option>
                                <option value="binance">Binance Smart Chain</option>
                            </select>
                        </div>

                        <div className="w-full md:w-[80%] mb-4">
                            <label htmlFor="version" className="mb-1 text-sm text-white">
                                Version
                            </label>
                            <select
                                id="version"
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-sm"
                                value={selectedVersion}
                                onChange={handleVersionChange}
                                required
                            >
                                <option value="v1">BlazPay Testnet</option>
                                <option value="v2">Version 2</option>
                                {/* Add more options as needed */}
                            </select>
                        </div>
                        <div>
                            <div className='flex flex-row justify-center text-white text-2xl'>
                                PRICE : 0.01 WETH
                            </div>
                        </div>
                    </div>
                </div>

                <div className="ml-5 md:w-1/3 w-full rounded-lg" style={{ backgroundColor: '#FF2D00' }}>

                    <div className="flex flex-col justify-center p-2">
                        <div style={{ backgroundColor: '#D9D9D9' }} className='rounded-lg h-[240px]'>
                            {/* empty */}
                        </div>
                        <div className='flex flex-col justify-center items-center p-1 mt-6'>
                            <div className='text-black font-bold mb-2'>ENTRY PASS Chain Name</div>

                            <div className='text-xs text-white'>
                                Lorem Ipsum has been the industry's standard dummy
                                text ever since the 1500s, when an unknown printer took a.
                            </div>
                            <div className='mt-6 text-2xl font-bold text-white'>
                                CLAIM NOW
                            </div>
                        </div>
                    </div>
                </div>

            </form>
        </div>
    );
};

export default EntryPass;
