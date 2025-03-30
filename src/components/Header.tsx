import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div style={{ display: "flex", alignItems: "center" }}>
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <h1 style={{ margin: 0, fontSize: "24px" }}>校园售书平台</h1>
        </Link>
      </div>
    </header>
  );
};

export default Header;
