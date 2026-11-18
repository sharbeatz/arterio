import { ConfigProvider, App as AntdApp } from "antd";
import ruRU from "antd/locale/ru_RU";
import { Route, Routes, Navigate, HashRouter } from "react-router";

import { InsightsPage } from "@/pages/insights-page";
import { MainLayout } from "@/widgets/main-layout";

function App() {
  return (
    <ConfigProvider
      locale={ruRU}
      theme={{
        token: {
          colorPrimary: "#59D5D5",
          colorBgLayout: "#F4F6F7",
          colorBgContainer: "#FFFFFF",
          colorText: "#20242B",
          colorTextSecondary: "#929BA4",
          borderRadius: 12,
          fontFamily: "Inter, sans-serif",
        },
      }}
    >
      <AntdApp>
        <HashRouter>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Navigate to="/insights" replace />} />
              <Route path="/insights" element={<InsightsPage />} />
            </Route>
          </Routes>
        </HashRouter>
      </AntdApp>
    </ConfigProvider>
  );
}

export default App;
