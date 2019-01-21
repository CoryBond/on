import React from "react";
import PropTypes from "prop-types";

import * as s from "../styles/component-styles";

const Layout = props => {
  const { children } = props;
  return (
    <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <header className="mdl-layout__header mdl-layout__header--waterfall portfolio-header">
        <div className="mdl-layout__header-row portfolio-logo-row">
          <span className="mdl-layout__title">
            <div className="portfolio-logo" />
            <span className="mdl-layout__title" />
          </span>
        </div>
        <div className="mdl-layout__header-row portfolio-navigation-row mdl-layout--fixed-drawer">
          <nav className="mdl-navigation mdl-typography--body-1-force-preferred-font">
            <s.HeadBoardLink
              className="mdl-navigation__link phone-screen-text"
              to="/About"
            >
              About
            </s.HeadBoardLink>
            <s.HeadBoardLink
              className="mdl-navigation__link phone-screen-text"
              to="/Experience"
            >
              Experience
            </s.HeadBoardLink>
            <s.HeadBoardLink
              className="mdl-navigation__link phone-screen-text"
              to="/Projects"
            >
              Projects
            </s.HeadBoardLink>
            <s.HeadBoardLink
              className="mdl-navigation__link phone-screen-text"
              to="/Resume"
            >
              Resume
            </s.HeadBoardLink>
            <s.HeadBoardLink
              className="mdl-navigation__link phone-screen-text"
              to="/Contact"
            >
              Contact
            </s.HeadBoardLink>
          </nav>
        </div>
      </header>
      <main className="mdl-layout__content">{children}</main>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default Layout;
