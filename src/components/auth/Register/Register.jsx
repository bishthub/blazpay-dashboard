import React, { useState } from "react";
import bgImage from "../../../assets/dashboard_bg.png";
import logo from "../../../assets/logo_blazpay.svg";
import { Link, useNavigate } from "react-router-dom";
import { loginRedux } from "../../../redux/userSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const [username, setUsername] = useState("");
  const [mobile, setMobile] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleRePasswordChange = (event) => {
    setRePassword(event.target.value);
  };
  const handleUserNameChange = (e) => {
    setUsername(e.target.value);
  };
  const handleMobileChange = (e) => {
    setMobile(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email && password && repassword && username) {
      if (password !== repassword) {
        alert("Passwords do not match.");
        return;
      }
      const usernameWithDomain = username + "@blazpay";

      try {
        const response = await fetch("http://localhost:3000/api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            // username: usernameWithDomain,
            username,
            email,
            password,
            mobileNumber: mobile,
          }),
        });

        if (response.ok) {
          toast.success("Registered Successfully");

          navigate("/user/login"); // Redirect to login page after successful registration
        } else {
          // Handle registration failure (e.g., duplicate username or email)
          console.error("Registration failed");
        }
      } catch (error) {
        console.error("Error during registration:", error);
      }
    } else {
      alert("Please fill in all required fields.");
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
              <span className="text-[#FF3503]">Register</span>
            </div>

            <div className="flex flex-col items-center justify-center w-full h-10 p-2 mb-4 bg-white rounded-lg">
              <input
                type="text"
                id="email"
                className="w-full text-sm text-left text-black placeholder-gray-700 border border-none rounded-lg focus:outline-none"
                placeholder="Enter Email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>

            <div className="flex flex-col items-center justify-center w-full h-10 p-2 mb-4 bg-white rounded-lg">
              <input
                type="text"
                id="mobile"
                className="w-full text-sm text-left text-black placeholder-gray-700 border border-none rounded-lg focus:outline-none"
                placeholder="Enter Mobile Number"
                value={mobile}
                onChange={handleMobileChange}
                required
              />
            </div>

            <div className="flex flex-col items-center justify-center w-full h-10 p-2 mb-4 bg-white rounded-lg">
              <input
                type="password"
                id="password"
                className="w-full text-sm text-left text-black placeholder-gray-700 border border-none rounded-lg focus:outline-none"
                placeholder="Enter Password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>

            <div className="flex flex-col items-center justify-center w-full h-10 p-2 mb-4 bg-white rounded-lg">
              <input
                type="password"
                id="password"
                className="w-full text-sm text-left text-black placeholder-gray-700 border border-none rounded-lg focus:outline-none"
                placeholder="Re-Enter Password"
                value={repassword}
                onChange={handleRePasswordChange}
                required
              />
            </div>
            <div className="flex flex-row items-center justify-center w-full h-10 gap-2 p-2 mb-4 bg-white rounded-lg">
              <input
                type="text"
                id="text"
                className="w-2/3 md:w-[70%] focus:outline-none  text-sm text-left text-black border-r-2 border-black placeholder-gray-700"
                placeholder="Enter Username"
                value={username}
                onChange={handleUserNameChange}
                required
              />
              <h1 className="w-1/3 font-extrabold text-black ">@Blazpay</h1>
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
                Register
              </button>
            </div>

            <div className="flex flex-col items-center mt-2">
              <Link
                to="/user/login"
                className="text-xs text-white md:text-sm hover:underline"
              >
                Already Registered?
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
