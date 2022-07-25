import React from "react";
import Footer from "./components/Footer/Footer.js";
import Home from "./components/Pages/Home.js";
import About from "./components/Pages/About.js";
import Contact from "./components/Pages/Contact.js";
import BookCall from "./components/Pages/BookCall.js";

import Login from "./components/Pages/Auth/Login.js";
import Register from "./components/Pages/Auth/Register.js";
import Mentors from "./components/Pages/Mentors/Mentors.js";
import EditMentor from "./components/Pages/Mentors/EditMentor.js";
import MentorProfile from "./components/Pages/Profile";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DedicateMentor from "./components/Pages/Mentors/DedicateMentor.js";
import BecomeMentor from "./components/Pages/Mentors/BecomeMentor.js";
import VaibhavFooter from "./components/vaibhav/VaibhavFooter.js";
import BookMentorNow from "./components/Pages/Mentors/BookMentorNow.js";
import VaibhavComponent from "./components/vaibhav/VaibhavComponent.js";

const App = () => {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book-call-now" element={<BookCall />} />
            <Route path="/mentors" element={<Mentors />} />
            <Route path="/profile" element={<MentorProfile />} />
            <Route path="/edit-mentor-profile" element={<EditMentor />} />
            <Route path="/become-mentor" element={<BecomeMentor />} />
            <Route path="/mentors/:id" element={<DedicateMentor />} />
            <Route path="/mentors/:id/book-now" element={<BookMentorNow />} />
            <Route path="/footer" element={<VaibhavFooter />} />
            <Route path="/component" element={<VaibhavComponent />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
};

export default App;
