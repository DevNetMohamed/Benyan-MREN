import Style from "./SearchFilter.module.css";
import { FiSearch } from "react-icons/fi";

export default function SearchFilter() {
  return (
    <div className={Style.wrapper}>
      {/* Search Input */}
      <div className={Style.searchBox}>
        <FiSearch className={Style.searchIcon} />
        <input
          type="text"
          className={Style.searchInput}
          placeholder="Search users by name, username or email..."
        />
      </div>

      <div className={Style.filterBox}>
        <span className={Style.filterLabel}>Role Filter:</span>
        <select className={Style.select}>
          <option value="">All Roles</option>
          <option value="admin">Super Admin</option>
          <option value="admin">Project Manager</option>
          <option value="developer">Developer</option>
          <option value="user">Agent</option>
        </select>
      </div>
    </div>
  );
}
