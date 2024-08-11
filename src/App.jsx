import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import FitnessCenterDetails from "./components/FitnessCenterDetails";
import EventDetails from "./components/EventDetails";
import LoginPopup from "./components/LoginPopup";
import Footer from "./components/Footer";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("isLoggedIn") === "true" || false;
  });
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

  const toggleLoginPopup = () => {
    setIsLoginPopupOpen(!isLoginPopupOpen);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setIsLoginPopupOpen(false);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col font-display">
        <Navbar toggleLoginPopup={toggleLoginPopup} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/fitness-center/:id"
              element={<FitnessCenterDetails />}
            />
            <Route
              path="/event/:centerId/:eventId"
              element={<EventDetails />}
            />
            {/* Add more routes here */}
          </Routes>
        </main>
        {isLoginPopupOpen && (
          <LoginPopup
            onClose={toggleLoginPopup}
            onLogin={handleLogin}
            setIsLoggedIn={setIsLoggedIn}
          />
        )}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
