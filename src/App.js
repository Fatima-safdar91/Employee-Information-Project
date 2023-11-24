import "./App.css";
import Header from "./Components/Header";
import React from "react";
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
        {/* HOME */}
          <Route path="/" element={<Home />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
