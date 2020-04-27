import React from "react";

import "./homepage.styles.scss";

const HomePage = () => (
  <div className="homepage">
    <div className="directory-menu">
      <div className="menu-item">
        <div className="content">
          <h1 className="title">ART</h1>
          <span className="subtitle">BROWSE</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">JEWELRY</h1>
          <span className="subtitle">BROWSE</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">SPORTS MEMORABILIA</h1>
          <span className="subtitle">BROWSE</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">COMICS</h1>
          <span className="subtitle">BROWSE</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">STAMPS</h1>
          <span className="subtitle">BROWSE</span>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
