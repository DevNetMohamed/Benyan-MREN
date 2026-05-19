import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer
      className={`align-items-center d-flex justify-content-center bg-body-secondary ${styles.footer}`}
    >
      <span>© 2026 Bunyan Real Estate. All rights reserved.v2.4.0</span>
    </footer>
  );
}

export default Footer;
