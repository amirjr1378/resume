import PropTypes from "prop-types";
import { i18n, Link, withTranslation } from "src/i18n";
import Header from "src/components/Header";
import Footer from "src/components/Footer";
import { useTheme } from "src/contexts/theme";

const Homepage = ({ t }) => {
  const { toggleTheme } = useTheme();
  return (
    <>
      <main>
        <Header title={t("h1")} />
        <div>
          <button
            type="button"
            onClick={() =>
              i18n.changeLanguage(i18n.language === "en" ? "fa" : "en")
            }
          >
            {t("change-locale")}
          </button>
          <Link href="/second-page">
            <button type="button">{t("to-second-page")}</button>
          </Link>
        </div>
        <div>
          <button onClick={toggleTheme}>{t("toggle-theme")}</button>
        </div>
      </main>
      <Footer />
    </>
  );
};

Homepage.getInitialProps = async () => ({
  namespacesRequired: ["common", "footer"],
});

Homepage.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(Homepage);
