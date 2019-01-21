import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./Routes";
import Layout from "../pages/Layout";

// Set Our Routes
ReactDOM.render(
  <Router basename="/">
    <Layout>
      <Routes />
    </Layout>
  </Router>,
  document.getElementById("main")
);
