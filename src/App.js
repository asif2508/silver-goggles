import React from "react";
import Footer from "./components/Footer/Footer.js";
import Home from "./components/Pages/Home.js";
import About from "./components/Pages/About.js";
import Contact from "./components/Pages/Contact.js";

import Login from "./components/Pages/Auth/Login.js";
import Mentors from "./components/Pages/Mentors/Mentors.js";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DedicateMentor from "./components/Pages/Mentors/DedicateMentor.js";
import BookMentorNow from "./components/Pages/Mentors/BookMentorNow.js";


import Page404 from "./components/Pages/404Page.js";
import BecomeMentor from "./components/Pages/BecomeMentor.js";
import DashBoard from "./components/vaibhav/DashBoard.js";
import SessionDashBoard from "./components/vaibhav/SessionDashBoard.js";
import MentorDash from "./components/vaibhav/MentorDash.js";
import ManageProfileDash from "./components/vaibhav/ManageProfileDash.js";
const App = () => {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Page404 />} />
            <Route path="" element={<Page404 />} />
            <Route element={<Page404 />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mentors" element={<Mentors />} />
            <Route path="/mentors/:id" element={<DedicateMentor />} />
            <Route path="/mentors/:id/book-now" element={<BookMentorNow />} />
            <Route path="/become-mentor" element={<BecomeMentor />} />
            <Route path="/dashboard" element={<DashBoard />}/>
            <Route path="/dashboard/session" element={<SessionDashBoard />}/>
            <Route path="/dashboard/mentor" element={<MentorDash />}/>
            <Route path="/dashboard/manageprofile" element={<ManageProfileDash />}/>
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
};

export default App;
