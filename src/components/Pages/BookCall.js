import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { bookCall } from "../../actions/forms.js";

const BookCall = () => {
  const mentorName = localStorage.getItem("mentorId");
  const user = JSON.parse(localStorage.getItem("userInfo"));
  const location = useNavigate();

  const callBook = useSelector((state) => state.callBook);
  const { success: successForm, data } = callBook;

  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [phone, setPhone] = useState(user ? user.phone : "");
  const [mentor, setMentor] = useState(mentorName ? mentorName : "None");
  const [query, setQuery] = useState("");

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    if (user) {
      localStorage.removeItem("mentorId");
      dispatch(bookCall({ name, email, phone, mentor, query }));
      setTimeout(() => {
        if (successForm) {
          alert(
            "Your Request Recorded successfully, You will get Email of Booking in 24 hours! Thank You!"
          );
        }
      }, 2000);
    } else {
      if (phone.length > 9) {
        localStorage.removeItem("mentorId");
        dispatch(bookCall({ name, email, phone, mentor, query }));
        setTimeout(() => {
          if (successForm) {
            alert(
              "Your Request Recorded successfully, You will get Email of Booking in 24 hours! Thank You!"
            );
          }
        }, 2000);

        setName("");
        setEmail("");
        setPhone("");
        setQuery("");
      } else {
        alert("Phone number must be 10 numbers, Must Include +91");
      }
    }
  };

  useEffect(() => {
    localStorage.removeItem("mentorId");
  }, [location]);

  return (
    <>
      <div className="min-h-half">
        {/* <PageHeading title="Book a FREE Call" /> */}
        <div className="contact flex flex-col w-full">
          <div className="form my-12 mx-6 flex flex-col justify-center items-center">
            <h3 className="heading-title pb-10">Book a FREE call Now,</h3>
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-lg flex justify-center items-center flex-col"
            >
              <div className="flex w-full flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="label-form">Name</label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text"
                    name="name"
                    required={true}
                    disabled={user ? true : false}
                    value={user ? user.name : name}
                    placeholder="E.g. Jane Doe"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex w-full flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="label-form">Email</label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="email"
                    required={true}
                    name="email"
                    disabled={user ? true : false}
                    value={user ? user.email : email}
                    placeholder="E.g. jandoe@gmail.com"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex w-full flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="label-form">Phone No.</label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="tel"
                    name="phone"
                    value={user ? user.phone : phone}
                    disabled={user ? true : false}
                    required={true}
                    placeholder="E.g. +91..."
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex w-full flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="label-form">Preffered Mentor</label>
                  <input
                    className="appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text"
                    name="mentor"
                    disabled
                    value={mentor}
                    required={true}
                  />
                </div>
              </div>
              <div className="flex flex-wrap w-full   mb-6">
                <div className="w-full px-3">
                  <label className="label-form">
                    Problem you are Struggling with
                  </label>
                  <textarea
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text"
                    name="query"
                    placeholder="E.g. I had confusion about"
                    rows="6"
                    required={true}
                    column="3"
                    onChange={(e) => setQuery(e.target.value)}
                  />
                </div>
              </div>
              <button className="blue-button">Book Call</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookCall;
