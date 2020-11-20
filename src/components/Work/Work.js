import PropTypes from "prop-types";
import withIntersection from "src/components/withIntersection/withIntersection";
import BackgroundImage from "src/components/BackgroundImage/BackgroundImage";

function Work({ link, heading, description, image }) {
  return (
    <a className="w-100 h-100" href={link} target="_blank">
      <BackgroundImage
        src={image}
        alt={heading}
        className="h-100 w-100 bg-secondary"
      />
      <div className="work__overlay">
        <h5>{heading}</h5>
        <p>{description}</p>
        <div className="link">
          <span className="fas fa-link" />
        </div>
      </div>
    </a>
  );
}

Work.propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default withIntersection(
  Work,
  { opacity: 0, transform: "scale(0)" },
  { opacity: 1, transform: "scale(1)" },
  { duration: 500 }
);
