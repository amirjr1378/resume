import PropTypes from "prop-types";
import { withTranslation } from "src/i18n";
import Header from "src/containers/Header";
import Main from "src/containers/Main";
import Footer from "src/containers/Footer";

const Homepage = ({ t }) => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

Homepage.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(Homepage);
