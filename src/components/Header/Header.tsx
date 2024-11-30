import { useState, useEffect } from "react";
import logo from "../../assets/shared/logo.svg";

import "./style.css";
import iconBurger from "../../assets/shared/icon-hamburger.svg";
import iconClose from "../../assets/shared/icon-close.svg";
import { Link, useLocation } from "react-router-dom";
import useViewport from "../../hooks/useViewport";
//import { useCartDialog, useAddToCartDialog } from "../../utils/context";
const NAVIGATION_ITEMS = [
  { id: 1, number: "00", title: "HOME", path: "/" },
  { id: 2, number: "01", title: "DESTINATION", path: "/destination" },
  { id: 3, number: "02", title: "CREW", path: "/crew" },
  { id: 4, number: "03", title: "TECHNOLOGY", path: "/technology" },
];
const Header: React.FC = () => {
  //const [sidebarActive, setSidebarActive] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const { isTablet } = useViewport();
  const location = useLocation();

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <header className="w-full h-full fixed z-50 ">
      <div className="flex justify-between p-6 pe-6 md:pe-0 md:px-6 md:py-0 lg:ps-8 lg:py-6">
        <Link to="/" aria-label="Home" className="relative z-20 md:mt-6">
          <img
            src={logo}
            alt="Logo"
            className={` w-12 md:w-10 ${isSidebarOpen ? "" : "block"}`}
          />
        </Link>

        <div className={`md:flex justify-between mt-1 md:m`}>
          <div
            className={`psx-4 items-cente ${isSidebarOpen ? "w-[65%]" : ""}`}
          >
            <div className={`md:hidden`}>
              <button
                onClick={toggleSidebar}
                aria-expanded={isSidebarOpen}
                aria-label="Toggle menu"
                className={isSidebarOpen ? "relative z-30" : ""}
              >
                <img
                  src={!isSidebarOpen ? iconBurger : iconClose}
                  alt={isSidebarOpen ? "Close menu" : "Open menu"}
                  className={isSidebarOpen ? "w-8 h-6" : "w-8 h-6"}
                />
              </button>
            </div>

            <nav
              className={`nav__container md:block md:px-8 lg:w-[54rem] lg:px-24 lg:gap-1 md:pt-4 h-20 overflow-hidden ${
                isSidebarOpen ? "sidenav backdrop-blur-3xl" : "hidden"
              }`}
            >
              <ul className="flex flex-col mt-24 md:mt-0 ms-2 md:ms-0 md:flex-row md:justify-between lg:justify-normal  text-xl md:text-sm gap-8 lg:gap-4 md:gap-x-6 lg:gap-x-20 p-6 md:p-4 agap-32">
                {NAVIGATION_ITEMS.map((item) => (
                  <li key={item.id} className={`${item.title}`}>
                    <Link
                      to={item.path}
                      className={`border-white flex gap-2 ${
                        location.pathname === item.path
                          ? "border-e-4 md:border-e-0 md:border-b-4  border-white "
                          : "md:hover:border-b-4 hover:border-white/50"
                      }
`}
                    >
                      {!isTablet && (
                        <span className="test font-bold tracking-widest">
                          {item.number}
                        </span>
                      )}
                      <span className="font-normal pb-6">{item.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <hr className="hidden llg:block w-full absolute top-10 left-32" />
    </header>
  );
};

export default Header;
