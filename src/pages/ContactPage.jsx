'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import * as loc from '../js/Locations.js';

import * as s from '../styles/component-styles.js';
import * as pStyle from '../particles/Particles_Params.js';

import {Textfield, Button, Snackbar} from 'react-mdl';
import Email from '../Js/smtp.js';

export default class ContactsPage extends React.Component {
  constructor(props) {
    super(props);
    

    this.sendMail = this.sendMail.bind(this);
    this.generateBody = this.generateBody.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeBody = this.onChangeBody.bind(this);
    this.handleTimeoutSnackbar = this.handleTimeoutSnackbar.bind(this);
    this.handleClickActionSnackbar = this.handleClickActionSnackbar.bind(this);
    this.handleShowSnackbar = this.handleShowSnackbar.bind(this);
    this.state = {
      re: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
      name: "",
      body: "",
      email: "",
      isEmailValid: false,
      isSnackbarActive: false,
      snackBarMessage: "",
      btnBgColor: '#' +
        Math.floor(Math.random() * 0xFFFFFF).toString(16)
    };
  }

  handleTimeoutSnackbar() {
    this.setState({ isSnackbarActive: false });
  }

  handleClickActionSnackbar() {
    this.setState({
      btnBgColor: ''
    });
  }

  handleShowSnackbar() {
    this.setState({
      snackBarMessage: "Message Sent To cb.cobond@gmail.com",
      isSnackbarActive: true
    });
  }

  sendMail(e){
      e.preventDefault();
      // Email was not put in.
      if(!this.state.isEmailValid) return;
        
        Email.send("cb.cobond@gmail.com",
            "cb.cobond@gmail.com",
            "CoryBond.me - Mail",
            this.generateBody(),
            {token: "ea8a9fc2-61ca-45e3-91dd-9d8289843bc9"});

        //if(confirmation){
            this.handleShowSnackbar();
        /*} else{
            this.handleShowSnackbar();
        }*/
    }

  generateBody(){
    return "Name: " + this.state.name + "\n" +
           "Email: " + this.state.email + "\n"+
            "Note: " + this.state.body;
  }

  onChangeName(e) {
    let newValue = e.target.value;
    this.setState({
      name: newValue
    });
  }

  onChangeEmail(e) {
    let newValue = e.target.value;
    if(this.state.re.test(newValue))
        this.setState({
            isEmailValid: true,
            email: newValue
        });
    else
        this.setState({
            isEmailValid: false,
            email: newValue
        });
  }

  onChangeBody(e) {
    let newValue = e.target.value;
    this.setState({
      body: newValue
    });
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
                            If you wish to contact me in another manner, or if your message is a bit long, then you can contact via:
                        </p>
                        <br/>
                        <div style={{textAlign:"center"}}>
                            <span className="mdl-chip mdl-chip--contact">
                                <span className="mdl-chip__contact mdl-color--black mdl-color-text--white">
                                    EM
                                </span>
                                <span className="mdl-chip__text">
                                    cb.cobond@gmail.com 
                                </span>
                            </span>
                            <span className="mdl-chip mdl-chip--contact">
                                <span className="mdl-chip__contact mdl-color--black mdl-color-text--white">
                                    PH
                                </span>
                                <span className="mdl-chip__text">
                                    1-(845)-490-3907
                                </span>
                            </span>
                        </div>
                        <br/>
                        <br/>
                        <div className="mdl-card__actions mdl-card--border">
                            <form action="#" className="">
                                <Textfield
                                    onChange={this.onChangeName}
                                    pattern="[A-Z,a-z, ]*"
                                    error="Letters and spaces only please."
                                    label="Name..."
                                    floatingLabel
                                />
                                <Textfield
                                    onChange={this.onChangeEmail}
                                    pattern={this.state.re.source}
                                    error="Pleas put in a proper email.."
                                    label="Email..."
                                    floatingLabel
                                />
                                <Textfield
                                    onChange={this.onChangeBody}
                                    label="Enter note"
                                    rows={3}
                                    floatingLabel
                                />

                                    <Button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" type="submit" onClick={this.sendMail}>
                                        Submit
                                    </Button>
                                    <Snackbar
                                        active={this.state.isSnackbarActive}
                                        onClick={this.handleTimeoutSnackbar}
                                        onTimeout={this.handleTimeoutSnackbar}
                                        action="Ok">{this.state.snackBarMessage}</Snackbar>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </s.ParticleBackground_Contact>
    );
  };
};

