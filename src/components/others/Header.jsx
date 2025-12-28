import React, { useEffect, useState } from "react";
import { Sun, Moon } from "react-feather";

const Header = ({ dark, toggleTheme, user, handleLogOut, empData, adminData }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const title = !user
    ? "Employee Management System"
    : `Welcome, ${empData?.name?.split(" ")[0]} ` || `Welcome, ${adminData?.name?.split(" ")[0]} ` || "Dashboard";

  return (
    <header
      // className={`sticky top-2 z-40 w-[90%] mx-auto  p-6 flex items-center justify-between shadow-md rounded-2xl bg-gradient-to-b from-white/10 to-white/5 dark:from-black/40 dark:to-black/20 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-lg shadow-black/30
      className={`p-2 pb-4 px-6 sticky top-2 z-40 w-[90%] mx-auto flex items-center justify-between 
        ${scrolled
          ? "p-3 shadow-md rounded-2xl bg-linear-to-b from-white/10 to-white/5 dark:from-black/40 dark:to-black/20 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-black/30"
          : "border-b border-gray-300 dark:border-gray-400/50"
        }
      `}
    >
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
        {/* Employee Management System */}
        {title}
      </h1>

      <div className="flex items-center gap-3">
        <button
          onClick={toggleTheme}
          className="
            w-10 h-10 rounded-full
            flex items-center justify-center
            bg-white dark:bg-slate-800
            border border-gray-300 dark:border-slate-700
            shadow-sm hover:shadow-md
            transition active:scale-95
          "
        >
          {dark ? (
            <Sun
              size={18}
              className="text-yellow-400 rotate-0 transition-transform duration-300"
            />
          ) : (
            <Moon
              size={18}
              className="text-yellow-400 transition-transform duration-300"
            />
          )}
        </button>

        {user ? <button className="ml-3 px-2 py-1 font-bold rounded bg-red-500 dark:bg-red-100 text-red-50 dark:text-red-600 hover:bg-red-400 hover:dark:bg-red-300 transition"
          onClick={() => {
            handleLogOut();
          }}>
          {" "}
          Log Out
        </button> : ""}
      </div>
    </header>
  );
};

export default Header;
