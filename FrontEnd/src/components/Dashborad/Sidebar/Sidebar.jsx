import styles from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";
import { MdDashboardCustomize } from "react-icons/md";
import { HiOutlineUsers } from "react-icons/hi";
import { GoProjectSymlink } from "react-icons/go";
import { PiBuildingsBold, PiWalletDuotone } from "react-icons/pi";
import { FaChartBar } from "react-icons/fa";
import { BsBuildingsFill, BsRobot } from "react-icons/bs";
import { SiLivechat } from "react-icons/si";
import { SlSettings } from "react-icons/sl";

export default function Sidebar() {
  const links = [
    { icon: <MdDashboardCustomize />, title: "Dashboard", path: "/" },
    {
      icon: <HiOutlineUsers />,
      title: "User management",
      path: "/user-management/users",
    },
    {
      icon: <GoProjectSymlink />,
      title: "Project management",
      path: "/project-management/project",
    },
    {
      icon: <PiBuildingsBold />,
      title: "Developers management",
      path: "/developer-management/developer",
    },
    { icon: <PiWalletDuotone />, title: "WEBSITE CMS", path: "/website/cms" },
    { icon: <FaChartBar />, title: "REPORTES", path: "/reportes" },
    { icon: <BsRobot />, title: "LEADES BOT", path: "/leades-bot" },
    { icon: <SiLivechat />, title: "Live Chat", path: "/live-chat" },
    { icon: <SlSettings />, title: "SETTINGES", path: "/Settings" },
  ];

  return (
    <aside className={` min-vh-100 py-4 px-3 ${styles.sidebar} `}>
      <div className={`px-4 fs-6 mb-3 ${styles.logo} `}>
        <BsBuildingsFill />
        BUNYAN REAL ESTATE
      </div>

      <nav>
        {links.map((item, index) => (
          <NavLink
            className={`${styles.navItem} py-3 px-2 d-flex align-items-center gap-3`}
            key={index}
            to={item.path}
          >
            <span className={styles.icon}>{item.icon}</span>
            <span className={styles.linkTitle}>{item.title}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
