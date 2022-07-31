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
import DashBoard from "./components/vaibhav/DashBoardHome.js";
import SessionDashBoard from "./components/vaibhav/DashBoardSession.js";
import MentorDash from "./components/vaibhav/DashboardMentors.js";
import ManageProfileDash from "./components/vaibhav/DashboardManageProfile.js";
import MentorEditProfile from "./components/Pages/Mentors/MentorFormFilling/MentorEditProfile.js";
import MentorEditQual from "./components/Pages/Mentors/MentorFormFilling/MentorEditQual.js";
import MentorEditReview from "./components/Pages/Mentors/MentorFormFilling/MentorEditReview.js";

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
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/dashboard/session" element={<SessionDashBoard />} />
            <Route path="/dashboard/mentor" element={<MentorDash />} />
            <Route
              path="/dashboard/manageprofile"
              element={<ManageProfileDash />}
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
