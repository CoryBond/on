import React from "react";
import giphFindImage from "../res/images/GiphFind.png";
import mineSweeperThumbnail from "../res/images/MineSweeper_Thumbnail.png";
import infiniteScroll from "../res/images/InfiniteScroll.png";

import * as s from "../styles/component-styles";
import * as pStyle from "../particles/Particles_Params";

const ProjectsPage = props => (
  <s.ParticleBackgroundProjects>
    <s.ParticleStyle
      params={pStyle.projectsParticle}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        minHeight: "100%",
        margin: "0px"
      }}
    />
    <div className="mdl-grid portfolio-max-width">
      <div className="mdl-cell mdl-card mdl-shadow--4dp portfolio-card">
        <div className="mdl-card__media">
          <img className="article-image" src={`${giphFindImage}`} alt="" />
        </div>
        <div className="mdl-card__title">
          <h2 className="mdl-card__title-text">GiphFind</h2>
        </div>
        <div className="mdl-card__supporting-text">
          A website that interacts with the Giph API for finding giphs. Allows a
          user to serach giphs, shuffle gifs, and favorite/store giphs them even
          when the user logs off.
        </div>
        <div className="mdl-card__actions mdl-card--border">
          <a
            className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-button--accent"
            href="https://corybond.github.io/GiphFind/"
          >
            Live Demo
          </a>
        </div>
      </div>
      <div className="mdl-cell mdl-card mdl-shadow--4dp portfolio-card">
        <div className="mdl-card__media">
          <img
            className="article-image"
            src={`${mineSweeperThumbnail}`}
            alt=""
          />
        </div>
        <div className="mdl-card__title">
          <h2 className="mdl-card__title-text">MineSweeper</h2>
        </div>
        <div className="mdl-card__supporting-text">
          A MineSweeper game made with both React and Redux.
        </div>
        <div className="mdl-card__actions mdl-card--border">
          <a
            className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-button--accent"
            href="https://corybond.github.io/MineSweeper-React-Redux/"
          >
            Live Demo
          </a>
        </div>
      </div>
      <div className="mdl-cell mdl-card mdl-shadow--4dp portfolio-card">
        <div className="mdl-card__media">
          <img className="article-image" src={`${infiniteScroll}`} alt="" />
        </div>
        <div className="mdl-card__title">
          <h2 className="mdl-card__title-text">AutoComplete Infinite Scroll</h2>
        </div>
        <div className="mdl-card__supporting-text">
          A generic infinite scroll that also implements autocomplete features.
        </div>
        <div className="mdl-card__actions mdl-card--border">
          <a
            className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-button--accent"
            href="https://corybond.github.io/AutoComplete-Infinite-Scroll/"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  </s.ParticleBackgroundProjects>
);

export default ProjectsPage;
