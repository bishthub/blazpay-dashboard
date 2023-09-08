import React, { useState } from "react";
import bgImage from "../../assets/dashboard_bg.png";
import logo from "../../assets/logo_blazpay.svg";
import { Link, useNavigate } from "react-router-dom";
import { loginRedux } from "../../redux/userSlice";
import { useDispatch } from "react-redux";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email && password) {
      try {
        const response = await fetch("http://localhost:3000/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username: email, password }),
        });

        if (response.ok) {
          const token = await response.text();
          console.log("Received token:", token); // Add this line to see the received token

          // dispatch(loginRedux(token));

          navigate("/");
        } else {
          console.error("Login failed");
        }
      } catch (error) {
        console.error("Error during login:", error);
      }
    } else {
      alert("Please enter both email and password");
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "black",
      }}
      className="flex items-center justify-center h-screen bg-gray-100"
    >
      <form
        onSubmit={handleSubmit}
        style={{ border: "1px solid #FF5500", backgroundColor: "#D9D9D933" }}
        className="md:w-1/3 w-5/6 min-w-[350px] p-4 md:p-5 rounded-lg shadow-md"
      >
        <div className="rounded-lg" style={{ backgroundColor: "#171717" }}>
          <div className="flex justify-center p-4 bg-black rounded-tl-lg rounded-tr-lg">
            <img src={logo} className="w-40 h-10 rounded-lg" alt="Logo" />
          </div>
          <div className="p-4">
            <div className="flex flex-col items-center justify-center mb-4 text-2xl">
              <span className="text-[#FF3503]">Login</span>
            </div>

            <div className="flex flex-col items-center justify-center mb-4">
              <input
                type="text"
                id="email"
                className="w-[85%] md:w-[70%] px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-sm text-left text-black"
                placeholder="Enter Email or Mobile or Username"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>

            <div className="flex flex-col items-center justify-center mb-6">
              <input
                type="password"
                id="password"
                className="w-[85%] md:w-[70%] px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-sm text-left text-black"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>

            <div className="flex flex-col items-center">
              <button
                type="submit"
                className="w-[45%] md:w-[30%] py-1 px-3 rounded-2xl hover:bg-gradient"
                style={{
                  background:
                    "linear-gradient(90deg, #FF3503 0%, #FF6E01 53.15%, #FFA100 100%)",
                  color: "white",
                }}
              >
                Login
              </button>
            </div>

            <div className="flex flex-col items-center mt-2">
              <Link
                to="/user/register"
                className="text-xs text-white md:text-sm hover:underline"
              >
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
