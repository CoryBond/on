'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import * as s from '../styles/component-styles.js';
import * as loc from '../js/Locations.js';


import * as pStyle from '../particles/Particles_Params.js';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
            <header className="mdl-layout__header mdl-layout__header--waterfall portfolio-header">
                <div className="mdl-layout__header-row portfolio-logo-row">
                    <span className="mdl-layout__title">
                        <div className="portfolio-logo"></div>
                        <span className="mdl-layout__title"></span>
                    </span>
                </div>
                <div className="mdl-layout__header-row portfolio-navigation-row mdl-layout--fixed-drawer">
                    <nav className="mdl-navigation mdl-typography--body-1-force-preferred-font">
                        <s.HeadBoardLink className="mdl-navigation__link phone-screen-text" to="/About">About</s.HeadBoardLink>
                        <s.HeadBoardLink className="mdl-navigation__link phone-screen-text" to="/Experience">Experience</s.HeadBoardLink>
                        <s.HeadBoardLink className="mdl-navigation__link phone-screen-text" to="/Projects">Projects</s.HeadBoardLink>
                        <s.HeadBoardLink className="mdl-navigation__link phone-screen-text" to="/Resume">Resume</s.HeadBoardLink>
                        <s.HeadBoardLink className="mdl-navigation__link phone-screen-text" to="/Contact">Contact</s.HeadBoardLink>
                    </nav>
                </div>
            </header>
            <main className="mdl-layout__content">
                {this.props.children}
            </main>
        </div>
    );
  };
};

            /*<footer className="mdl-mini-footer">
                <div className="mdl-mini-footer__left-section">
                    <div className="mdl-logo">Cory Bond</div>
                </div>
                <div className="mdl-mini-footer__right-section">
                    <ul className="mdl-mini-footer__link-list">
                        <span>Software Developer</span>
                    </ul>
                </div>
            </footer>    */       

/*particlesJS.load('particles-js', '../resources/particles.json', function() {
  console.log('callback - particles.js config loaded');
});*/

                        /*<li><a href="#"></a></li>
                        <li><a href="#">Privacy & Terms</a></li>*/