import { Button } from "antd";
import { siteRoutes } from "../../constants/siteRoutes";
import { matchPath, useLocation, useNavigate } from "react-router-dom";
import styles from "./sider.module.css";

export default function Sider() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <nav aria-label="Main navigation">
      {Object.values(siteRoutes).map(({ title, paths }) => {
        const [href] = paths;
        const selected = paths.some((path) => matchPath(path, pathname));
        return (
          <Button
            key={href}
            href={href}
            aria-current={selected ? "page" : undefined}
            className={styles.siderButton}
            color={selected ? "primary" : "default"}
            variant={selected ? "filled" : "text"}
            onClick={(event) => {
              if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
              event.preventDefault();
              navigate(href);
            }}
          >
            <span className={styles.siderButtonContent}>{title}</span>
          </Button>
        );
      })}
    </nav>
  );
}
