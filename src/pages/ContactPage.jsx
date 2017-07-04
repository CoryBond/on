'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import * as loc from '../js/Locations.js';

import * as s from '../styles/component-styles.js';
import * as pStyle from '../particles/Particles_Params.js';

export default class ContactsPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <s.ParticleBackground_Contact>
                <s.ParticleStyle params={pStyle.contactParticle} style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                minWidth: "100%",
                                minHeight: "100%",
                                margin: "0px"
                            }}/>
            <div className="mdl-grid portfolio-max-width portfolio-contact">
                <div className="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--4dp">
                    <div className="mdl-card__title">
                        <h2 className="mdl-card__title-text">Contact</h2>
                    </div>
                    <div className="mdl-card__media">
                        <img className="article-image" src={loc.Images + "vintage_telephone.jpg"}  alt=""/>
                    </div>
                    <div className="mdl-card__supporting-text">
                        <br/>
                        <p>
                            To quickly shoot me a message you may provide provide your name, a contact email, and your message below. This will be sent to my email directly.
                            If you wish to contact me another manner, or if your message is a bit long, then you can contact me with these links:
                        </p>
                        <br/>
                        <p>
                            cb.cobond@gmail.com<br/>
                            1-(845)-490-3907
                        </p>
                        _____________________________________________________________________________________________________________________
                        <br/>
                        <br/>
                        <form action="#" className="">
                            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                <input className="mdl-textfield__input" pattern="[A-Z,a-z, ]*" type="text" id="Name"/>
                                <label className="mdl-textfield__label" htmlFor="Name">Name...</label>
                                <span className="mdl-textfield__error">Letters and spaces only</span>
                            </div>
                            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                <input className="mdl-textfield__input" type="text" id="Email"/>
                                <label className="mdl-textfield__label" htmlFor="Email">Email...</label>
                            </div>
                            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                <textarea className="mdl-textfield__input" type="text" rows="5" id="note"></textarea>
                                <label className="mdl-textfield__label" htmlFor="note">Enter note</label>
                            </div>
                            <p>
                                <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" type="submit">
                                    Submit
                                </button>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </s.ParticleBackground_Contact>
    );
  };
};