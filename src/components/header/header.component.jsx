import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/original (1).svg";

import "./header.styles.scss";

const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/swap-shop">
        SWAP SHOP
      </Link>
      <Link className="option" to="/swap-shop">
        CONTACT
      </Link>
    </div>
  </div>
);

export default Header;
