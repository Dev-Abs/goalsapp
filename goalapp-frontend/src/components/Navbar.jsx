import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Navbar = (props) => {
  const [token, setToken] = useState("");

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log("toggle");
  };
  useEffect(() => {
    setToken(localStorage.getItem("token"));
  });
  return (
    <>
      <nav
        className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono"
        role="navigation"
      >
        <a href="/" className="pl-8">
          GoalApp
        </a>
        <div className="px-4 cursor-pointer md:hidden" onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </div>

        {isMenuOpen && props.navbarMain && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md py-2 md:hidden">
            <Link
              to="/allgoals"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              All Goals
            </Link>
            <Link
              to="/creategoal"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Create New Goal
            </Link>
            <Link
              to="/"
              onClick={() => {
                localStorage.setItem("token", "");
                props.toggleNavbar();
              }}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Signout
            </Link>
          </div>
        )}

        {isMenuOpen && !props.navbarMain && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md py-2 md:hidden">
            <Link
              to="/signup"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Sign Up
            </Link>
            <Link
              to="/"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Log In
            </Link>
          </div>
        )}

        {props.navbarMain ? (
          <div className="pr-8 md:block hidden">
            {/* <a href="/" className="p-4">Home</a> */}
            <Link to="/allgoals" className="p-4">
              All Goals
            </Link>
            <Link to="/creategoal" className="p-4">
              Create New Goal
            </Link>
            <Link
              to="/"
              className="p-4"
              onClick={() => {
                localStorage.setItem("token", "");
                props.toggleNavbar();
              }}
            >
              SignOut
            </Link>
          </div>
        ) : (
          <div className="pr-8 md:block hidden">
            {/* <a href="/" className="p-4">Home</a> */}
            <Link to="/signup" className="p-4">
              Signup
            </Link>
            <Link to="/" className="p-4">
              LogIn
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
