import { Layout } from "antd";
const { Sider, Content } = Layout;
import SiderComponent from "../../components/sider/sider";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "../home/home";
import Problems from "../problems/problems";
import Resume from "../resume/resume";
import NotFound from "../404/404";
import styles from "./app.module.css";

export default function App() {
  return (
    <Router>
      <Layout className={styles.layOut}>
        <Sider theme="light" className={styles.sider}>
          <SiderComponent />
        </Sider>
        <Content className={styles.content}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/problems" element={<Problems />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Content>
      </Layout>
    </Router>
  );
}
