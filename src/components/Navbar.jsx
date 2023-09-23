import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { styles } from "../styles";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [toggle, setToggle] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true); // State to control navbar visibility
  const [lastScrollPosition, setLastScrollPosition] = useState(0);
  const location = useLocation();

  const navLinks = [
    { id: "home", title: "Home" },
    { id: "about", title: "About" },
    { id: "works", title: "Works" },
    { id: "projects", title: "Projects" },
    { id: "links", title: "Links", path: "/links" },
    { id: "books", title: "Books", path: "/books" }
  ];

  useEffect(() => {
    if (location.pathname === "/") {
      setActive("home");
    } else if (location.pathname === "/links") {
      setActive("links");
    } else if (location.pathname === "/books") {
      setActive("books");
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;

      if (lastScrollPosition < currentScrollPosition && currentScrollPosition > 50) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollPosition(currentScrollPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollPosition]);

  return (
    <nav
    style={{
      backgroundColor: '#050816', // This is the background color for the navbar
      transform: showNavbar ? 'translateY(0)' : 'translateY(-100%)',
      transition: 'transform 0.3s ease-in-out'
    }}
    className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20`}
  >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <a href="/">
          <p className="text-white text-[18px] font-bold cursor-pointer flex ">
            Naman &nbsp;
          </p>
        </a>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li key={nav.id}>
              {nav.path ? (
                <Link
                  to={nav.path}
                  className={`text-[18px] font-medium cursor-pointer ${
                    active === nav.id ? "text-white" : "text-secondary"
                  }`}
                >
                  {nav.title}
                </Link>
              ) : (
                <a
                  href={`/#${nav.id}`}
                  className={`${
                    active === nav.id ? "text-white" : "text-secondary"
                  } hover:text-white text-[18px] font-medium cursor-pointer`}
                  onClick={() => setActive(nav.id)}
                >
                  {nav.title}
                </a>
              )}
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
  <img
    src={toggle ? close : menu}
    alt="menu"
    className="w-[28px] h-[28px] object-contain"
    onClick={() => setToggle(!toggle)}
  />

  <div
    className={`${
      !toggle ? "hidden" : "flex"
    } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
  >
    <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
      {navLinks.map((nav) => (
        <li
          key={nav.id}
          className={`font-poppins font-medium cursor-pointer text-[16px] ${
            active === nav.id ? "text-white" : "text-secondary"
          }`}
          onClick={() => {
            setToggle(false);
            setActive(nav.id);
            if (!nav.path) {
              window.location.href = `/#${nav.id}`; // Navigate to the home page and then to the section
            }
          }}
        >
          {nav.path ? (
            <Link to={nav.path}>
              {nav.title}
            </Link>
          ) : (
            <span>
              {nav.title}
            </span>
          )}
        </li>
      ))}
    </ul>
  </div>
</div>
      </div>
    </nav>
  );
};

export default Navbar;
