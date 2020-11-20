import PropTypes from "prop-types";

function HashLink({ to, children, ...props }) {
  const handleClick = (e) => {
    const domElement = document.querySelector(to);
    if (domElement) {
      e.preventDefault();
      domElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <a href={to} {...props} onClick={handleClick}>
      {children}
    </a>
  );
}

HashLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.any,
};

export default HashLink;
