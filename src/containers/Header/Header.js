import PropTypes from "prop-types";
import { withTranslation } from "src/i18n";
import { HashLink as Link } from "src/components/HashLink";
import withIntersection from "src/components/withIntersection";
import Navbar from "./Navbar";

function Header({ t }) {
  const Hero = withIntersection(
    (props) => {
      return (
        <div className="landing__header__content">
          <h1>{t("author")}</h1>
          <br />
          <h2>{t("author_description")}</h2>
          <Link
            to="#works"
            style={{ marginTop: 30 }}
            className="btn btn--primary"
          >
            {t("works")}
          </Link>
        </div>
      );
    },
    { opacity: 0 },
    { opacity: 1 },
    { duration: 700 }
  );

  return (
    <header className="landing__header">
      <div className="header__bg" />
      <Navbar />
      <Hero />
    </header>
  );
}

Header.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(Header);
