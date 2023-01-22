import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HistState from "./context/histState";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Alert from "./components/Alert";
import Login from "./components/Login";
import Register from "./components/Register";
import DetailView from "./components/DetailView";
import Contact from "./components/Contact";
import TypeTemplate from "./components/TypeTemplate";

function App() {
  return (
    <HistState>
      <Router>
        <Header />
        <Alert />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/filter/:type" element={<TypeTemplate />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/:id" element={<DetailView />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </Router>
    </HistState>
  );
}

export default App;
