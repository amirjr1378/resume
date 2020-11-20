import { withTranslation } from "src/i18n";

function Footer({ t }) {
  return (
    <footer>
      <div className="social-icons">
        <a href="https://www.instagram.com/jramir669/" target="_blank">
          <span className="fab fa-instagram" />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=989193211519"
          target="_blank"
        >
          <span className="fab fa-whatsapp" />
        </a>
        <a href="https://t.me/@amirjr1378" target="_blank">
          <span className="fab fa-telegram" />
        </a>
        <a href="https://github.com/amirjr1378" target="_blank">
          <span className="fab fa-github" />
        </a>
        <a href="https://gitlab.com/amirjr1378" target="_blank">
          <span className="fab fa-gitlab" />
        </a>
      </div>
      <p>{t("footer")}</p>
    </footer>
  );
}

export default withTranslation("common")(Footer);
