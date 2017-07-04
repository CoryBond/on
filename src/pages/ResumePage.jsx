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
        <s.ParticleBackground_Resume scrolling="no">
                <s.ParticleStyle params={pStyle.resumeParticle} style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%"
                            }}/>
             <div className="mdl-grid portfolio-max-width">
               <div className="mdl-card experience-card">
                  <s.ResumeFrame src="https://www.corybond.me/resume.pdf"/>
                </div>
            </div>
          </s.ParticleBackground_Resume>
    );
  };
};