'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import * as loc from '../js/Locations.js';
import Particles from 'react-particles-js';

import * as s from '../styles/component-styles.js';
import * as pStyle from '../particles/Particles_Params.js';

export default class AboutPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
            <s.ParticleBackground_About>
                <s.ParticleStyle params={pStyle.aboutParticle} style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                minWidth: "100%",
                                minHeight: "100%",
                                margin: "0px"
                            }}/>
                <div className="mdl-grid portfolio-max-width">
                    <div className="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--4dp">
                        <div className="mdl-card__title">
                            <h2 className="mdl-card__title-text">About</h2>
                        </div>
                        <div className="mdl-card__media">
                            <img className="article-image" src={loc.Images + "me_banner.jpg"} alt=""/>
                        </div>
                        <div className="mdl-grid portfolio-copy">
                            <h3 className="mdl-cell mdl-cell--12-col mdl-typography--headline">Introduction</h3>
                            <div className="mdl-cell mdl-cell--8-col mdl-card__supporting-text no-padding ">
                                <p>
                                    I am a determined software engineer looking to make an impact for my clients and teammates.<br/>
                                    I love coding, technology and working with people.<br/>
                                    With my experience and skills I think I would make a valuable member of any company.<br/>
                                </p>
                            </div>
                            <h3 className="mdl-cell mdl-cell--12-col mdl-typography--headline">Background</h3>
                            <div className="mdl-cell mdl-cell--8-col mdl-card__supporting-text no-padding ">
                                <p>
                                    A graduate from Binghamton University I'm a full stack engineer working for Citi for the last 3-4 years. 
                                    The major application I have worked on throughout that time were for both the server and UI components for Citi's Velocity e-trading platform.
                                </p>
                                <p>
                                    Currently I am helping my front end team add new features to our UI and transition our codebase to a more Javascript based stack. 
                                    I have experience in object oriented programming, full stack development and functional programming.
                                </p>
                            </div>
                            <h3 className="mdl-cell mdl-cell--12-col mdl-typography--headline">Goals</h3>
                            <div className="mdl-cell mdl-cell--8-col mdl-card__supporting-text no-padding ">
                                <p>
                                    I find the front-development world to be exciting, engaging and fun. 
                                    Unlike in other development worlds, front-end technologies are constantly changing and shifting paradigms, which exposes you to many different concepts and technologies. 
                                    The end result of all of this is a diverse work environment that creates stunning User Interfaces for clients. Continuing forward with my career I would like to develop more in this space.
                                </p>
                                <p>
                                    I have found that even after graduating from college I learned a lot of technical and business related skills in the last 3 years of my past positions and feel as though I will continue this trend way out into my career.
                                </p>
                            </div>
                            <h3 className="mdl-cell mdl-cell--12-col mdl-typography--headline">Personal</h3>
                            <div className="mdl-cell mdl-cell--8-col mdl-card__supporting-text no-padding ">
                                <p>
                                    On my free time I like to make coding projects to learn <strong>Single Page Applications</strong>, <strong>Javascript/ES6/React</strong>, <strong>Python</strong>, <strong>Web Development</strong> and general scripting. I host and take care of my own website at my home.
                                </p>
                                <p>
                                    I both live and love NYC. Currently a Brooklynite I enjoy what the city has to offer like opera, exhibits, theater, restruants, history, and more. As far as I can see I will be living around the NYC area for a long time.
                                </p>
                                <p>
                                    I am board games hobbiest. If you never heard of <strong>Twilight Struggle</strong> then your missing out.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </s.ParticleBackground_About>
    );
  };
};

                            