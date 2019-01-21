import React from "react";

import vintageTelephone from "../resources/images/vintage_telephone.jpg";

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
          <img className="article-image" src={`${vintageTelephone}`} alt="" />
        </div>
        <div className="mdl-card__supporting-text">
          <br />
          <p>
            To quickly shoot me a message you may provide provide your name, a
            contact email, and your message below. This will be sent to my email
            directly. If you wish to contact me in another manner, or if your
            message is a bit long, then you can contact via:
          </p>
          <br />
          <div style={{ textAlign: "center" }}>
            <span className="mdl-chip mdl-chip--contact">
              <span className="mdl-chip__contact mdl-color--black mdl-color-text--white">
                EM
              </span>
              <span className="mdl-chip__text">cb.cobond@gmail.com</span>
            </span>
            <span className="mdl-chip mdl-chip--contact">
              <span className="mdl-chip__contact mdl-color--black mdl-color-text--white">
                PH
              </span>
              <span className="mdl-chip__text">1-(845)-490-3907</span>
            </span>
          </div>
          <br />
          <br />
          <div className="mdl-card__actions mdl-card--border">
            <form action="#" className="" />
          </div>
        </div>
      </div>
    </div>
  </s.ParticleBackgroundContact>
);

export default ContactsPage;
