import { NavLink } from "react-router";
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
        <span className={styles.sectionTitle}>МЕНЮ</span>

        <NavLink
          to="/insights"
          onClick={onNavigate}
          className={({ isActive }) =>
            `${styles.navLink} ${isActive ? styles.active : ""}`
          }
        >
          <BulbOutlined />
          <span>Инсайты</span>
        </NavLink>
      </div>

      <div className={styles.bottom}>
        <div className={styles.profile}>
          <div className={styles.avatar}>A</div>
          <div className={styles.profileInfo}>
            <span className={styles.profileName}>Моё пространство</span>
            <span className={styles.profileDescription}>
              Личное пространство
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
