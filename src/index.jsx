import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "typeface-bebas-neue";
import App from "./App";
import Layout from "./components/Layout";
import About from "./components/About";
import Help from "./components/Help";
import Contribute from "./components/Contribute";
import GlobalStyles from "./styles/GlobalStyles";
import UpdatePassword from "./components/UpdatePassword";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/help" element={<Help />} />
          <Route path="/contribute" element={<Contribute />} />
          <Route path="/update-password/:token" element={<UpdatePassword />} />
        </Routes>
      </Layout>
    </Router>
  </React.StrictMode>
);
