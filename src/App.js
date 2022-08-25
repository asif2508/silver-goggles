import React from "react";
import Footer from "./components/Footer/Footer.js";
import Home from "./components/Pages/Home.js";

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

import DashBoardSession from "./components/Pages/Dashboard/MenteeDashboard/DashBoardSession.js";
import DashBoardMentors from "./components/Pages/Dashboard/MenteeDashboard/DashboardMentors.js";
import DashBoardManageProfile from "./components/Pages/Dashboard/MenteeDashboard/DashboardManageProfile.js";
import DashBoardHome from "./components/Pages/Dashboard/MenteeDashboard/DashBoardHome.js";
import Register from "./components/Pages/Auth/Register.js";

import MentorDashboardHome from "./components/Pages/Dashboard/MentorDashboard/MentorDashboardHome.js";
import MentorDashboardPackages from "./components/Pages/Dashboard/MentorDashboard/MentorDashboardPackages.js";
import MentorDashboardCalender from "./components/Pages/Dashboard/MentorDashboard/MentorDashboardCalender.js";
import MentorDashboardReviews from "./components/Pages/Dashboard/MentorDashboard/MentorDashboardReviews.js";
import MentorDashboardPayment from "./components/Pages/Dashboard/MentorDashboard/MentorDashboardPayment.js";
import MentorDashboardSession from "./components/Pages/Dashboard/MentorDashboard/MentorDashboardSession.js";
import MentorDashboardManageProfile from "./components/Pages/Dashboard/MentorDashboard/MentorDashboardManageProfile.js";

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
            <Route path="/signup" element={<Register />} />
            <Route path="/mentors" element={<Mentors />} />
            <Route path="/mentors/:id" element={<DedicateMentor />} />
            <Route path="/mentors/:id/book-now" element={<BookMentorNow />} />
            <Route path="/become-mentor" element={<BecomeMentor />} />
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

            <Route path="/mentee/dashboard" element={<DashBoardHome />} />
            <Route
              path="/mentee/dashboard/session"
              element={<DashBoardSession />}
            />
            <Route
              path="/mentee/dashboard/mentors"
              element={<DashBoardMentors />}
            />
            <Route
              path="/mentee/dashboard/manageprofile"
              element={<DashBoardManageProfile />}
            />

            <Route
              path="/mentor/dashboard"
              element={<MentorDashboardHome />}
            />
            <Route
              path="/mentor/dashboard/calender"
              element={<MentorDashboardCalender />}
            />
            <Route
              path="/mentor/dashboard/reviews"
              element={<MentorDashboardReviews />}
            />
            <Route
              path="/mentor/dashboard/payments"
              element={<MentorDashboardPayment />}
            />
            <Route
              path="/mentor/dashboard/packages"
              element={<MentorDashboardPackages />}
            />
            <Route
              path="/mentor/dashboard/session"
              element={<MentorDashboardSession />}
            />
            <Route
              path="/mentor/dashboard/manageprofile"
              element={<MentorDashboardManageProfile />}
            />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
};

export default App;
