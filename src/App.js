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

import DashBoardHome from "./components/Pages/Dashboard/MenteeDashboard/DashBoardHome.js";
import Register from "./components/Pages/Auth/Register.js";

import About from "./components/Pages/About.js";
import DashboardHome from "./components/Pages/HybridDashboard/DashboardHome.js";
import DashboardCalender from "./components/Pages/HybridDashboard/DashboardCalender.js";
import DashboardBecomeMentor from "./components/Pages/HybridDashboard/DashboardBecomeMentor.js";
import DashboardPackages from "./components/Pages/HybridDashboard/DashboardPackages.js";
import DashboardSession from "./components/Pages/HybridDashboard/DashboardSession.js";
import DashboardManageProfile from "./components/Pages/HybridDashboard/DashboardManageProfile.js";
import BasicInfo from "./components/Pages/HybridDashboard/ManageProfile/BasicInfo.js";
import MentorshipInfo from "./components/Pages/HybridDashboard/ManageProfile/MentorshipInfo.js";
import EducationalInfo from "./components/Pages/HybridDashboard/ManageProfile/EducationalInfo.js";
import ExperienceInfo from "./components/Pages/HybridDashboard/ManageProfile/ExperienceInfo.js";

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
            <Route path="/signup" element={<Register />} />
            <Route path="/mentors" element={<Mentors />} />
            <Route path="/mentors/:id" element={<DedicateMentor />} />
            <Route path="/mentors/:id/book-now" element={<BookMentorNow />} />
            <Route path="/become-mentor" element={<BecomeMentor />} />
            <Route path="/dashboard" element={<DashboardHome />} />
            <Route path="/dashboard/my-availability/" element={<DashboardCalender />} />
            <Route path="/dashboard/become-mentor" element={<DashboardBecomeMentor />} />
            <Route path="/dashboard/manage-services" element={<DashboardPackages />} />
            <Route path="/dashboard/my-sessions" element={<DashboardSession />} />
            <Route path="/dashboard/manage-profile" element={<BasicInfo />} />
            <Route path="/dashboard/manage-profile/education-info" element={<EducationalInfo/>} />
            <Route path="/dashboard/manage-profile/experience-info" element={<ExperienceInfo />} />
            <Route path="/dashboard/manage-profile/mentorship-info" element={<MentorshipInfo />} />

            {/* <Route
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
            /> */}

            {/* <Route path="/mentee/dashboard" element={<DashBoardHome />} />
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
            <Route
              path="/add-availability/:id"
              element={<AddAvailability />}
            />
            <Route
              path="/add-packages/:id"
              element={<AddPackages />}
            /> */}
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
};

export default App;
