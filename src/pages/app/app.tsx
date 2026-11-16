import SiteHeader from "../../components/siteHeader/SiteHeader";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "../home/Home";
import Resume from "../resume/resume";
import NotFound from "../404/404";
import { siteRoutes } from "../../constants/siteRoutes";
import styles from "./app.module.css";

const pages = [
  { paths: siteRoutes.home.paths, element: <Home /> },
  { paths: siteRoutes.resume.paths, element: <Resume /> },
];

export default function App() {
  return (
    <Router>
      <SiteHeader />
      <main className={styles.content}>
        <Routes>
          {pages.flatMap(({ paths, element }) =>
            paths.map((path) => <Route key={path} path={path} element={element} />)
          )}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </Router>
  );
}
