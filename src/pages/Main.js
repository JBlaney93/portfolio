import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Projects from "../components/Projects";

export default function Main() {
  return (
    <body>
      <Router>
        <header>
          <NavBar />
        </header>
        <main className="container">
          <Routes>
            <Route path="/" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </Router>
    </body>
  );
}
