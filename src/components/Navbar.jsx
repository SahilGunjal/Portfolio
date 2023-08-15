import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../style";
import { navLinks } from "../constants";
import { menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-3 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}>
          <img
            src="/logo4.png"
            alt="logo"
            className="w-17 h-20 object-contain"
          />
          <p className="text-white text-[24px] font-bold font-mono cursor-pointer flex">
            Sahil&nbsp;
            <span className="text-orange-400 font-mono">
              {" "}
              Gunjal
            </span>&nbsp;{" "}
            <span className="lg:block hidden font-mono">|&nbsp;PortFolio </span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          <a
            href="https://drive.google.com/drive/folders/11VzxpPaM1NjydAIDeIqIndleESBWouVf?usp=drive_link"
            className="text-secondary text-[18px] hover:text-white cursor-pointer font-medium">
            Resume
          </a>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] 
            font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}>
              <a href={`#${link.id}`}> {link.title} </a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={!toggle ? menu : close}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10
          rounded-lg`}>
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              <a
                href="https://drive.google.com/drive/folders/11VzxpPaM1NjydAIDeIqIndleESBWouVf?usp=drive_link"
                className="text-secondary text-[18px] hover:text-white cursor-pointer font-medium">
                Resume
              </a>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } hover:text-blue-200 font-poppins font-medium
            cursor-pointer`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}>
                  <a href={`#${link.id}`}> {link.title} </a>
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