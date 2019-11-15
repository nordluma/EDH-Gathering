import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div style={footerStyle}>
      <h3 style={linkHeaderStyle}>Links</h3>

      <Link to="/">Home</Link>

      <h3 style={linkHeaderStyle}>Data Sources</h3>

      <h3 style={linkHeaderStyle}>About</h3>
    </div>
  );
}

const footerStyle = {
  background: "#333"
};

const linkHeaderStyle = {
  color: "#fff"
};

export default Footer;
