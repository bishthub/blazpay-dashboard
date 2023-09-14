import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/index";
import { handleWindowClose } from "./Window/WindowCloseListner";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    {/* <PersistGate loading={null} persistor={persistor}> */}
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
    {/* </PersistGate> */}
  </Provider>
);
