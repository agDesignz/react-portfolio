import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { usePageContext } from "../providers/PageProvider";

export default function Nav({ navOpen }) {
  const { currentPage, setMenuOpen, menuOpen } = usePageContext();
  const params = useParams();
  const pages = [
    { page: "Top", route: "#" },
    { page: "About", route: "#about" },
    { page: "Portfolio", route: "#portfolio" },
    { page: "Skills", route: "#skills" },
    { page: "Contact", route: "#contact" },
  ];

  function checkHandler() {
    setMenuOpen(!menuOpen);
  }

  return (
    <>
      {/* <PageProvider> */}
      <nav className={`nav${menuOpen ? " reveal" : ""}`}>
        {pages.map(({ page, route }) => (
          <div
            className={`nav__item${
              route === currentPage ? " nav__item--active" : ""
            }`}
            key={page}
          >
            <a href={route} onClick={checkHandler}>
              {page}
            </a>
          </div>
        ))}
      </nav>
      {/* </PageProvider> */}
      <div className="hamburger">
        <input
          type="checkbox"
          className="hamburger__checkbox"
          id="nav-toggle"
          checked={menuOpen}
          onChange={checkHandler}
        />
        <h4 className="hamburger__title">MENU</h4>
        <label
          htmlFor="nav-toggle"
          className="hamburger__button hamburger__button--corner"
        >
          <span className="hamburger__icon">&nbsp;</span>
        </label>
      </div>
    </>
  );
}
