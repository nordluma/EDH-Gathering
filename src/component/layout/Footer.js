import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <h3>Links</h3>

      <Link to="/">Home</Link>
      <h3>Data Sources</h3>
      <h3>About</h3>
    </div>
  );
}

export default Footer;
