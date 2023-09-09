import React, { useEffect } from "react";
import { Route } from "react-router-dom";
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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import Send from "./pages/Send";
import ManageFunds from "./pages/ManageFunds";
import Token from "./pages/Token";

// const BaseRoute = () => (
function BaseRoute() {
  return (
    <>
      <ToastContainer />
      {/* <AuthProvider> */}
      <Routes>
        <Route exact path="/user/login" element={<LoginForm />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/t" element={<Token />} />
        <Route path="/storefront" element={<StoreFront />} />
        <Route path="/leaderboard" element={<LeaderBoard />} />
        <Route path="/spin" element={<Spinner />} />
        <Route path="/manage-funds" element={<ManageFunds />} />
        <Route path="/manage-funds/swap" element={<Swap />} />
        <Route path="/manage-funds/request" element={<Request />} />
        <Route path="/manage-funds/receive" element={<Receive />} />
        <Route path="/manage-funds/send" element={<Send />} />

        <Route exact path="/user/register" element={<RegisterForm />} />
        <Route exact path="/user/login" element={<LoginForm />} />
        <Route exact path="/user/profile" element={<UserProfile />} />
        <Route exact path="/user/my-items" element={<MyItems />} />
        <Route
          exact
          path="/user/transactions"
          element={<RecentTransaction />}
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
