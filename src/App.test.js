import { render, screen } from "@testing-library/react";
import App from "./App";
import Layout from "./components/Layout";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// <Link /> elements will fail to render unless they are a within a Router component
// const layout = (
//   <Router>
//     <Layout />
//   </Router>
// );
const header = (
  <Router>
    <Header />
  </Router>
);

test("renders the header logo", () => {
  render(header);
  const logo = screen.getByAltText("ejuicr logo");
  expect(logo).toBeTruthy();
});

test("renders hamburger menu icon", () => {
  // render(layout);
  // const menuIcon = screen.findByTestId("app-footer");
  // expect(Footer).toBeTruthy();
  throw new Error();
});

// header nav should be rendered and contain each link

// footer should be rendered contain the logo

// footer nav should be rendered and contain each link
