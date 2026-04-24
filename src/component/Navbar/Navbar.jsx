import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import UseAuthContext from "../../customHook/UseAuthContext";
import { toast } from "react-toastify";
import { LogOut, SquareChevronDown, Menu, X } from "lucide-react";
import Themetoggle from "../Theme/Themetoggle";
import Logo from "../logo/Logo";

const Navbar = () => {
  const { user, logOut } = UseAuthContext();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    logOut().then(() => {
      toast("Logged out successfully");
    });
  };

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/decorator", label: "Be a decorator" },
    { path: "/contact", label: "Contact" },
    { path: "/about", label: "About" },
  ];

  const linkClass = ({ isActive }) =>
    `relative font-semibold text-lg transition text-white ${
      isActive ? "opacity-100" : "opacity-80 hover:opacity-100"
    }`;

  return (
    <>
      {/* 🔥 1600px CENTERED NAVBAR (FULL CONTAINER) */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className={`fixed top-0 left-0 w-full z-50 flex justify-center`}
      >
        {/* MAIN NAVBAR BOX (1600px) */}
        <div
          className={`w-[1600px] mx-auto navbar px-4
          backdrop-blur-xl 
          border-b border-white/10
          transition-all duration-300
          ${
            scrolled
              ? "bg-black/50 shadow-xl py-1"
              : "bg-black/30 shadow-md py-3"
          }`}
        >

          {/* LEFT */}
          <div className="navbar-start">
            <button
              className="btn btn-ghost lg:hidden text-white"
              onClick={() => setMobileOpen(true)}
            >
              <Menu />
            </button>

            <motion.div whileHover={{ scale: 1.05 }}>
              <Logo />
            </motion.div>
          </div>

          {/* CENTER */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal gap-6">
              {navItems.map((item) => (
                <NavLink key={item.path} to={item.path} className={linkClass}>
                  {item.label}
                </NavLink>
              ))}
            </ul>
          </div>

          {/* RIGHT */}
          <div className="navbar-end gap-4">

            <Themetoggle />

            {user ? (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost">
                  <img
                    src={user.photoURL}
                    className="w-16 h-16 rounded-full border-2 border-white object-cover"
                    alt=""
                  />
                  <SquareChevronDown size={22} className="text-white" />
                </label>

                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow-lg rounded-box w-44
                  bg-black/70 backdrop-blur-xl border border-white/10"
                >
                  <li>
                    <button
                      className="btn btn-sm btn-primary"
                      onClick={handleLogout}
                    >
                      <LogOut size={16} /> Logout
                    </button>
                  </li>

                  <li>
                    <Link
                      className="btn btn-sm btn-outline text-white"
                      to="/dashboard"
                    >
                      Dashboard
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <>
                <Link className="btn btn-primary btn-sm" to="/authlayout/login">
                  Login
                </Link>
                <Link
                  className="btn btn-outline btn-sm text-white"
                  to="/authlayout/register"
                >
                  SignUp
                </Link>
              </>
            )}
          </div>
        </div>
      </motion.div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-3/4 h-full z-50
            bg-black/90 backdrop-blur-xl p-6"
          >
            <div className="flex justify-between items-center mb-6 text-white">
              <Logo />
              <button onClick={() => setMobileOpen(false)}>
                <X />
              </button>
            </div>

            <div className="flex flex-col gap-5">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className="text-xl font-semibold text-white"
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;