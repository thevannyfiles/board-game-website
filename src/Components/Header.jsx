import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <div>
        <a href="">
          <span></span>
        </a>
      </div>
      <ui>
        <li>
          <NavLink to="/" activeClassName="selected">
            Our Story
          </NavLink>
        </li>
        <li>
          <NavLink to="/" activeClassName="selected">
            {" "}
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/" activeClassName="selected">
            {" "}
            Portfolio{" "}
          </NavLink>
        </li>
      </ui>
      <div onClick={handleNav} className="block md:hidden text-white z-40">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={
          nav
            ? "z-30 text-gray-300 fixed h-[50%] left-0 top-0 w-full bg-[#202121] ease-in-out"
            : "fixed left-[100%]"
        }
      >
        <h1></h1>
        <ul>
          <li>
            <NavLink to="/" activeClassName="selected">
              Our Story
            </NavLink>
          </li>
          <li>
            <NavLink to="/" activeClassName="selected">
              {" "}
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/" activeClassName="selected">
              {" "}
              Portfolio{" "}
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
