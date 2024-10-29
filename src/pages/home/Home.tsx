import { Image } from "antd";
import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.homePage}>
      <div className={styles.image}>
        <Image src="/RW.jpg" preview={false} width="33vw" />
      </div>
      <div className={styles.text}>
        <div className={styles.title}>About Yanning Zhao</div>
        <div className={styles.content}>Hi! I'm Yanning Zhao</div>
      </div>
    </div>
  );
}
