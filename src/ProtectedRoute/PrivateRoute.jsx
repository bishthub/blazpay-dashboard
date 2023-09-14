// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";

// import axios from "axios";
// import { setUser } from "../redux/AuthSlice";

// import { Navigate } from "react-router-dom";

// const PrivateRoute = ({ children }) => {
//   const { user } = useSelector((state) => state.auth);

//   const dispatch = useDispatch();
//   const getUser = async () => {
//     try {

//       const { data } = await axios.post(
//         "/api/v1/user/getUser",
//         { token: localStorage.getItem("token") },
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         }
//       );
//       dispatch(hideLoading());
//       if (data.success) {
//         dispatch(setUser(data.data));
//       } else {
//         localStorage.clear();
//         <Navigate to="/login" />;
//       }
//     } catch (error) {
//       localStorage.clear();
//       dispatch(hideLoading());
//       console.log(error);
//     }
//   };
//   useEffect(() => {
//     if (!user) {
//       getUser();
//     }
//   });

//   if (localStorage.getItem("token")) {
//     return children;
//   } else {
//     return <Navigate to="/login" />;
//   }
// };

// export default PrivateRoute;

import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  // Get the isAuthenticated state from Redux store
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  // Check if the user is authenticated
  if (isAuthenticated) {
    return children; // Render the children (protected content)
  } else {
    return <Navigate to="/login" />; // Redirect to the login page
  }
};

export default PrivateRoute;
