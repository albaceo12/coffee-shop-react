import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import { links } from "../../Data";
import { v4 as uuidv4 } from "uuid";
import { Link, animateScroll } from "react-scroll";
import { FaStream } from "react-icons/fa";
import "./Header.css";
function Header() {
  const [scrollheader, setscrollheader] = useState(false);
  const [showmenu, setshowmenu] = useState(false);
  const [scrollheight, setscrollheight] = useState(0);
  const changeheader = () => {
    if (window.scrollY >= 40) {
      setscrollheader(true);
    } else {
      setscrollheader(false);
    }
  };
  const scrollsfunc = () => {
    // setscrollheight(window.scrollY);
    if (window.scrollY - 144 <= 0) {
      console.log(window.scrollY - 144);
      setscrollheight(window.scrollY - 144);
    } else {
      setscrollheight(0);
    }
  };
  const scrolltop = () => {
    animateScroll.scrollToTop();
  };
  useEffect(() => {
    window.addEventListener("scroll", changeheader);
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", scrollsfunc);
  }, []);

  return (
    <>
      {showmenu && (
        <div
          className="backdrop-menu"
          onClick={() => setshowmenu((pre) => !pre)}
        ></div>
      )}
      <header
        className={`${scrollheader ? "scroll-header-down" : ""} header`}
        style={{
          top: `${scrollheader ? scrollheight : "0"}px`,
        }}
      >
        <nav className="nav container">
          <Link to="home" onClick={scrolltop} className="nav__logo">
            <img src={logo} alt="" className="nav__logo-img" />
          </Link>
          <div className={`${showmenu ? "show-menu" : ""} nav__menu`}>
            <ul className="nav__list">
              {links.map(({ name, path }) => (
                <li className="nav__item" key={uuidv4()}>
                  <Link
                    spy={true}
                    smooth={true}
                    offset={-60}
                    duration={500}
                    hashSpy={true}
                    to={path}
                    className="nav__link"
                    onClick={() =>
                      setshowmenu((pre) => {
                        if (pre) {
                          return !pre;
                        }
                      })
                    }
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="nav__toggle"
            onClick={() => setshowmenu((pre) => !pre)}
          >
            <FaStream />
          </div>
        </nav>
      </header>
    </>
  );
}
export default Header;
