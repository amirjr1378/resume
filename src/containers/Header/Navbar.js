import { useEffect } from "react";
import PropTypes from "prop-types";
import { i18n, withTranslation, Link as NextLink } from "src/i18n";
import { useTheme } from "src/contexts/theme";
import { HashLink as Link } from "src/components/HashLink";

function Navbar({ t }) {
  const { toggleTheme } = useTheme();

  const toggleLanguage = () => {
    if (i18n.language === "en") {
      i18n.changeLanguage("fa");
    } else {
      i18n.changeLanguage("en");
    }
  };

  useEffect(() => {
    if (i18n.language === "fa") {
      document.querySelector("html").setAttribute("lang", "fa");
      document.querySelector("html").setAttribute("dir", "rtl");
    } else {
      document.querySelector("html").setAttribute("lang", "en");
      document.querySelector("html").setAttribute("dir", "ltr");
    }
  }, [i18n.language]);

  useEffect(() => {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.top = "-60px";
      }
      prevScrollpos = currentScrollPos;
    };
  }, []);

  return (
    <>
      <div className="offset-top">
        <div className="navbar-container" id="navbar">
          <ul className="display--flex justify-content--around container navbar">
            <li>
              <NextLink href="/">
                <a>{t("home")}</a>
              </NextLink>
            </li>

            <li>
              <Link smooth to="#about">
                {t("about_me")}
              </Link>
            </li>

            <li>
              <Link smooth to="#skills">
                {t("skills")}
              </Link>
            </li>

            <li>
              <a onClick={toggleTheme}>
                <span className="fas fa-sun" />
                {/* <FontAwesomeIcon icon={["fas", "sun"]} /> */}
              </a>
            </li>
            <li>
              <a onClick={toggleLanguage}>
                <span className="fas fa-globe-europe" />
                {/* <FontAwesomeIcon icon={["fas", "globe-europe"]} /> */}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

Navbar.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(Navbar);
