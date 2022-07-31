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

import MentorEditProfile from "./components/Pages/Mentors/MentorFormFilling/MentorEditProfile.js";
import MentorEditQual from "./components/Pages/Mentors/MentorFormFilling/MentorEditQual.js";
import MentorEditReview from "./components/Pages/Mentors/MentorFormFilling/MentorEditReview.js";
import DashBoard from "./components/Pages/Dashboard/MenteeDashboard/DashBoardHome.js";
import DashBoardHome from "./components/Pages/Dashboard/MenteeDashboard/DashBoardHome.js";
import DashBoardSession from "./components/Pages/Dashboard/MenteeDashboard/DashBoardSession.js";
import DashBoardMentors from "./components/Pages/Dashboard/MenteeDashboard/DashboardMentors.js";
import DashBoardManageProfile from "./components/Pages/Dashboard/MenteeDashboard/DashboardManageProfile.js";

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
            <Route path="/dashboard" element={<DashBoardHome />} />
            <Route path="/dashboard/session" element={<DashBoardSession />} />
            <Route path="/dashboard/mentor" element={<DashBoardMentors />} />
            <Route
              path="/dashboard/manageprofile"
              element={<DashBoardManageProfile />}
            />
            <Route
              path="/become-mentor/edit-profile"
              element={<MentorEditProfile />}
            />
            <Route
              path="/become-mentor/edit-qualifications"
              element={<MentorEditQual />}
            />
            <Route
              path="/become-mentor/in-review"
              element={<MentorEditReview />}
            />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
};

export default App;
