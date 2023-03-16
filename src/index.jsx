import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "typeface-bebas-neue";
import App from "./App";
import Layout from "./components/Layout";
import Recipes from "./components/Recipes";
import Recipe from "./components/Recipe";
import Settings from "./components/Settings";
import About from "./components/About";
import Help from "./components/Help";
import Contribute from "./components/Contribute";
import UpdatePassword from "./components/UpdatePassword";
import GlobalStyles from "./styles/GlobalStyles";
import { light, dark } from "./styles/themes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider
        theme={localStorage.getItem("theme") === "light" ? light : dark}
      >
        <GlobalStyles />
        <Layout>
          <Routes>
            <Route exact path="/" element={<App />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/recipes/:id" element={<Recipe />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/about" element={<About />} />
            <Route path="/help" element={<Help />} />
            <Route path="/contribute" element={<Contribute />} />
            <Route
              path="/update-password/:token"
              element={<UpdatePassword />}
            />
          </Routes>
        </Layout>
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);
