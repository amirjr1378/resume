import PropTypes from "prop-types";
import { withTranslation } from "src/i18n";
import { HashLink as Link } from "src/components/HashLink";
import withIntersection from "src/components/withIntersection";
import Navbar from "./Navbar";
import Typewriter from "typewriter-effect/dist/core";
import { useEffect } from "react";

function Header({ t }) {
  useEffect(() => {
    const descriptionTypeWritter = new Typewriter("#description", {
      autoStart: true,
      loop: true,
    });
    descriptionTypeWritter.typeString(t("author_description")).start();
  });

  const Hero = withIntersection(
    (props) => {
      return (
        <div className="landing__header__content">
          <h1>{t("author")}</h1>
          <br />
          <h2 id="description" />
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
