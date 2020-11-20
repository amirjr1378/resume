import PropTypes from "prop-types";

function withIntersection(Component, children, ...props) {
  return () => <Component />;
}

withIntersection.propTypes = {};

export default withIntersection;
