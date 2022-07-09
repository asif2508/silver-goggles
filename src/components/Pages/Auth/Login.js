import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signin } from "../../../actions/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signin(email, password, navigate));
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [navigate]);

  return (
    <div className="min-h-half">
      <main className="min-h-screen w-full bg-gray-900 mx-auto py-20 px-5">
        {localStorage.getItem("userInfo") === null ? (
          <form
            onSubmit={handleSubmit}
            className="mx-auto max-w-md space-y-10 flex flex-col"
          >
            <p className="text-4xl font-bold text-center">Log In</p>

            <input
              type="text"
              placeholder="Email"
              name="email"
              className="placeholder:italic text-lg w-full bg-transparent border-b-2 focus:border-light-blue outline-none transform duration-300"
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              autoComplete="true"
              placeholder="Password"
              name="password"
              className="placeholder:italic text-lg w-full bg-transparent border-b-2 focus:border-light-blue outline-none transform duration-300"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              className="bg-dark-blue text-white hover:bg-light-blue transform duration-300 py-2 font-semibold rounded-sm"
              type="submit"
            >
              LOG IN
            </button>

            <Link
              to="#"
              className="text-center font-semibold text-gray-500 hover:text-gray-300 transform duration-300"
            >
              FORGOT PASSWORD?
            </Link>

            <p className="text-lg text-center">
              No account?
              <Link
                to="/register"
                className="text-light-blue hover:underline font-medium underline-offset-4"
              >
                Create One
              </Link>
            </p>
          </form>
        ) : (
          <div>
            <p className="text-4xl font-bold text-center">
              You are Already Login
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Login;
