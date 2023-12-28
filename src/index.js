import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HashRouter } from "react-router-dom";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./store/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import { RegionProvider } from "./store/RegionContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <AuthProvider>
        <RegionProvider>
          <ToastContainer
            position={toast.POSITION.BOTTOM_LEFT}
            autoClose={1500}
          />
          <App />
        </RegionProvider>
      </AuthProvider>
    </HashRouter>
  </React.StrictMode>
);
