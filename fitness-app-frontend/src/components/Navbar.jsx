import React from "react";
import { Link } from "react-router";

const Navbar = ({ onLogout }) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-yellow-400/30 shadow-[0_0_20px_rgba(255,221,0,0.1)]">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="momo-trust-display-regular text-yellow-400 text-2xl tracking-wide">
          FitTrack
        </h1>

        <div className="flex items-center gap-6 poppins text-yellow-300">
            <Link
                to="/activities"
                className="hover:text-yellow-100 transition duration-200"
              >
            Activities
            </Link>
         
          <button
            onClick={onLogout}
            className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded-full shadow-md hover:scale-105 hover:shadow-[0_0_10px_rgba(255,221,0,0.5)] transition-all"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
