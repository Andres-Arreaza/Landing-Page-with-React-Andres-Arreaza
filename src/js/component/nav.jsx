import React from "react";

export const Nav = () => {
  const textos = {
    titulo: "Start Bootstrap",
    link1: "Home",
    link2: "About",
    link3: "Services",
    link4: "Contact"
  }
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
          <div className="container-fluid w-100 px-5">
            <a className="navbar-brand text-light" href="#">{textos.titulo}</a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNav"
              role="navigation"
            >
              <ul className="navbar-nav ms-3" role="menubar">
                <li className="nav-item" role="menuitem">
                  <a className="nav-link" aria-current="page" href="#">{textos.link1}</a>
                </li>
                <li className="nav-item" role="menuitem">
                  <a className="nav-link" href="#">{textos.link2}</a>
                </li>
                <li className="nav-item" role="menuitem">
                  <a className="nav-link" href="#Services">{textos.link3}</a>
                </li>
                <li className="nav-item" role="menuitem">
                  <a className="nav-link" href="#Contact">{textos.link4}</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
};
