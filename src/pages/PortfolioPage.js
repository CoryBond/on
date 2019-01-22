import React from "react";
import velocity from "../resources/images/velocity.jpg";
import citibank from "../resources/images/citibank.gif";
import lighthouse from "../resources/images/AVLighthouse.PNG";

import OneColumnCard from "../components/OneColumnCard";

import * as s from "../styles/component-styles";
import * as pStyle from "../particles/Particles_Params";

const ExperiencePage = params => (
  <s.ParticleBackgroundExperiences>
    <s.ParticleStyle
      params={pStyle.experienceParticle}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        minWidth: "100%",
        minHeight: "100%"
      }}
    />
    <div className="mdl-grid portfolio-max-width">
      <OneColumnCard
        title="Full Stack Engineer"
        image={`${lighthouse}`}
        href="https://activeviam.com/"
        linkName="ActiveViam Website"
        message={
          <React.Fragment>
            Full Stack Engineer for ActiveViam, a company that flagships the
            ActivePivot analystics engine. A cube based analytics engine we
            consulte with banks, financial instituations and retail.
            <br />
            <br />
            Develop in house software solutions for our clients to meet
            regularitory needs. Must also regularly consolute on site with
            clients to create POCs, setup full stack security solutions and
            build custom User Interfaces on top of ActivePivot.
            <br />
            <br />
            Developing with software tools <strong>JS</strong>,{" "}
            <strong>React</strong>, <strong>Java</strong>,{" "}
            <strong>Spring</strong>, <strong>MDX</strong> and{" "}
            <strong>MDX</strong>.
          </React.Fragment>
        }
      />
      <OneColumnCard
        title="Velocity UI Developer"
        image={`${velocity}`}
        href="https://www.citivelocity.com/"
        linkName="Velocity Website"
        message={
          <React.Fragment>
            UI Developer for Citi Velocity, a cross-product analystics, research
            and e-trading platform for ICG clients. Have and am continuing to
            add new business logic and features for our code base as well as
            actively handling team prod issues and releases.
            <br />
            <br />
            Developed with software tools <strong>JS</strong>,{" "}
            <strong>Angular</strong>, <strong>C#</strong>, <strong>WPF</strong>,{" "}
            <strong>Swift</strong> and <strong>Electron</strong>.
          </React.Fragment>
        }
      />
      <OneColumnCard
        title="Citi Software Developer"
        image={`${citibank}`}
        href="https://www.citivelocity.com/"
        linkName="Velocity Website"
        message={
          <React.Fragment>
            Backend Developer for server routing for Citi Velocity. Developed
            and managed several components to the server system to better
            enhance its functionalities and to add new ones. Designed and built
            several projects for the team that improved debugging and reporting
            of software bugs, networking and latency issues.
            <br />
            <br />
            Utilized software tools <strong>Java</strong>,{" "}
            <strong>ElasticSearch</strong>, <strong>iText</strong>,{" "}
            <strong>Spring</strong>, <strong>Camel</strong>,{" "}
            <strong>Maven</strong> and <strong>Junit</strong>.
          </React.Fragment>
        }
      />
    </div>
  </s.ParticleBackgroundExperiences>
);

export default ExperiencePage;
