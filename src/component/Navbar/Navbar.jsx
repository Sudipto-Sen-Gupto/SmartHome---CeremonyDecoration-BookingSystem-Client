import React from 'react';
import { Link, NavLink } from 'react-router';
import { motion } from 'framer-motion';
import UseAuthContext from '../../customHook/UseAuthContext';
import { toast } from 'react-toastify';
import './nav.css';
import { LogOut, SquareChevronDown } from 'lucide-react';
import Themetoggle from '../Theme/Themetoggle';
import Logo from '../logo/Logo';

const Navbar = () => {
  const { user, logOut } = UseAuthContext();

  const handleLogout = () => {
    logOut().then(() => {
      toast('Log Out successfully');
    });
  };

  const list = (
    <motion.nav
      className="flex flex-col gap-5 md:flex-row"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.08 } }
      }}
    >
      {[
        { path: '/', label: 'Home' },
        { path: '/services', label: 'Services' },
        { path: '/decorator', label: 'Be a decorator' },
        { path: '/contact', label: 'Contact' },
        { path: '/about', label: 'About' }
      ].map(({ path, label }) => (
        <motion.div
          key={path}
          variants={{
            hidden: { opacity: 0, y: -10 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          <NavLink to={path} className="relative group">
            {label}
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all group-hover:w-full"></span>
          </NavLink>
        </motion.div>
      ))}

      {user && (
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -10 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          
        </motion.div>
      )}
    </motion.nav>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="navbar bg-base-100 shadow-sm "
    >
      {/* Left */}
      <div className="navbar-start ">
        <div className="dropdown">
          <motion.div
            whileTap={{ scale: 0.9 }}
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </motion.div>

          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {list}
          </ul>
        </div>

        <motion.span
          whileHover={{ scale: 1.05 }}
          className="btn btn-ghost text-xl"
        >
          <Logo />
        </motion.span>
      </div>

      {/* Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{list}</ul>
      </div>

      {/* Right */}
      <div className="navbar-end gap-3">
        {user ? (
          <>
            <motion.img
              whileHover={{ scale: 1.1 }}
              src={user.photoURL}
              title={user.displayName}
              className="w-12 h-12 rounded-full border-2 border-primary"
              alt=""
            />

            <div className="dropdown dropdown-bottom dropdown-end">
              <motion.div
                whileTap={{ scale: 0.9 }}
                tabIndex={0}
                role="button"
                className="btn"
              >
                <SquareChevronDown />
              </motion.div>

              <motion.ul
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                tabIndex="-1"
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-36 p-2 shadow"
              >
                <li>
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={handleLogout}
                  >
                    <LogOut size={16} /> Logout
                  </button>
                </li>
                <li className="flex items-center gap-2 px-2">
                  Theme <Themetoggle />
                </li>
                <li>
                  <NavLink to="/dashboard" className="relative group btn btn-primary btn-sm">
            Dashboard
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all group-hover:w-full"></span>
          </NavLink>
                </li>
              </motion.ul>
            </div>
          </>
        ) : (
          <>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link className="btn btn-primary" to="/authlayout/login">
                Login
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }}>
              <Link className="btn btn-outline" to="/authlayout/register">
                SignUp
              </Link>
            </motion.div>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default Navbar;