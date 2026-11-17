import { NavLink } from "react-router-dom";
import { BulbOutlined } from "@ant-design/icons";

import styles from "./Sidebar.module.scss";

interface SidebarProps {
  onNavigate?: () => void;
}

export const Sidebar = ({ onNavigate }: SidebarProps) => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <div className={styles.logoIcon}>A</div>
        <span>Arterio</span>
      </div>

      <div className={styles.navigation}>
        <span className={styles.sectionTitle}>MENU</span>

        <NavLink
          to="/insights"
          onClick={onNavigate}
          className={({ isActive }) =>
            `${styles.navLink} ${isActive ? styles.active : ""}`
          }
        >
          <BulbOutlined />
          <span>Insights</span>
        </NavLink>
      </div>

      <div className={styles.bottom}>
        <div className={styles.profile}>
          <div className={styles.avatar}>A</div>
          <div className={styles.profileInfo}>
            <span className={styles.profileName}>My Space</span>
            <span className={styles.profileDescription}>Personal space</span>
          </div>
        </div>
      </div>
    </div>
  );
};
