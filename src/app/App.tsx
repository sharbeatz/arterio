import { ConfigProvider } from "antd";
import ruRU from "antd/locale/ru_RU";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { InsightsPage } from "@/pages/insights-page";
import { App as AntdApp } from "antd";

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
        <BrowserRouter>
          <Routes>
            <Route path="/insights" element={<InsightsPage />} />
          </Routes>
        </BrowserRouter>
      </AntdApp>
    </ConfigProvider>
  );
}

export default App;
