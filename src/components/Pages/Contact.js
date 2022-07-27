import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { contact } from "../../actions/forms.js";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header.js";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  let dt = useSelector((state) => state.form);
  const { data } = dt;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || phone === "" || query === "") {
      alert("Please fill all fields");
    } else if (phone.length < 10) {
      alert("Phone number must be 10 numbers, Do Not Include +91");
    } else {
      dispatch(contact({ name, email, phone, query }));
      if (data && data.status === "success") {
        alert(data);
        data.status = "";
      }
    }
  };

  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [navigate]);
  
  useEffect(() => {
    if (data) {
      alert(data);
    }
  }, [data]);

  return (
    <>
      <div className="min-h-half">
        <div className="header">
          <Header />
          <div
            className="w-full hidden lg:block"
            style={{
              borderColor: "rgba(0, 16, 60, 0.15)",
              backgroundColor: "rgba(0, 16, 60, 0.15)",
              borderWidth: 0.5,
              borderStyle: "solid",
            }}
          />
        </div>
        {/* {loading && <Loading />} */}
        <div className="contact flex flex-col w-full lg:flex-row">
          <div className="left form my-12 mx-4 flex flex-col lg:w-1/2 justify-center items-center">
            <h3 className="heading-title pb-10">Send your Questions Here,</h3>
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-lg flex justify-center items-center flex-col"
            >
              <div className="flex w-full flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="label-form" htmlFor="grid-password">
                    Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="E.g. Jane Doe"
                  />
                </div>
              </div>
              <div className="flex w-full flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="label-form" htmlFor="grid-password">
                    Email
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="E.g. janedoe@gmail.com"
                  />
                </div>
              </div>
              <div className="flex w-full flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="label-form" htmlFor="grid-password">
                    Phone No.
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    name="phone"
                    maxLength={10}
                    onChange={(e) => setPhone(e.target.value)}
                    type="text"
                    pattern="\d+"
                    placeholder="E.g. 5635245789"
                  />
                </div>
              </div>
              <div className="flex flex-wrap w-full   mb-6">
                <div className="w-full px-3">
                  <label className="label-form" htmlFor="grid-password">
                    Message
                  </label>
                  <textarea
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    name="query"
                    onChange={(e) => setQuery(e.target.value)}
                    type="text"
                    placeholder="E.g. I have query"
                    rows="6"
                    column="3"
                  />
                </div>
              </div>
              <button className="blue-button">Send Now</button>
            </form>
          </div>

          <div className="rightemail lg:w-1/2 mx-6 flex flex-col justify-center">
            <p className="">
              We are continuously working to make the ecosystem more Better. If
              you have any questions or problems then feel free to Ask us.
            </p>
            <h2 className="heading-title my-4">Email Us</h2>
            <p className="mb-12">info.edukith@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
