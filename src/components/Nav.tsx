//@ts-ignore
import { Link } from "react-router-dom";
//@ts-ignore
import pdf from "../assets/PDF_TECH.svg";
import routs from "../utilities/Routs";
function Nav() {
  return (
    <div>
      <nav className="bg-blueBg dark:bg-gray-900  w-full dark:border-gray-600 m-0 px-20 py-5">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={pdf} className="h-14 w-28" alt="Flowbite Logo" />
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <Link to={routs.SIGN_IN} className="buttonStyle">
              Login
            </Link>
            <Link to={routs.SIGN_UP} className="buttonStyle mr-3">
            Sign Up
            </Link>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="#" className="navTitleStyle " aria-current="page">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="navTitleStyle">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="navTitleStyle">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="navTitleStyle">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
