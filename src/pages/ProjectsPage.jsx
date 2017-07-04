'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import * as loc from '../js/Locations.js';

import * as s from '../styles/component-styles.js';
import * as pStyle from '../particles/Particles_Params.js';

export default class ProjectsPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <s.ParticleBackground_Projects>
                <s.ParticleStyle params={pStyle.projectsParticle} style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                minHeight: "100%",
                                margin: "0px"
                            }}/>
             <div className="mdl-grid portfolio-max-width">
                <div className="mdl-cell mdl-card mdl-shadow--4dp portfolio-card">
                    <div className="mdl-card__media">
                        <img className="article-image" src={loc.Images + "MineSweeper_Thumbnail.png"}  alt=""/>
                    </div>
                    <div className="mdl-card__title">
                        <h2 className="mdl-card__title-text">MineSweeper</h2>
                    </div>
                    <div className="mdl-card__supporting-text">
                        A MineSweeper game made with both React and Redux. 
                    </div>
                    <div className="mdl-card__actions mdl-card--border">
                        <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-button--accent" href="https://corybond.github.io/MineSweeper-React-Redux/">Live Demo</a>
                    </div>
                </div>
            </div>
        </s.ParticleBackground_Projects>
    );
  };
};