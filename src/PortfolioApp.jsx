
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Contact } from "./components/Contact";
import { Home } from "./components/Home";
import { NavBar } from "./components/NavBar";
import { Projects } from "./components/Projects";
import "./index.css";

const PortfolioApp = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/contact" element = { <Contact /> } />
        <Route path="/projects" element = { <Projects /> } />
        <Route path="/" element = { <Home /> } />
      </Routes>
    </BrowserRouter>
  );
};

export default PortfolioApp;
