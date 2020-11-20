import React from "react";
import PropTypes from "prop-types";

function Skill({ name, percent }) {
  return (
    <div style={{ marginTop: 20 }}>
      <h3 style={{ marginBottom: 5 }}>{name}</h3>
      <div className="progress__container">
        <div className="progress__value" style={{ width: percent + "%" }} />
      </div>
    </div>
  );
}

Skill.propTypes = {
  name: PropTypes.string.isRequired,
  percent: PropTypes.number.isRequired,
};

export default Skill;
