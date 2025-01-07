import { Link } from "react-router-dom";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function MobileNavbar({ isOpen, setIsOpen }) {
  const location = useLocation();

  // This is extremely annoying, but tailwind css scans the file
  // for css classes, and I have to write some here in a comment to make sure
  // they are added by tailwind css
  // bg-indigo-300 vorder-indigo-400
  // bg-violet-300 border-violet-400
  // bg-purple-300 border-purple-400
  // bg-fuchsia-300 border-fuchsia-400
  // bg-pink-300 border-pink-400
  // bg-rose-300 border-rose-400

  const getColorFromPath = (pathname) => {
    switch (pathname) {
      case "/home":
        return "indigo";
      case "/texte":
        return "violet";
      case "/blog":
        return "purple";
      case "/resume":
        return "fuchsia";
      case "/kontakt":
        return "pink";
    }
  };

  return (
    <nav className="h-fit">
      <p
        className={`flex bg-${getColorFromPath(location.pathname)}-200 border-b-2 border-solid p-2 font-bold border-${getColorFromPath(location.pathname)}-300 hover:cursor-pointer`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="flex-grow">
          {location.pathname == "/" ? "/home" : location.pathname}
        </span>
        {isOpen ? (
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.22566 4.81096C5.83514 4.42044 5.20197 4.42044 4.81145 
                        4.81096C4.42092 5.20148 4.42092 5.83465 4.81145 6.22517L10.5862 11.9999L4.81151 
                        17.7746C4.42098 18.1651 4.42098 18.7983 4.81151 19.1888C5.20203 19.5793 5.8352 
                        19.5793 6.22572 19.1888L12.0004 13.4141L17.7751 19.1888C18.1656 19.5793 18.7988 
                        19.5793 19.1893 19.1888C19.5798 18.7983 19.5798 18.1651 19.1893 17.7746L13.4146 
                        11.9999L19.1893 6.22517C19.5799 5.83465 19.5799 5.20148 19.1893 4.81096C18.7988 
                        4.42044 18.1657 4.42044 17.7751 4.81096L12.0004 10.5857L6.22566 4.81096Z"
              fill="black"
            />
          </svg>
        ) : (
          <svg className="h-6 w-6" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"
            />
          </svg>
        )}
      </p>
      {isOpen && (
        <ul className="absolute z-10 flex w-full flex-col">
          <li className="flex-auto">
            <Link
              to="/home"
              className="block border-b-2 border-solid border-indigo-300 bg-indigo-200 p-2 text-center font-bold hover:bg-indigo-700 hover:text-white"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Home
            </Link>
          </li>
          <li className="flex-auto">
            <Link
              to="/texte"
              className="block border-b-2 border-solid border-violet-300 bg-violet-200 p-2 text-center font-bold hover:bg-violet-700 hover:text-white"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Texte
            </Link>
          </li>
          <li className="flex-auto">
            <Link
              to="/blog"
              className="block border-b-2 border-solid border-purple-300 bg-purple-200 p-2 text-center font-bold hover:bg-purple-700 hover:text-white"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Blog
            </Link>
          </li>
          <li className="flex-auto">
            <Link
              to="/resume"
              className="block border-b-2 border-solid border-fuchsia-300 bg-fuchsia-200 p-2 text-center font-bold hover:bg-fuchsia-700 hover:text-white"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Resume
            </Link>
          </li>
          <li className="flex-auto">
            <Link
              to="/kontakt"
              className="block border-b-2 border-solid border-pink-300 bg-pink-200 p-2 text-center font-bold hover:bg-pink-700 hover:text-white"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Kontakt
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default MobileNavbar;
