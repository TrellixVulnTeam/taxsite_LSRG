import { Link } from "react-router-dom";
import { useState, React } from "react";
// importing icons
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  const [menu, setMenu] = useState("hidden");
  const [menuIcon, setMenuIcon] = useState(faBars);

  const menuToggleHangler = (e) => {
    // toggleing menu
    menu === "hidden"
      ? setMenu("flex") && setMenu(faBars)
      : setMenu("hidden") && setMenuIcon(faXmark);
    // changing icon
    if (menu === "flex") {
      setMenuIcon(faBars);
    } else if (menu === "hidden") {
      setMenuIcon(faXmark);
    }
  };

  return (
    <nav className="header-area bg-amber-600 text-slate-50 flex justify-between items-center pt-2 pb-2 ">
      <h1 className="font-bold text-md ml-5 md:ml-10 lg:ml-20 md:text-xl lg:text-2xl ">
        Iman & Associates Ltd.
      </h1>
      <FontAwesomeIcon
        icon={menuIcon}
        className="mr-5 menu-icon lg:hidden md:hidden"
        size="2x"
        onClick={menuToggleHangler}
      />
      {/* styling for resposive navbar */}
      <div
        className={`link-area flex flex-col z-10 absolute top-10 right-5 items-center bg-yellow-600 p-4 rounded border-yellow-500 border-4 md:flex md:relative md:relative md:top-0 md:left-0 md:flex-row md:bg-transparent md:border-none md:p-0  ${menu}`}
      >
        <ul className="text-lg md:text-sm lg:text-lg text-center mb-4 flex flex-col md:flex-row md:mb-0 md:gap-4 md:mr-8">
          <li className="mb-2 md:mb-0">
            <Link to="/taxsite">Home</Link>
          </li>
          <li className="mb-2 md:mb-0">
            <Link to="/taxsite/about">About</Link>
          </li>
          <li>
            <Link to="/taxsite/contact">Contact</Link>
          </li>
        </ul>
        <button className="btn-primary bg-sky-600	hover:bg-sky-700 pr-4 pl-4 pt-2 pb-2 rounded text-xl md:text-lg lg:text-xl md:mr-10 lg:mr-20">
          Sign In
        </button>
      </div>
    </nav>
  );
};
export default Header;
