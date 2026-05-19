import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  const links = [
    { icon: "fa-chart-line", title: "Status", path: "/" },
    { icon: "fa-users", title: "User management", path: "/users" },
    { icon: "fa-building", title: "Project management", path: "/project" },
    { icon: "fa-building", title: "Developers management", path: "/developer" },
    { icon: "fa-globe", title: "CMS", path: "/cms" },
    { icon: "fa-message", title: "Live Chat", path: "/live-chat" },
  ];

  return (
    <aside className={`min-vh-100 py-3 ${styles.sidebar}`}>
      <div className="px-4 fw-semibold fs-4 mb-4">Dashboard</div>

      <nav>
        {links.map((item, index) => (
          <NavLink
            className={`${styles.navItem} py-3 px-2 d-flex align-items-center gap-3`}
            key={index}
            to={item.path}
          >
            <i className={`fa-solid ${item.icon} ${styles.icon}`}></i>
            <span className={styles.linkTitle}>{item.title}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
