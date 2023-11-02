import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { ImagetoBase64 } from '../Utils/ImagetoBase64';
import bgImage from '../assets/dashboard_bg.png';
import Navbar from '../components/Navbar';
import Edit from '../assets/edit.png';
import Matic from '../assets/polygon.png';
import Ethereum from '../assets/polygon.png';
import Blazpay from '../assets/logo_blazpay.png';
import loginSignupImage from '../assets/login-animation.gif';
import { ethers } from 'ethers';
import { useDispatch } from 'react-redux';
import { AiFillEdit } from 'react-icons/ai';
import { setWallet } from '../redux/WalletAddressReducer';
import { color } from 'd3';

const UserProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const id = localStorage.getItem('id');
  const token = localStorage.getItem('token');
  const username = localStorage.getItem('username');

  const [loading, setLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedChain, setSelectedChain] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('Name Surname');
  const [profileData, setProfileData] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [walletAddress, setWalletAddress] = useState([]);
  const [metawalletAddress, setMetaWalletAddress] = useState(null);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [edit, setEdit] = useState(true);
  const [editedWallets, setEditedWallets] = useState({});
  const [bio, setBio] = useState('');

  const [data, setData] = useState({
    img_url: '',
  });

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const addNewChain = async () => {
    const payload = {
      chainName: selectedChain,
      walletAddress: '', // Ideally, you should have an input for the user to enter this.
      tokens: 0,
      isPrimary: false,
    };
    console.log('payloadddddd', payload);

    try {
      const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      };
      const response = await axios.post(
        'http://localhost:3000/api/wallet/add-chain',
        payload,
        { headers }
      );
      if (response.status === 200) {
        toast.success('Chain added successfully!');
        WalletChains(); // Refetch the user's chains.
        setShowDropdown(false); // Hide the dropdown.
      } else {
        toast.error('Failed to add the chain.');
      }
    } catch (error) {
      toast.error('Error adding the chain.');
    }
  };

  const ProfileUpdate = useMemo(() => {
    return async () => {
      try {
        setLoading(true);
        const datas = await axios.get(
          `http://localhost:3000/api/user/profile/${id}`
        );
        if (datas.status === 200) {
          setProfileData(datas.data);
        } else {
          console.log('Something went wrong');
        }
      } catch (err) {
        toast.warning('Session Expired');
        navigate('/user/login');
      } finally {
        setLoading(false);
      }
    };
  }, [id, navigate]);

  useEffect(() => {
    ProfileUpdate();
  }, [ProfileUpdate, id]);

  const renderEditButton = () => {
    return isEditing ? (
      <button className='w-4 h-4 cursor-pointer' onClick={handleEditClick}>
        Done
      </button>
    ) : (
      <img
        className='w-4 h-4 cursor-pointer'
        src={Edit}
        alt=''
        onClick={handleEditClick}
      />
    );
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUploadProfileImage = async (e) => {
    const data = await ImagetoBase64(e.target.files[0]);

    setData((preve) => {
      return {
        ...preve,
        img_url: data,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');

      const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      };

      const response = await axios.put(
        'http://localhost:3000/api/user/profile',
        data,
        {
          headers: headers,
        }
      );

      if (response.status === 200) {
        // Profile update was successful

        toast.success('Image uploaded successfully!');
        navigate('/user/profile');
      } else {
        // Handle other response statuses or errors here

        toast.error('Session Expired');
        navigate();
      }
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };

  const handleBioChange = (e) => {
    setBio(e.target.value);
  };

  const handleWalletChange = (chainName, value) => {
    setEditedWallets((prev) => ({
      ...prev,
      [chainName]: value,
    }));
  };

  const handleBioSubmit = async (e) => {
    e.preventDefault();

    try {
      const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      };

      let hasWalletAddressUpdated = false;
      walletAddress?.chains?.forEach((res, idx) => {
        if (
          editedWallets[res.chainName] &&
          res.walletAddress !== editedWallets[res.chainName]
        ) {
          hasWalletAddressUpdated = true;
          // Note: Assuming only one wallet address can be updated at once
          const updatePayload = {
            chainName: res.chainName,
            walletAddress: editedWallets[res.chainName],
            // Add any other necessary fields here (e.g., isPrimary or tokens) if they're being updated
          };

          // If the wallet address has been updated, make an API call to update it
          axios
            .put(
              'http://localhost:3000/api/wallet/update-chain',
              updatePayload,
              { headers: headers }
            )
            .then((updateResponse) => {
              console.log('UPDATED RESPONSE', updateResponse);

              if (updateResponse.status !== 200) {
                // Handle the failure of updating the wallet address
                toast.error('Failed to update the wallet address.');
                return;
              }
            })
            .catch((error) => {
              console.error('Error updating wallet:', error);
            });
        }
      });

      const response = await axios.put(
        'http://localhost:3000/api/user/profile',
        { bio },
        { headers: headers }
      );

      if (response.status === 200) {
        toast.success('Successfully Updated Bio');
      } else {
        toast.error('Bio update failed.');
      }
    } catch (err) {
      console.log(err);
      toast.error(
        'An error occurred while updating the bio or wallet address.'
      );
    }
  };

  const WalletChains = useCallback(async () => {
    try {
      setLoading(true);
      const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      };
      const ChainData = await axios.get('http://localhost:3000/api/wallet', {
        headers: headers,
      });
      if (ChainData.status === 200) {
        setLoading(false);
        setWalletAddress(ChainData.data);
      } else {
        setLoading(false);
        console.log('Error in getting the chain data in profile page');
      }
    } catch (err) {
      setLoading(false);
      console.log('Session Expired get wallet address in profile Page');
    }
  }, [token]);

  useEffect(() => {
    ProfileUpdate();
    WalletChains();
  }, [ProfileUpdate, WalletChains, id]);

  const HandleEdit = () => {
    setEdit(!edit);
  };

  const changebio = () => {
    setEdit(false);
  };

  function bioSubmit() {
    return (
      <form onSubmit={handleBioSubmit}>
        <textarea
          rows='5'
          cols=''
          name='message'
          placeholder='Add Bio....'
          className='w-full p-4 text-gray-700 rounded-lg'
          value={bio}
          onChange={handleBioChange}
        ></textarea>
        <button
          type='submit'
          className='flex w-32 items-center justify-center  h-10 p-2 bg-gradient-to-r from-[#FF3503] to-yellow-500 rounded-lg text-white py-2 px-4 '
        >
          Save Bio
        </button>
      </form>
    );
  }

  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        height: '100vh',
      }}
    >
      <Navbar />

      {!loading ? (
        <div className='w-full  h-[80vh]'>
          <div className='flex flex-row items-center justify-around w-4/5 h-full p-5 m-auto bg-gray-600 backdrop-blur-md opacity-90'>
            <div className='flex flex-col items-center justify-center w-full gap-5'>
              <div className='flex flex-col items-center justify-center w-full gap-3'>
                <h1 className='w-full' style={{ fontSize: '1.5rem' }}>
                  Profile
                </h1>

                <form
                  className='flex flex-col items-center justify-center w-full gap-5'
                  onSubmit={handleSubmit}
                >
                  <div className='flex flex-row items-center justify-center w-full '>
                    <div className='relative flex flex-row items-center justify-center w-full gap-5 overflow-hidden '>
                      <div className=''>
                        <img
                          src={
                            profileData?.img_url
                              ? profileData?.img_url
                              : loginSignupImage
                          }
                          className='w-20 h-20 rounded-full'
                        />

                        <label htmlFor='profileImage'>
                          <div className='absolute bottom-0 w-20 text-center bg-opacity-50 rounded-lg cursor-pointer h-1/3 bg-slate-200'>
                            <p className='p-1 text-sm font-bold text-black'>
                              Edit
                            </p>
                          </div>
                          <input
                            type={'file'}
                            id='profileImage'
                            accept='image/*'
                            className='hidden'
                            onChange={handleUploadProfileImage}
                          />
                        </label>
                      </div>

                      <h1 style={{ fontSize: '1.5rem' }} className='mr-auto'>
                        {username}
                      </h1>
                    </div>
                  </div>

                  <div className='w-20 mr-auto bg-opacity-50 cursor-pointer rounded-xl bg-slate-200'>
                    <button
                      className='w-full font-bold text-black '
                      type='submit'
                    >
                      Upload
                    </button>
                  </div>
                </form>
              </div>

              <div className='flex flex-col w-full gap-5'>
                <h1 style={{ fontSize: '1.5rem' }}>Bio</h1>

                {profileData?.bio ? (
                  <div className='flex flex-col items-start justify-start gap-3 '>
                    <div className='flex items-center w-full text-white rounded-lg'>
                      {profileData?.bio}
                    </div>
                    <div className=''>
                      {edit ? (
                        <button
                          onClick={changebio}
                          className='flex w-12 items-center justify-center  p-2 bg-gradient-to-r from-[#FF3503] to-yellow-500 rounded-lg m-auto'
                        >
                          Edit
                        </button>
                      ) : (
                        bioSubmit()
                      )}
                    </div>
                  </div>
                ) : (
                  bioSubmit()
                )}
              </div>
            </div>

            <div className='flex flex-col items-center w-full h-full gap-4'>
              <h1
                className='w-full text-center '
                style={{ fontSize: '1.5rem' }}
              >
                Your Addresses
              </h1>
              {walletAddress?.chains?.length > 0 ? (
                walletAddress?.chains?.map((res, idx) => (
                  <div
                    className='flex flex-row items-center justify-between w-full py-2 bg-white rounded-lg '
                    style={{ width: '25rem' }}
                  >
                    <div className='flex flex-row items-center gap-2'>
                      <img
                        src={Matic}
                        alt={res.chainName}
                        width='24'
                        height='24'
                      />
                      <span>{res.chainName}</span>
                    </div>

                    <div className='w-full text-center text-black'>
                      {isEditing ? (
                        <input
                          className='border rounded p-1'
                          value={
                            editedWallets[res.chainName] || res.walletAddress
                          }
                          onChange={(e) =>
                            handleWalletChange(res.chainName, e.target.value)
                          }
                          disabled={!isEditing} // Conditionally disable/enable based on isEditing state
                        />
                      ) : (
                        res.walletAddress
                      )}
                    </div>

                    {/* Edit button */}
                    <button
                      style={{ color: 'pink' }}
                      onClick={() => handleEditClick(res.chainName)}
                    >
                      Edit
                    </button>
                  </div>
                ))
              ) : (
                <div>
                  <h1>No Addresses</h1>
                  {showDropdown ? (
                    <div>
                      <select
                        value={selectedChain}
                        onChange={(e) => setSelectedChain(e.target.value)}
                        style={{ color: 'black' }}
                      >
                        <option value='ethereum' style={{ color: 'black' }}>
                          Ethereum
                        </option>
                        <option value='matic' style={{ color: 'black' }}>
                          Matic
                        </option>
                        <option value='blazpay' style={{ color: 'black' }}>
                          Blazpay
                        </option>
                        <option value='binance' style={{ color: 'black' }}>
                          Binance
                        </option>
                      </select>
                      <button onClick={addNewChain}>Add Chain</button>
                    </div>
                  ) : (
                    <button onClick={() => setShowDropdown(true)}>
                      Add Address
                    </button>
                  )}
                </div>
              )}

              <div></div>
            </div>
          </div>
        </div>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
};

export default UserProfile;
