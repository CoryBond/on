import React from "react";

import internetWorld from "../resources/images/internetWorld.jpg";

import * as s from "../styles/component-styles";
import * as pStyle from "../particles/Particles_Params";

const ContactsPage = () => (
  <s.ParticleBackgroundContact>
    <s.ParticleStyle
      params={pStyle.contactParticle}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        minWidth: "100%",
        minHeight: "100%",
        margin: "0px"
      }}
    />
    <div className="mdl-grid portfolio-max-width portfolio-contact">
      <div className="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--4dp">
        <div className="mdl-card__title">
          <h2 className="mdl-card__title-text">Contact</h2>
        </div>
        <div className="mdl-card__media">
          <img className="article-image" src={`${internetWorld}`} alt="" />
        </div>
        <div className="mdl-card__supporting-text">
          <br />
          <p>If you wish to send me a message then you can contact me via:</p>
          <div className="mdl-card__actions mdl-card--border">
            <form action="#" className="" />
          </div>
          <div style={{ textAlign: "left" }}>
            <div>
              Email: <strong>cb.cobond@gmail.com</strong>
            </div>
            <br />
            <div>
              Phone: <strong>1-(845)-490-3907</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  </s.ParticleBackgroundContact>
);

export default ContactsPage;
