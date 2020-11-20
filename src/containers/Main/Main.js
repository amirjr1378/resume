import { withTranslation } from "src/i18n";
import { works } from "src/works";
import { skills } from "src/skills";
import Avatar from "src/components/Avatar";
import Skill from "src/components/Skill";
import Work from "src/components/Work";

function Main({ t }) {
  return (
    <main className="landing__main">
      <div id="about">
        <div className="display--grid container" style={{ paddingTop: 50 }}>
          <Avatar src={"/assets/img/profile.jpg"} className="margin-x--auto" />
          <div className="about__content">
            <div style={{ marginBottom: 30 }} className="w-100">
              <h2>{t("about_me")}</h2>
              <p className="text--secondary">{t("about_me_text")}</p>
            </div>
            <div style={{ marginBottom: 30 }} className="w-100">
              <div className="display--flex justify-content--between align-items--start">
                <div>
                  <h2>{t("contact_details")}</h2>
                  <p className="text--secondary">
                    <span className="fas fa-map-marker-alt" />
                    {/* <FontAwesomeIcon icon={["fas", "map-marker-alt"]} /> */}
                    <span style={{ margin: 10 }}>{t("address")}</span>
                  </p>
                  <p className="text--secondary">
                    <span className="fas fa-mobile" />
                    {/* <FontAwesomeIcon icon={["fas", "mobile"]} /> */}
                    <span style={{ margin: 10 }}> {t("mobile")}</span>
                  </p>
                  <p className="text--secondary">
                    <span className="fab fa-google" />
                    {/* <FontAwesomeIcon icon={["fab", "google"]} /> */}
                    <span style={{ margin: 10 }}> {t("email")}</span>
                  </p>

                  <p className="text--secondary">
                    <span className="fab fa-github" />
                    {/* <FontAwesomeIcon icon={["fab", "google"]} /> */}
                    <span style={{ margin: 10 }}> {t("github")}</span>
                  </p>
                </div>
                <div>
                  <a
                    className="btn--primary"
                    href="https://drive.google.com/open?id=13uDjlZ23W39-aODEd1--_4GsM4ZsNynD"
                    download
                    target="_blank"
                  >
                    <span style={{ margin: 5 }}>
                      <span className="fas fa-download" />
                      {/* <FontAwesomeIcon icon={["fas", "download"]} /> */}
                    </span>
                    {t("download_resume")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="skills">
        <div className="container display--grid">
          <h2 className="margin-x--auto title" style={{ marginTop: 20 }}>
            {t("skills")}
          </h2>
          <ul className="skills">
            {skills &&
              skills.map(({ name, percent }, index) => (
                <li key={"skil" + index}>
                  <Skill name={name} percent={percent} />
                </li>
              ))}
          </ul>
        </div>
      </div>

      <div id="works">
        <div
          className="container"
          style={{ paddingTop: 30, paddingBottom: 30 }}
        >
          <h2 className="text-center">
            {t("works")}({t("useVpn")})
          </h2>
          <div className="display--flex justify-content--center">
            {works &&
              works.map((work, index) => (
                <Work
                  key={"works-" + index}
                  image={work.image}
                  heading={work.title}
                  description={work.description}
                  link={work.link}
                  wrapperProps={{ className: "work__container" }}
                />
              ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default withTranslation("common")(Main);
