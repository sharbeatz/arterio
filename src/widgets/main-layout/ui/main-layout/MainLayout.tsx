import { useState } from "react";
import { Button, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../sidebar/Sidebar";
import styles from "./MainLayout.module.scss";

export const MainLayout = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className={styles.layout}>
      <aside className={styles.desktopSidebar}>
        <Sidebar />
      </aside>

      <div className={styles.main}>
        <header className={styles.mobileHeader}>
          <Button
            type="text"
            icon={<MenuOutlined />}
            onClick={() => setIsDrawerOpen(true)}
            aria-label="Открыть меню"
          />
          <span className={styles.mobileLogo}>Arterio</span>
        </header>

        <main className={styles.content}>
          <Outlet />
        </main>
      </div>

      <Drawer
        open={isDrawerOpen}
        onClose={closeDrawer}
        placement="left"
        width={250}
        closable={false}
        styles={{
          body: { padding: 0 },
        }}
      >
        <Sidebar onNavigate={closeDrawer} />
      </Drawer>
    </div>
  );
};
