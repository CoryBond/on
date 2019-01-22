import React from "react";
import { Switch, Route } from "react-router-dom";

import AboutPage from "../pages/AboutPage";
import PortfolioPage from "../pages/PortfolioPage";
import ProjectsPage from "../pages/ProjectsPage";
import ContactPage from "../pages/ContactPage";
import ResumePage from "../pages/ResumePage";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={AboutPage} />
    <Route path="/About" component={AboutPage} />
    <Route path="/Portfolio" component={PortfolioPage} />
    <Route path="/Projects" component={ProjectsPage} />
    <Route path="/Resume" component={ResumePage} />
    <Route path="/Contact" component={ContactPage} />
  </Switch>
);

export default Routes;
