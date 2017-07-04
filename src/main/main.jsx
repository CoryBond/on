'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactRouter from 'react-router';
import { Router, Switch, Route } from 'react-router-dom';
import history from '../js/history' 

import Layout from '../pages/Layout.jsx';
import AboutPage from '../pages/AboutPage.jsx';
import ExperiencePage from '../pages/ExperiencePage.jsx';
import ProjectsPage from '../pages/ProjectsPage.jsx';
import ContactPage from '../pages/ContactPage.jsx';
import ResumePage from '../pages/ResumePage.jsx';

// Set Our Routes 
ReactDOM.render(
  <Router history={history}>
    <Layout>
      <Switch>
          <Route exact path="/" component={AboutPage}/>
          <Route path="/About" component={AboutPage}/>
          <Route path="/Experience" component={ExperiencePage}/>
          <Route path="/Projects" component={ProjectsPage}/>
          <Route path="/Resume" component={ResumePage}/>
          <Route path="/Contact" component={ContactPage}>
          </Route>
      </Switch>
    </Layout>
  </Router>,
document.getElementById("main"));