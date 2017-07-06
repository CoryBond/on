'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import * as loc from '../js/Locations.js';

import * as s from '../styles/component-styles.js';
import * as pStyle from '../particles/Particles_Params.js';

export default class ExperiencePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <s.ParticleBackground_Experiences>
                <s.ParticleStyle params={pStyle.experienceParticle} style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                minWidth: "100%",
                                minHeight: "100%",
                            }}/>
             <div className="mdl-grid portfolio-max-width">
                <div className="mdl-cell mdl-card mdl-shadow--4dp experience-card">
                    <div className="mdl-card__media">
                        <img className="experience-image" src={loc.Images + "velocity.jpg"}  alt=""/>
                    </div>
                    <div className="mdl-card__title">
                        <h2 className="mdl-card__title-text">Velocity UI Developer</h2>
                    </div>
                    <div className="mdl-card__supporting-text">
                        UI Developer for Citi Velocity, a cross-product analystics, research and e-trading platform for ICG clients. 
                        Have and am continuing to add new business logic and features for our code base as well as actively handling team prod issues and releases. 
                        <br/>Doing development with software tools <strong>JS</strong>, <strong>Angular</strong>, <strong>C#</strong>, <strong>WPF</strong>, <strong>Swift</strong> and <strong>Electron</strong>.
                    </div>
                    <div className="mdl-card__actions mdl-card--border">
                        <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-button--accent" href="https://www.citivelocity.com/">Velocity Website</a>
                    </div>
                </div>
                <div className="mdl-cell mdl-card mdl-shadow--4dp experience-card">
                    <div className="mdl-card__media">
                        <img className="experience-image" src={loc.Images + "velocity.jpg"}  alt=""/>
                    </div>
                    <div className="mdl-card__title">
                        <h2 className="mdl-card__title-text">Citi Software Developer</h2>
                    </div>
                    <div className="mdl-card__supporting-text">
                        Assistant Developer for a cross-product analystics for Citi Velocity. 
                        Developed and managed several components to the server system to better enhance its functionalities and to add new ones. 
                        Designed and built several projects for the team that improved debugging and reporting of software bugs, networking and latency issues. 
                        <br/>Utilized software tools <strong>Java</strong>, <strong>ElasticSearch</strong>, <strong>iText</strong>, <strong>Spring</strong>, <strong>Camel</strong>, <strong>Maven</strong> and <strong>Junit</strong>.
                    </div>
                    <div className="mdl-card__actions mdl-card--border">
                        <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-button--accent" href="https://www.citivelocity.com/">Velocity Website</a>
                    </div>
                </div>
                <div className="mdl-cell mdl-card mdl-shadow--4dp experience-card">
                    <div className="mdl-card__media">
                        <img className="experience-image" src={loc.Images + "citibank.gif"}  alt=""/>
                    </div>
                    <div className="mdl-card__title">
                        <h2 className="mdl-card__title-text">Citi Software Analyst</h2>
                    </div>
                    <div className="mdl-card__supporting-text">
                        ASPEN, an asset servicing platform. Worked mostly on platform code across several Hessian based components to replace legacy systems. 
                        <br/>Developed with software tools <strong>Java</strong>, <strong>Hessian</strong>, <strong>Maven</strong>, <strong>GWT</strong> and <strong>Drools</strong>.
                    </div>
                </div>
            </div>
        </s.ParticleBackground_Experiences>
    );
  };
};