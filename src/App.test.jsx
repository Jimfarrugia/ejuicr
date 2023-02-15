import { render, screen } from "@testing-library/react";
import Header from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";

// <Link /> elements will fail to render unless they are a within a Router component
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

// header nav should be rendered and contain each link

// footer should be rendered contain the logo

// footer nav should be rendered and contain each link
