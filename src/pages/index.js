import PropTypes from "prop-types";
import { withTranslation } from "src/i18n";
import Header from "src/containers/Header";
import Main from "src/containers/Main";
import Footer from "src/containers/Footer";
import Head from "next/head";

const Homepage = ({ t }) => {
  return (
    <>
      <Head>
        <title>Amir karimi Resume</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="keywords"
          content="resume, React, Reactjs, web, development, js, es5, ecmascript, "
        />

        <meta
          name="description"
          content="resume of an experienced, professional fron end (react js) developer"
        />
      </Head>
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
