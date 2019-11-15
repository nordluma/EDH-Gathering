import React from "react";
import { Link } from "react-router-dom";

import "../../App.css";

function Header() {
  return (
    <header>
      <nav className="top-nav">
        <ul>
          <h1>EDH Gathering</h1>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cards">Cards</Link>
          </li>
          <li>
            <Link to="/commanders">Commanders</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
