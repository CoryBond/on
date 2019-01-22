import React from "react";
import PropTypes from "prop-types";

const OneColumnCard = props => {
  const { title, message, image, href, linkName } = props;
  return (
    <div className="mdl-cell mdl-card mdl-shadow--4dp experience-card">
      <div className="mdl-card__media">
        <img className="experience-image" src={image} alt="" />
      </div>
      <div className="mdl-card__title">
        <h2 className="mdl-card__title-text">{title}</h2>
      </div>
      <div className="mdl-card__supporting-text">{message}</div>
      <div className="mdl-card__actions mdl-card--border">
        <a
          className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-button--accent"
          href={href}
        >
          {linkName}
        </a>
      </div>
    </div>
  );
};

OneColumnCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  message: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
    .isRequired,
  linkName: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired
};

export default OneColumnCard;
