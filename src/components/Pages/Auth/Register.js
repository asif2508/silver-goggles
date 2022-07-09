import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signup } from "../../../actions/auth";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../../ErrorMessage";
import Loading from "../../Loading";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const [message, setMessage] = useState(null);
  const error = false;
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("userInfo"));
  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmpassword) {
      setMessage("Passwords do not match", true);
    } else if (password.length < 8) {
      setMessage("Password must be at least 8 characters", true);
    } else if (phone.length > 11) {
      setMessage("Phone number must be 10 numbers", true);
    } else {
      setLoading(true);
      try {
        dispatch(signup({ name, email, password, phone }, navigate));
        setLoading(false);
      } catch (error) {
        alert(error.response.data.message);
      }
    }
  };

  return (
    !user && (
      <div className="min-h-half">
        <main className="min-h-screen w-full bg-gray-900 mx-auto py-20 px-5">
          <form className="mx-auto max-w-md space-y-10 flex flex-col">
            <p className="text-4xl font-bold text-center">Register</p>

            {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
            {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
            {loading && <Loading />}

            <input
              type="text"
              placeholder="Name"
              className="placeholder:italic text-lg w-full bg-transparent border-b-2 focus:border-orange-500 outline-none transform duration-300"
              required
              name="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />

            <input
              type="email"
              placeholder="Email"
              className="placeholder:italic text-lg w-full bg-transparent border-b-2 focus:border-orange-500 outline-none transform duration-300"
              name="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />

            <input
              type="tel"
              placeholder="Phone No."
              className="placeholder:italic text-lg w-full bg-transparent border-b-2 focus:border-orange-500 outline-none transform duration-300"
              name="phone"
              required
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />

            <input
              type="password"
              autocomplete="true"
              placeholder="Password"
              className="placeholder:italic text-lg w-full bg-transparent border-b-2 focus:border-orange-500 outline-none transform duration-300"
              required
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />

            <input
              type="password"
              autocomplete="true"
              placeholder="Confirm Password"
              required
              className="placeholder:italic text-lg w-full bg-transparent border-b-2 focus:border-orange-500 outline-none transform duration-300"
              name="confirmpassword"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmpassword}
            />

            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-dark-blue text-white hover:bg-light-blue transform duration-300 py-2 font-semibold rounded-sm"
            >
              Register
            </button>

            <p className="text-lg text-center">
              Already have account?
              <Link
                to="/login"
                className="text-light-blue hover:underline font-medium underline-offset-4"
              >
                Login
              </Link>
            </p>
          </form>
        </main>
      </div>
    )
  );
};

export default Register;
