import React, { useEffect, useState } from "react";
import { Route, useNavigate } from "react-router-dom";
import { Routes } from "react-router-dom";
import LoginForm from "./components/auth/Login";
import RegisterForm from "./components/auth/Register/Register";
import Password from "./components/auth/Register/Password";
import UsernameForm from "./components/auth/Register/UserName";
import WalletConnect from "./components/auth/WalletConnect";
import MissingPage from "./components/Error";
import EntryPass from "./components/EntryPass";
import Home from "./pages/Home";
import StoreFront from "./components/StoreFront";
import LeaderBoard from "./components/LeaderBoard";
import Spinner from "./pages/Spinner";
import UserProfile from "./pages/UserProfile";
import MyItems from "./pages/MyItems";
import RecentTransaction from "./pages/RecentTransaction";
import Swap from "./pages/Swap";
import Request from "./pages/Request";
import Receive from "./pages/Receive";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import Send from "./pages/Send";
import ManageFunds from "./pages/ManageFunds";
import Token from "./pages/Token";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import MyEntryPass from "./pages/MyEntryPass";
import GetTokens from "./pages/GetTokens";

import ProfileEdit from "./components/ProfileEdit";
import { logoutRedux } from "./redux/userSlice";
import Notification from "./pages/Notification";

import SlotMachine from "./pages/SlotMachine";
import ConnectWallet from "./components/ConnectWallet";

import SpinMain from "./components/Wheel/SpinMain";
import SpinWin from "./components/Wheel/SpinWin";
import Mynft from "./components/Mynft";

// const BaseRoute = () => (
function BaseRoute() {
  // const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  const navigate = useNavigate();

  const dispatch = useDispatch();

  // Add state to track session expiration

  // useEffect(() => {
  //   const h = Number(localStorage.getItem("tokenExpiration"));

  //   console.log(h);
  //   if (Date.now() >= Number(localStorage.getItem("tokenExpiration"))) {
  //     toast.warning("Session Expired");
  //     dispatch(logoutRedux());

  //     localStorage.removeItem("token");
  //     localStorage.removeItem("username");
  //     localStorage.removeItem("id");
  //     navigate("/user/login");
  //   }
  // }, );

  return (
    <>
      <ToastContainer autoClose={2000} theme="dark" />
      {/* <AuthProvider> */}
      <Routes>
        <Route exact path="/user/login" element={<LoginForm />} />
        <Route
          exact
          path="/"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route element={<Token />} />
        <Route
          path="/storefront"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <StoreFront />
            </ProtectedRoute>
          }
        />
        <Route
          path="/leaderboard"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <LeaderBoard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/spin"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Spinner />
            </ProtectedRoute>
          }
        />
        <Route
          path="/manage-funds"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <ManageFunds />
            </ProtectedRoute>
          }
        />
        <Route
          path="/manage-funds/swap"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Swap />
            </ProtectedRoute>
          }
        />

        <Route
          path="/manage-funds/request"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Request />
            </ProtectedRoute>
          }
        />
        <Route
          path="/manage-funds/receive"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Receive />
            </ProtectedRoute>
          }
        />
        <Route
          path="/manage-funds/send"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Send />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user/get-tokens"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <GetTokens />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user/spin"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              {/* <SpinJackpot /> */}
              <SpinMain />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user/spin/win"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <SpinWin />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user/jackpot"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              {/* <SpinMain /> */}
              <SlotMachine />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user/walletconnect"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              {/* <SpinMain /> */}
              <ConnectWallet />
            </ProtectedRoute>
          }
        />
        {/* <Route
          path="/user/notification"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Notification />
            </ProtectedRoute>
          }
        /> */}
        <Route
          path="/user/profile/edit"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <ProfileEdit />
            </ProtectedRoute>
          }
        />

        <Route exact path="/user/register" element={<RegisterForm />} />

        <Route
          exact
          path="/user/profile"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <UserProfile />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/user/profile/my-items/:id"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Mynft />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/user/my-items"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <MyItems />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/user/transactions"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <RecentTransaction />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/user/mypass"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <MyEntryPass />
            </ProtectedRoute>
          }
        />
        <Route exact path="/user/password" element={<Password />} />
        <Route exact path="/user/username" element={<UsernameForm />} />
        <Route exact path="/user/wallet" element={<WalletConnect />} />
        <Route exact path="/user/entrypass" element={<EntryPass />} />
        <Route path="*" element={<MissingPage />} />
      </Routes>
      {/* </AuthProvider> */}
    </>
  );
}

export default BaseRoute;
