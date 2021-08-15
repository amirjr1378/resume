import PropTypes from "prop-types";
function BackgroundImage({ src, ...props }) {
  const style = {
    backgroundImage: `url(${src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "rgba(0,0,0,.1)",
    width: "100%",
    height: "100%",
  };
  return <div style={style} {...props} />;
}

BackgroundImage.propTypes = {
  src: PropTypes.string.isRequired,
};

export default BackgroundImage;
