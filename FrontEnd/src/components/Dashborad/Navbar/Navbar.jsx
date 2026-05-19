import { IoNotificationsOutline } from "react-icons/io5";
import styles from "./Navbar.module.css";

function Navbar({ adminName = "Super Admin" }) {
  return (
    <nav
      className={`${styles.nav} d-flex justify-content-between align-items-center shadow-sm bg-body-secondary p-2`}
    >
      <div className={`fs-3 fw-bold `}>DASHBOARD</div>
      <div className="d-flex justify-content-center align-items-center gap-3">
        <div className={styles.notificationSection}>
          <IoNotificationsOutline />

          <span
            className={`${styles.countNoti} bg-info text-white rounded-pill`}
          >
            3
          </span>
        </div>
        <div className="d-flex justify-content-center align-items-center gap-3">
          <span>{adminName}</span>
          <div className={styles.avater}>
            {adminName.charAt(0).toUpperCase()}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
