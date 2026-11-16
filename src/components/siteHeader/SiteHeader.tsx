import { Link, matchPath, useLocation } from "react-router-dom";
import { siteRoutes } from "../../constants/siteRoutes";
import styles from "./siteHeader.module.css";

export default function SiteHeader() {
  const { pathname } = useLocation();

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link className={styles.brand} to="/">Yanning Zhao</Link>
        <nav className={styles.nav} aria-label="Main navigation">
          {Object.values(siteRoutes).map(({ title, paths }) => {
            const [href] = paths;
            const active = paths.some((path) => matchPath(path, pathname));
            return (
              <Link key={href} to={href} aria-current={active ? "page" : undefined}>
                {title}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
