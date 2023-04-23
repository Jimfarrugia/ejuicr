import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "typeface-bebas-neue";
import "react-tooltip/dist/react-tooltip.css";
import PrivateRoute from "./components/PrivateRoute";
import App from "./App";
import Layout from "./components/Layout";
import Recipes from "./components/Recipes";
import Recipe from "./components/Recipe";
import Settings from "./components/Settings";
import MyAccount from "./components/MyAccount";
import About from "./components/About";
import Help from "./components/Help";
import Contribute from "./components/Contribute";
import UpdatePassword from "./components/UpdatePassword";
import NotFound from "./components/NotFound";
import TermsOfService from "./components/TermsOfService";
import PrivacyPolicy from "./components/PrivacyPolicy";
import ScrollToTop from "./components/ScrollToTop";
import GlobalStyles from "./styles/GlobalStyles";
import { light, dark } from "./styles/themes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <ThemeProvider
        theme={localStorage.getItem("theme") === "light" ? light : dark}
      >
        <GlobalStyles />
        <Layout>
          <Routes>
            <Route exact path="/" element={<App />} />
            <Route path="/about" element={<About />} />
            <Route path="/help" element={<Help />} />
            <Route path="/contribute" element={<Contribute />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route
              path="/update-password/:token"
              element={<UpdatePassword />}
            />
            <Route
              path="/recipes"
              element={
                <PrivateRoute>
                  <Recipes />
                </PrivateRoute>
              }
            />
            <Route
              path="/recipes/:id"
              element={
                <PrivateRoute>
                  <Recipe />
                </PrivateRoute>
              }
            />
            <Route
              path="/settings"
              element={
                <PrivateRoute>
                  <Settings />
                </PrivateRoute>
              }
            />
            <Route
              path="/myaccount"
              element={
                <PrivateRoute>
                  <MyAccount />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);
